import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Questions, ideas, or special requests? Reach out to Eden Tattoo Nepal—we're here to guide your ink journey."
        />
      </Head>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4 text-yellow-500">
            Contact the Studio
          </h1>
          <p className="text-lg text-bone/80 max-w-2xl mx-auto">
            Whether you're curious about styles, pricing, or healing
            rituals—drop us a message. We respond with care, not templates.
          </p>
        </section>

        {/* Contact Form */}
        <section className="py-14 px-6 bg-bone text-ink">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block font-semibold mb-1 text-black">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-ink/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-black">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-ink/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-black">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-ink/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Ask us anything—style, availability, healing, or custom requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-6 text-center bg-ink text-bone">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">
            Prefer to book directly?
          </h2>
          <Link
            href="/bookings"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Book a Session
          </Link>
        </section>
      </main>
    </>
  );
}
