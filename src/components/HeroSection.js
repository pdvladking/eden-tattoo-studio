"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative w-full h-[90vh] bg-ink text-bone flex items-center justify-center overflow-hidden mt-20"
      >
        {/* Background Image + Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/tattoos/hero-3.webp"
            alt="Tattoo studio background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink/95" />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center px-6 max-w-3xl transition-all duration-700 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-waterbrush tracking-tight leading-tight mb-6">
            Ink your story.{" "}
            <span className="text-yellow-500 animate-pulse">Boldly.</span>
          </h1>
          <p className="text-lg md:text-xl text-bone/80 mb-8">
            Step inside, explore our work, and let’s create something <br />
            unforgettable together.
          </p>
          <Link href="/bookings">
            <button className="px-6 py-3 bg-yellow-500 border text-black rounded-full font-semibold hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition duration-300">
              Book Your Session
            </button>
          </Link>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-yellow-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      </section>

      {/* Gradient Accent Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-2" />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-border {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
        .animate-pulse-border {
          animation: pulse-border 2.5s infinite;
        }
      `}</style>
    </>
  );
}
