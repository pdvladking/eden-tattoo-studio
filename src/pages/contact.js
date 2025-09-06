import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send("service_dysnhy6", "template_28yr2ql", form, "DDC-tGUE-LJqFcuLL")
      .then(() => {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("Failed to send. Try again.");
      })
      .finally(() => setLoading(false));
  };

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
            Whether you&apos;re curious about styles, pricing, or healing
            rituals—drop us a message. We respond with care, not templates.
          </p>
        </section>

        {/* Contact Form */}
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
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-ink/20 rounded px-4 py-2 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-ink/20 rounded px-4 py-2 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-ink/20 rounded px-4 py-2 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Ask us anything—style, availability, healing, or custom requests..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-yellow-500 text-black font-semibold py-3 rounded transition ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-yellow-400"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center mt-4 text-green-600">{status}</p>
              )}
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
