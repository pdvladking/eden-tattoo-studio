"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function GallerySection() {
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  const scrollByAmount = 300;
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  const images = [
    "/assets/tattoos/gallery-preview-1.webp",
    "/assets/tattoos/gallery-preview-2.webp",
    "/assets/tattoos/gallery-preview-3.webp",
    "/assets/tattoos/gallery-preview-4.webp",
    "/assets/tattoos/gallery-preview-5.webp",
    "/assets/tattoos/gallery-preview-6.webp",
  ];

  return (
    <section
      id="gallery"
      className={`relative py-14 px-6 bg-black text-white transition-all duration-700 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-yellow-500">Studio</span> Reels
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Curated works from the studio
          </p>
        </div>

        {/* Scroll Arrows — Desktop & Tablet */}
        <div className="hidden sm:flex justify-between items-center mb-4 px-2">
          <button
            onClick={scrollLeft}
            className="text-yellow-500 hover:text-yellow-400 transition"
            aria-label="Scroll left"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="text-yellow-500 hover:text-yellow-400 transition"
            aria-label="Scroll right"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Scroll Cue — Mobile */}
        <div className="text-center text-xs text-white/40 mt-2 sm:hidden animate-pulse">
          Swipe to explore →
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollRef}
          id="gallery-scroll"
          className="relative w-full overflow-x-auto flex space-x-6 snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative min-w-[280px] h-[280px] flex-shrink-0 snap-center overflow-hidden rounded-lg group shadow-md border-2 border-transparent hover:border-yellow-500 transition duration-300 hover:scale-[1.03] hover:shadow-yellow-500/20"
            >
              <Image
                src={src}
                alt={`Tattoo preview artwork ${i + 1} | Eden Tattoo Nepal`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 z-10" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/gallery" passHref legacyBehavior>
            <a className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow hover:shadow-yellow-500/40">
              Browse Full Gallery
            </a>
          </Link>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
