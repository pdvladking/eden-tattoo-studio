"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const allImages = [
  {
    src: "/assets/gallery/oriental-1.webp",
    category: "oriental",
    date: "2025-09-28",
  },
  {
    src: "/assets/gallery/oriental-2.webp",
    category: "oriental",
    date: "2025-09-27",
  },
  {
    src: "/assets/gallery/oriental-3.webp",
    category: "oriental",
    date: "2025-09-26",
  },
  {
    src: "/assets/gallery/oriental-4.webp",
    category: "oriental",
    date: "2025-09-25",
  },
  {
    src: "/assets/gallery/oriental-5.webp",
    category: "oriental",
    date: "2025-09-24",
  },
  {
    src: "/assets/gallery/oriental-6.webp",
    category: "oriental",
    date: "2025-09-23",
  },
  {
    src: "/assets/gallery/oriental-7.webp",
    category: "oriental",
    date: "2025-09-22",
  },
  {
    src: "/assets/gallery/fineline-1.webp",
    category: "fine-line",
    date: "2025-09-21",
  },
  {
    src: "/assets/gallery/fineline-2.webp",
    category: "fine-line",
    date: "2025-09-20",
  },
  {
    src: "/assets/gallery/fineline-3.webp",
    category: "fine-line",
    date: "2025-09-19",
  },
  {
    src: "/assets/gallery/fineline-4.webp",
    category: "fine-line",
    date: "2025-09-18",
  },
  {
    src: "/assets/gallery/fineline-5.webp",
    category: "fine-line",
    date: "2025-09-17",
  },
  {
    src: "/assets/gallery/fineline-6.webp",
    category: "fine-line",
    date: "2025-09-16",
  },
  {
    src: "/assets/gallery/geo-1.webp",
    category: "geometric",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/geo-2.webp",
    category: "geometric",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/geo-3.webp",
    category: "geometric",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/geo-4.webp",
    category: "geometric",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/geo-5.webp",
    category: "geometric",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/geo-6.webp",
    category: "geometric",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/realism-1.webp",
    category: "realism",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/realism-2.webp",
    category: "realism",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/realism-3.webp",
    category: "realism",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/realism-4.webp",
    category: "realism",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/realism-5.webp",
    category: "realism",
    date: "2025-09-15",
  },
  {
    src: "/assets/gallery/realism-6.webp",
    category: "realism",
    date: "2025-09-15",
  },
  {
    src: "/assets/piercings/piercing-1.webp",
    category: "piercing",
    date: "2025-10-11",
  },
  {
    src: "/assets/piercings/piercing-2.webp",
    category: "piercing",
    date: "2025-10-11",
  },
  {
    src: "/assets/piercings/piercing-5.webp",
    category: "piercing",
    date: "2025-10-11",
  },
  {
    src: "/assets/piercings/piercing-7.webp",
    category: "piercing",
    date: "2025-10-11",
  },
  {
    src: "/assets/piercings/piercing-8.webp",
    category: "piercing",
    date: "2025-10-11",
  },
];

export default function GalleryPage() {
  const [category, setCategory] = useState("all");

  const filteredImages = useMemo(() => {
    return category === "all"
      ? allImages
      : allImages.filter((img) => img.category === category);
  }, [category]);

  return (
    <>
      <Head>
        <title>Gallery | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Explore our tattoo gallery—bold ink, fine-line elegance, and stories etched in skin. Eden Tattoo Nepal showcases precision and passion."
        />
        <link rel="canonical" href="https://www.edentattoonepal.com/gallery" />
      </Head>

      <Navbar />

      <main>
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-playfair font-bold mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-bone/80 max-w-2xl mx-auto"
          >
            Explore our work—from bold blackwork to delicate line art. Every
            piece tells a story.
          </motion.p>
        </section>

        <section className="px-6 py-6 bg-bone text-ink">
          <div className="max-w-6xl mx-auto">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-ink bg-bone text-ink focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Categories</option>
              <option value="oriental">Oriental Tattoos</option>
              <option value="geometric">Geometric Tattoos</option>
              <option value="fine-line">Fine Line Tattoos</option>
              <option value="realism">Realism Tattoos</option>
              <option value="piercing">Piercings</option>
            </select>
          </div>
        </section>

        <section className="pb-14 px-6 bg-bone text-ink">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.length > 0 && (
              <motion.div
                key={0}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-yellow-500/20 transform transition-transform duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 group"
              >
                <div className="relative">
                  <Image
                    src={filteredImages[0].src}
                    alt={`Tattoo 1`}
                    width={600}
                    height={400}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                    {filteredImages[0].category} •{" "}
                    {new Date(filteredImages[0].date).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            )}

            {filteredImages.slice(1).map((img, idx) => (
              <motion.div
                key={idx + 1}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:shadow-yellow-500/20 transform transition-transform duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 group"
              >
                <div className="relative">
                  <Image
                    src={img.src}
                    alt={`Tattoo ${idx + 2}`}
                    width={600}
                    height={400}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                    {img.category} • {new Date(img.date).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-10 px-6 text-center bg-ink text-bone">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4"
          >
            Inspired by what you see?
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <Link
              href="/bookings"
              aria-label="Book your tattoo session"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Book Your Session
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}
