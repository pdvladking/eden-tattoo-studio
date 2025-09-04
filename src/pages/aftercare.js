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
            <div>
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">
                Day 1–3: Initial Healing
              </h2>
              <ul className="list-disc list-inside text-ink/80 space-y-1">
                <li>
                  Leave the bandage on for{" "}
                  <span className="text-yellow-500">2–4 hours</span>{" "}
                  post-session.
                </li>
                <li>
                  Wash gently with{" "}
                  <span className="text-yellow-500">lukewarm water</span> and{" "}
                  <span className="text-yellow-500">fragrance-free soap</span>.
                </li>
                <li>
                  Pat dry with clean towel—
                  <span className="text-yellow-500">no rubbing</span>.
                </li>
                <li>
                  Apply thin layer of{" "}
                  <span className="text-yellow-500">healing ointment</span>{" "}
                  (studio-recommended only).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">
                Day 4–14: Ritual Care
              </h2>
              <ul className="list-disc list-inside text-ink/80 space-y-1">
                <li>
                  Wash once daily,{" "}
                  <span className="text-yellow-500">moisturize twice</span>{" "}
                  daily.
                </li>
                <li>
                  Do not <span className="text-yellow-500">scratch</span>,{" "}
                  <span className="text-yellow-500">pick</span>, or{" "}
                  <span className="text-yellow-500">peel</span> scabs.
                </li>
                <li>
                  Avoid <span className="text-yellow-500">swimming</span>,{" "}
                  <span className="text-yellow-500">sun exposure</span>, and{" "}
                  <span className="text-yellow-500">tight clothing</span>.
                </li>
                <li>
                  Let the skin breathe—
                  <span className="text-yellow-500">
                    loose, clean fabrics
                  </span>{" "}
                  only.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-yellow-500">
                Long-Term Respect
              </h2>
              <ul className="list-disc list-inside text-ink/80 space-y-1">
                <li>
                  Use <span className="text-yellow-500">SPF 50+</span> on healed
                  tattoos to prevent fading.
                </li>
                <li>
                  <span className="text-yellow-500">Hydrate your skin</span>
                  —your ink lives in it.
                </li>
                <li>
                  Book <span className="text-yellow-500">touch-ups</span> if
                  needed—art deserves upkeep.
                </li>
              </ul>
            </div>
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
