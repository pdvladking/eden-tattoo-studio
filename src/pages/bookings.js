import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_dyshniy6", "template_xxxxxx", form, "your_public_key")
      .then(() => setStatus("Booking sent!"))
      .catch(() => setStatus("Failed to send. Try again."));
  };

  return (
    <>
      <Head>
        <title>Book a Session | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Ready to ink your story? Book a session with Eden Tattoo Nepal—where precision meets ritual."
        />
      </Head>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4 text-yellow-500">
            Book a Session
          </h1>
          <p className="text-lg text-bone/80 max-w-2xl mx-auto">
            This isn’t just a booking—it’s the start of your ritual. Choose your
            slot, share your vision, and let Eden ink your story.
          </p>
        </section>

        {/* Booking Form */}
        <section className="py-14 px-6 bg-bone text-ink">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-1 text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="w-full border border-ink/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full border border-ink/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-black">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  className="w-full border border-ink/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-black">
                  Design Idea
                </label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-ink/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Tell us about your vision, placement, and style..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-400 transition"
              >
                Submit Booking Request
              </button>

              {status && (
                <p className="text-center text-green-600 mt-4">{status}</p>
              )}
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-6 text-center bg-ink text-bone">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">
            Need help before booking?
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
