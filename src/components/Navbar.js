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
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Studio", href: "/studio" },
    { name: "Artists", href: "/artists" },
    { name: "Gallery", href: "/gallery" },
    { name: "Aftercare", href: "/aftercare" },
    { name: "Bookings", href: "/bookings" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-black text-bone border-b border-yellow-500/20 ${
        scrolled ? "py-2 shadow-lg backdrop-blur-sm" : "py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="block group">
          <div className="relative w-[60px] h-[60px] transition duration-300 group-hover:scale-105 group-hover:opacity-90">
            <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-30 blur-xl z-0 animate-pulse-border group-hover:opacity-50 group-hover:scale-110 transition duration-300" />
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

        <div className="hidden md:flex items-center space-x-8 text-sm font-playfair">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition duration-300 hover:text-yellow-500 ${
                isActive(link.href) ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <button className="font-playfair h-[45px] px-5 bg-yellow-500 text-black border border-ink/20 rounded-full text-sm font-semibold transition duration-300 hover:bg-yellow-400 hover:scale-105">
              Contact
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="text-bone"
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
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen z-[9999] bg-black overflow-y-auto">
          <div className="max-w-md mx-auto h-full flex flex-col justify-between px-6 py-8 text-bone text-base font-playfair">
            <div className="flex justify-end mb-8">
              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="text-bone"
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
                  className={`block text-lg font-playfair transition duration-300 hover:text-yellow-400 ${
                    isActive(link.href) ? "text-yellow-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-8">
              <Link href="/contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className="font-playfair w-full h-[45px] px-5 bg-yellow-500 text-black border border-ink/20 rounded-full text-sm font-semibold transition duration-300 hover:bg-yellow-400 hover:scale-105"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
