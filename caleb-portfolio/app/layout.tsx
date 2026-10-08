import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "Caleb Macedo - Portfolio",
  description: "Documentary photography of everyday life and the people in it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 mt-[60px] pt-30px">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
