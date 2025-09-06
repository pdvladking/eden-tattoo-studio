import { useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Wonderful experience with Eden Tattoo. Their service was exceptional—friendly staff, very clean studio, and amazing skills. I love my tattoo, which was designed from a photo I took the morning I reached Thorong La Pass.",
      name: "Brett Allan",
      type: "Custom Landscape Piece · Tattoo Nepal",
    },
    {
      quote:
        "Travelled all the way from London to get Tattooed here! The artists are super friendly, they make sure you’re comfortable by not only making sure you’re happy with your tattoo but also get you tea/coffee. The studio itself is super clean and they stick to the highest standards with all equipment!.",
      name: "Nafisa Tamrakar.",
      type: "Dragon Tattoo · Kathmandu Studio",
    },
    {
      quote:
        "After 10 years of debating, I had the pleasure of getting my first tattoo at Eden Tattoo in Thamel. The staff there were extremely helpful - they kept the atmosphere light and fun to ease my anxiety. My tattoo artist collaborated with me on the design and offered professional tips to get the final design - which I absolutely adore! The facility is also extremely clean and sanitary.",
      name: "Neha.",
      type: "Bird Tattoo · Thamel Tattoo Studio",
    },
    {
      quote:
        "Best tattoo studio in Thamel do visit Highly recommend. Neat and clean. Professional artist. Artist listened my idea and he create beautiful design.",
      name: "Suraj Rawal.",
      type: "Custom Foot Design · Tattoo Nepal",
    },
    {
      quote:
        "5 stars! The owner is very kind, and the girl who did the piercings is super cool. I can 100% recommend Eden Tattoo for tattoos and piercings. I got a big piece and three piercings 💖",
      name: "Louisa Reimann",
      type: "Tattoo + Piercing Combo · Hygienic Studio Nepal",
    },
    {
      quote:
        "I did a cover-up and the results were absolutely amazing—fully satisfied! I also got a tiger tattoo on my leg, and it turned out incredible. Highly recommend Eden Tattoo. Super professional, hygienic studio, and chill environment. Do visit Eden Tattoo Nepal!",
      name: "Nirajan Shrestha",
      type: "Cover-up + Tiger Tattoo · Tattoo Nepal",
    },
    // Add more testimonials here as needed
  ];

  const testimonialsPerPage = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const paginated = testimonials.slice(
    page * testimonialsPerPage,
    (page + 1) * testimonialsPerPage
  );

  return (
    <section
      id="testimonials"
      className="py-10 px-6 bg-ink text-bone text-center"
    >
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-yellow-500">Client</span> Echoes
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paginated.map((t, i) => (
          <div
            key={i}
            className="bg-obsidian/40 p-6 rounded-lg shadow-md border border-veil/30 hover:border-yellow-500 transition duration-300 ease-in-out transform hover:scale-[1.03]"
            style={{ willChange: "transform" }}
          >
            {/* Fixed 5-Star Rating */}
            <div className="flex justify-center mb-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
            </div>

            <p className="text-bone/80 italic mb-4">“{t.quote}”</p>
            <div className="text-sm text-yellow-500 font-semibold">
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
          className="px-4 py-2 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-400 disabled:opacity-30"
        >
          ← Prev
        </button>
        <span className="text-bone/60 text-sm">
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="px-4 py-2 text-sm bg-yellow-500 text-black rounded hover:bg-yellow-400 disabled:opacity-30"
        >
          Next →
        </button>
      </div>

      {/* Gradient Accent Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-2" />
    </section>
  );
}
