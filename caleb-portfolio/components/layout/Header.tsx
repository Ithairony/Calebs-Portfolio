"use client";

import { useEffect, useRef,useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" }
];


export default function Header() {
  
  const [ hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (( currentScrollY > prevScrollY.current && currentScrollY > 80)) {
      setHidden(true);
      setOpen(false);
    } else if (currentScrollY < prevScrollY.current) {
      setHidden(false);
    }

    prevScrollY.current = currentScrollY;
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <header className={`sticky top-0 z-50 px-4 py-4 transition-transform duration-300 motion-reduce:transition-none sm:px-6 sm:py-6 ${
    hidden ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="mx-auto max-w-7xl bg-neutral-100 px-5 py-4  sm:px-8">

        {/* Desktop / Mobile top bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Go to homepage"
            className="text-base font-black text-amber-300 uppercase tracking-[0.2em] sm:text-lg"
          >
            Caleb Macedo
            {/* Desktop tagline */}
            <p className=" text-xs text-slate-400 tracking-wide hidden md:block">
                Documentary photography of everyday life
            </p>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex gap-6 text-sm text-slate-600">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className=" text-slate-600 transition-opacity hover:opacity-50 "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-200 md:hidden"
          >

            {/* Hamburger / X icon */}
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-black transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open
              ? "mt-4 max-h-96 border-t border-neutral-200 pt-4"
              : "invisible max-h-0"
          }`}
        >
          {/* Mobile tagline */}
          <p className="mb-5 text-sm tracking-wide text-slate-400">
            Documentary photography of everyday life
          </p>

          <ul className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-slate-600 transition-opacity hover:opacity-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );

}