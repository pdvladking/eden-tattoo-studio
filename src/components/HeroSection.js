"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[90vh] bg-ink text-bone flex items-center justify-center overflow-hidden mt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/tattoos/hero-3.jpg"
          alt="Tattoo studio background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink/95" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-waterbrush tracking-tight leading-tight mb-6">
          Ink Your Story.<span className="text-yellow-500"> Boldly.</span>
        </h1>
        <p className="text-lg md:text-xl text-bone/80 mb-8">
          Eden Tattoo Studio blends artistry and soul—where every piece is a
          personal mutation.
        </p>
        <Link href="/bookings">
          <button className="px-6 py-3 border text-bone rounded-full font-semibold hover:bg-yellow-400 hover:shadow-lg transition duration-200">
            Book Your Session
          </button>
        </Link>
      </div>
    </section>
  );
}
