import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryPage() {
  const [query, setQuery] = useState("");

  const images = [
    "/assets/gallery/ink-1.webp",
    "/assets/gallery/ink-2.webp",
    "/assets/gallery/ink-3.webp",
    "/assets/gallery/ink-4.webp",
    "/assets/gallery/ink-5.webp",
    "/assets/gallery/ink-6.webp",
    "/assets/gallery/ink-7.webp",
    "/assets/gallery/ink-8.webp",
    "/assets/gallery/ink-9.webp",
    "/assets/gallery/ink-10.webp",
    "/assets/gallery/ink-11.webp",
    "/assets/gallery/ink-12.webp",
    "/assets/gallery/ink-13.webp",
    "/assets/gallery/ink-14.webp",
  ];

  const filteredImages = images.filter((src) =>
    src.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Gallery | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Explore our tattoo gallery—bold ink, fine-line elegance, and stories etched in skin. Eden Tattoo Nepal showcases precision and passion."
        />
        <meta
          name="keywords"
          content="Tattoo Gallery Nepal, Blackwork Tattoos, Fine-line Ink, Eden Tattoo Kathmandu"
        />
        <meta name="author" content="Eden Tattoo Nepal" />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Thamel, Kathmandu" />
        <meta name="geo.position" content="27.73384;85.38173" />

        {/* Open Graph */}
        <meta property="og:title" content="Gallery | Eden Tattoo Nepal" />
        <meta
          property="og:description"
          content="Browse Eden Tattoo Nepal's gallery of bold blackwork and delicate line art. Every piece tells a story."
        />
        <meta property="og:image" content="/assets/gallery/ink-1.webp" />
        <meta
          property="og:url"
          content="https://www.edentattoonepal.com/gallery"
        />
        <meta property="og:type" content="article" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.edentattoonepal.com/gallery" />
      </Head>

      <Navbar />

      <main>
        {/* Hero */}
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
            Every piece tells a story. Explore our work—from bold blackwork to
            delicate line art. This is Eden, etched in skin.
          </motion.p>
        </section>

        {/* Search Input */}
        <section className="px-6 py-6 bg-bone text-ink">
          <div className="max-w-6xl mx-auto">
            <input
              type="text"
              placeholder="Search tattoos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-ink bg-bone text-ink focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </section>

        {/* Image Grid */}
        <section className="pb-14 px-6 bg-bone text-ink">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <Image
                  src={src}
                  alt={`Tattoo ${idx + 1}`}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
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
