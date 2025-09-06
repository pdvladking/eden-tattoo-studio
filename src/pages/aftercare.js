import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AftercarePage() {
  return (
    <>
      <Head>
        <title>Aftercare | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Tattoo aftercare rituals from Eden Tattoo Nepal—protect your ink, heal with precision, and honor the art."
        />
      </Head>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4 text-yellow-500">
            Aftercare
          </h1>
          <p className="text-lg text-bone/80 max-w-2xl mx-auto">
            Your tattoo is a <span className="text-yellow-500">wound</span>, a{" "}
            <span className="text-yellow-500">ritual</span>, and a{" "}
            <span className="text-yellow-500">story</span>. Treat it with
            respect. Here’s how to{" "}
            <span className="text-yellow-500">protect the art</span> and{" "}
            <span className="text-yellow-500">heal with precision</span>.
          </p>
        </section>

        {/* Care Protocols */}
        <section className="py-14 px-6 bg-bone text-ink">
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Day 1–3: Initial Healing",
                steps: [
                  "Leave the bandage on for 2–4 hours post-session.",
                  "Wash gently with lukewarm water and fragrance-free soap.",
                  "Pat dry with clean towel—no rubbing.",
                  "Apply thin layer of healing ointment (studio-recommended only).",
                ],
              },
              {
                title: "Day 4–14: Ritual Care",
                steps: [
                  "Wash once daily, moisturize twice daily.",
                  "Do not scratch, pick, or peel scabs.",
                  "Avoid swimming, sun exposure, and tight clothing.",
                  "Let the skin breathe—loose, clean fabrics only.",
                ],
              },
              {
                title: "Long-Term Respect",
                steps: [
                  "Use SPF 50+ on healed tattoos to prevent fading.",
                  "Hydrate your skin—your ink lives in it.",
                  "Book touch-ups if needed—art deserves upkeep.",
                ],
              },
            ].map((block, idx) => (
              <div
                key={idx}
                className="bg-ink text-bone p-6 rounded-lg shadow-md border-2 border-transparent hover:border-yellow-500 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <h2 className="text-xl font-semibold mb-2 text-yellow-500">
                  {block.title}
                </h2>
                <ul className="list-disc list-inside text-bone/80 space-y-1">
                  {block.steps.map((step, i) => (
                    <li key={i}>
                      {step
                        .split(
                          /(SPF 50\+|healing ointment|moisturize twice|no rubbing|loose, clean fabrics|fragrance-free soap|touch-ups|sun exposure|tight clothing|scratch|pick|peel|lukewarm water)/gi
                        )
                        .map((part, j) =>
                          /SPF 50\+|healing ointment|moisturize twice|no rubbing|loose, clean fabrics|fragrance-free soap|touch-ups|sun exposure|tight clothing|scratch|pick|peel|lukewarm water/i.test(
                            part
                          ) ? (
                            <span
                              key={j}
                              className="text-yellow-500 font-medium"
                            >
                              {part}
                            </span>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-6 text-center bg-ink text-bone">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">
            Questions or concerns?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Contact the Studio
          </Link>
        </section>
      </main>
    </>
  );
}
