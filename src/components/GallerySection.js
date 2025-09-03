"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function GallerySection() {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft === 0);
    setAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const images = [
    "/assets/tattoos/gallery-preview-1.jpg",
    "/assets/tattoos/gallery-preview-2.jpg",
    "/assets/tattoos/gallery-preview-3.jpg",
    "/assets/tattoos/gallery-preview-4.jpg",
    "/assets/tattoos/gallery-preview-5.jpg",
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-bone text-ink">
      <h2 className="text-3xl font-bold text-center mb-8">Studio Reels</h2>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          disabled={atStart}
          className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-ink text-bone px-3 py-2 rounded-full transition ${
            atStart ? "opacity-30 cursor-default" : "hover:bg-yellow-500"
          }`}
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={atEnd}
          className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-ink text-bone px-3 py-2 rounded-full transition ${
            atEnd ? "opacity-30 cursor-default" : "hover:bg-yellow-500"
          }`}
        >
          ▶
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 snap-x px-1 py-4 md:px-12 md:scroll-smooth scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Tattoo ${i + 1}`}
              width={300}
              height={300}
              className="rounded-lg shadow-md snap-center shrink-0 hover:scale-105 transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>

      {/* View Full Gallery Button */}
      <div className="text-center mt-12">
        <Link href="/gallery">
          <button className="px-6 py-3 bg-ink text-bone rounded-full font-semibold hover:bg-yellow-500 border hover:text-ink transition duration-200">
            View Full Gallery
          </button>
        </Link>
      </div>
      {/* Gradient Accent Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-yellow-500/30 via-bone/20 to-yellow-500/30 mt-12" />
    </section>
  );
}
