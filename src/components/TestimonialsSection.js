"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Wonderful experience with Eden Tattoo. Their service was exceptional—friendly staff, very clean studio, and amazing skills. I love my tattoo, which was designed from a photo I took the morning I reached Thorong La Pass.",
      name: "Brett Allan",
      type: "Custom Landscape Piece · Tattoo Nepal",
      avatar: "/assets/testimonials/brett.jpg",
    },
    {
      quote:
        "Travelled all the way from London to get Tattooed here! The artists are super friendly, they make sure you’re comfortable by not only making sure you’re happy with your tattoo but also get you tea/coffee. The studio itself is super clean and they stick to the highest standards with all equipment!",
      name: "Nafisa Tamrakar",
      type: "Dragon Tattoo · Kathmandu Studio",
      avatar: "/assets/testimonials/nafisa.jpg",
    },
    {
      quote:
        "After 10 years of debating, I had the pleasure of getting my first tattoo at Eden Tattoo in Thamel. The staff there were extremely helpful—they kept the atmosphere light and fun to ease my anxiety. My tattoo artist collaborated with me on the design and offered professional tips to get the final design—which I absolutely adore!",
      name: "Neha",
      type: "Bird Tattoo · Thamel Tattoo Studio",
      avatar: "/assets/testimonials/neha.jpg",
    },
    {
      quote:
        "Best tattoo studio in Thamel. Highly recommend. Neat and clean. Professional artist. Artist listened to my idea and created a beautiful design.",
      name: "Suraj Rawal",
      type: "Custom Foot Design · Tattoo Nepal",
      avatar: "/assets/testimonials/suraj.jpg",
    },
    {
      quote:
        "5 stars! The owner is very kind, and the girl who did the piercings is super cool. I can 100% recommend Eden Tattoo for tattoos and piercings. I got a big piece and three piercings 💖",
      name: "Louisa Reimann",
      type: "Tattoo + Piercing Combo · Hygienic Studio Nepal",
      avatar: "/assets/testimonials/louisa.jpg",
    },
    {
      quote:
        "I did a cover-up and the results were absolutely amazing—fully satisfied! I also got a tiger tattoo on my leg, and it turned out incredible. Highly recommend Eden Tattoo. Super professional, hygienic studio, and chill environment.",
      name: "Nirajan Shrestha",
      type: "Cover-up + Tiger Tattoo · Tattoo Nepal",
      avatar: "/assets/testimonials/nirajan.jpg",
    },
  ];

  const testimonialsPerPage = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const paginated = testimonials.slice(
    page * testimonialsPerPage,
    (page + 1) * testimonialsPerPage
  );

  return (
    <section
      id="testimonials"
      className={`py-10 px-6 bg-ink text-bone text-center transition-all duration-700 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-yellow-500">Client</span> Echoes
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paginated.map((t, i) => (
          <div
            key={i}
            className="relative bg-obsidian/40 p-6 rounded-lg shadow-md border border-veil/30 transition-transform duration-500 ease-out hover:scale-[1.05] hover:-translate-y-1 hover:shadow-yellow-500/30 hover:border-yellow-500"
            style={{ willChange: "transform" }}
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 w-[200px] h-[200px] bg-yellow-500 opacity-10 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none z-0" />

            {/* Avatar */}
            <div className="relative z-10 flex justify-center mb-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-yellow-500 shadow-md">
                <Image
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority={i === 0}
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-2 relative z-10">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
            </div>

            {/* Quote */}
            <p className="text-bone/80 italic mb-4 relative z-10 text-sm md:text-base leading-relaxed">
              “{t.quote}”
            </p>

            {/* Name + Type */}
            <div className="text-sm text-yellow-500 font-semibold relative z-10">
              {t.name} · {t.type}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-4 py-2 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-400 disabled:opacity-30 flex items-center gap-1"
        >
          ← Prev
        </button>
        <span className="text-bone/60 text-sm">
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="px-4 py-2 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-400 disabled:opacity-30 flex items-center gap-1"
        >
          Next →
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-6" />
    </section>
  );
}
