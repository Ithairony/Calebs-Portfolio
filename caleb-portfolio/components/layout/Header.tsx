"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const headerFont = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

const links = [
  { href: "/#gallery", label: "Photos" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && currentScrollY > 300) {
        setHidden(true);
      } else if (currentScrollY < prevScrollY.current) {
        setHidden(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Big name */}
      <div className={`${headerFont.className} bg-black text-white`}>
        <Link
          href="/"
          aria-label="Caleb Macedo, go to homepage"
          className="block px-[2vw] font- text-center pt-[1vw] text-[11.5vw] font-bold uppercase leading-[0.85] tracking-tight"
        >
          Caleb Macedo
        </Link>
      </div>

      {/* Sticky links */}
      <nav
        aria-label="Main navigation"
        className={`${headerFont.className} sticky top-0 z-50 bg-black px-[2vw] py-3 text-white transition-transform duration-300 motion-reduce:transition-none ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <ul className="flex justify-between text-xs font-bold uppercase sm:text-sm md:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-opacity hover:opacity-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}