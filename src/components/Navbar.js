"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const isActive = (href) => router.pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events?.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events?.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Studio", href: "/studio" },
    { name: "Artists", href: "/artists" },
    { name: "Gallery", href: "/gallery" },
    { name: "Aftercare", href: "/aftercare" },
    { name: "Bookings", href: "/Bookings" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-md bg-ink/90 border-b border-yellow-500/20"
          : "bg-ink"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="block">
          <div className="relative w-[60px] h-[60px] hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-30 blur-xl animate-pulse z-0 hover:ring-2 hover:ring-yellow-500/40 transition" />
            <Image
              src="/assets/logos/eden-logo.svg"
              alt="Eden Tattoo Studio logo"
              width={45}
              height={45}
              className="relative z-10 object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-playfair text-bone">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition hover:text-yellow-500 ${
                isActive(link.href) ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <button className="font-playfair h-[45px] px-5 bg-yellow-500 text-black border border-ink/20 hover:bg-yellow-600 hover:text-bone hover:shadow-md hover:shadow-yellow-500/30 hover:ring-1 hover:ring-yellow-500/40 focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-full text-sm font-semibold transition duration-200">
              Contact
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          {!isOpen && (
            <button
              aria-label="Open menu"
              className="text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay — Solid Background */}
      <div
        className={`fixed inset-0 z-[999] bg-black/80 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-0 scale-95 translate-x-full pointer-events-none"
        }`}
      >
        <div className="max-w-md mx-auto h-full flex flex-col justify-between px-6 py-8 text-bone text-base font-playfair">
          <div className="flex justify-end mb-8">
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="text-bone focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg tracking-tight font-playfair hover:text-yellow-400 transition ${
                  isActive(link.href) ? "text-yellow-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-8">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="font-playfair w-full h-[45px] px-5 bg-yellow-500 text-black border border-ink/20 hover:bg-yellow-600 hover:text-bone hover:shadow-md hover:shadow-yellow-500/30 hover:ring-1 hover:ring-yellow-500/40 focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-full text-sm font-semibold transition duration-200">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
