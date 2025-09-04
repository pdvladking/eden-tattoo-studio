"use client";
import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  const images = [
    "/assets/tattoos/gallery-preview-1.jpg",
    "/assets/tattoos/gallery-preview-2.jpg",
    "/assets/tattoos/gallery-preview-3.jpg",
    "/assets/tattoos/gallery-preview-4.jpg",
    "/assets/tattoos/gallery-preview-5.jpg",
  ];

  return (
    <section id="gallery" className="py-14 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-yellow-500">Studio</span> Reels
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Curated works from the studio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg group shadow-md"
            >
              <Image
                src={src}
                alt={`Tattoo artwork ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-yellow-500 text-xs font-medium">
                  Preview
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/gallery" passHref legacyBehavior>
            <a className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition duration-300 shadow hover:shadow-yellow-500/40">
              Browse Full Gallery →
            </a>
          </Link>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-2" />
      </div>
    </section>
  );
}
