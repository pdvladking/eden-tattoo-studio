"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] bg-black text-white">
      {/* Hero Image */}
      <Image
        src="/assets/tattoos/hero.webp" // Your actual image
        alt="Eden Tattoo Studio hero image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center space-y-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Eden Tattoo Studio
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
          Precision. Ritual. Legacy. We don’t just ink skin—we mark evolution.
        </p>
        <Link href="/booking">
          <button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md text-base font-semibold transition">
            Book Your Session
          </button>
        </Link>
      </div>
    </section>
  );
}
