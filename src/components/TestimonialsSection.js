import { useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I walked in with a sketch and walked out with a masterpiece. Eden doesn’t just ink—they translate.",
      name: "Ravi S.",
      type: "Blackwork Sleeve",
    },
    {
      quote:
        "The studio vibe, the precision, the aftercare—everything felt intentional. I’ll be back for more.",
      name: "Anisha T.",
      type: "Fine-line Floral",
    },
    {
      quote:
        "It’s not just a tattoo. It’s a ritual. Eden made me feel seen, heard, and marked with meaning.",
      name: "Kiran D.",
      type: "Script Typography",
    },
    {
      quote:
        "Eden’s work healed more than skin. It gave me closure I didn’t know I needed.",
      name: "Sita R.",
      type: "Scar Cover-Up",
    },
    {
      quote:
        "From sketch to skin, the process was sacred. Eden’s precision is unmatched.",
      name: "Arjun V.",
      type: "Geometric Chestpiece",
    },
    {
      quote:
        "Every detail felt intentional—from the ink to the energy. Eden is a sanctuary.",
      name: "Meera L.",
      type: "Mandala Backpiece",
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
            className="bg-obsidian/40 p-6 rounded-lg shadow-md border border-veil/30 hover:border-yellow-500 transition"
          >
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
