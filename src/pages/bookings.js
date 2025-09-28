import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
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
      .send(
        "service_dysnhy6",
        "template_28yr2ql",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: formattedDate,
          time: form.time,
          message: form.message,
        },
        "DDC-tGUE-LJqFcuLL"
      )
      .then(() => {
        const bookingDate = new Date(form.date);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formattedDate = bookingDate.toLocaleDateString("en-US", options);

        setStatus(`Booking sent for ${formattedDate} at ${form.time} NPT.`);
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        });
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
        <title>Book a Session | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Ready to ink your story? Book a session with Eden Tattoo Nepal—where precision meets ritual."
        />
        <meta
          name="keywords"
          content="Tattoo Booking Nepal, Piercing Appointment Kathmandu, Eden Tattoo Studio Thamel"
        />
        <meta name="author" content="Eden Tattoo Nepal" />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Thamel, Kathmandu" />
        <meta name="geo.position" content="27.73384;85.38173" />
        <meta
          property="og:title"
          content="Book a Session | Eden Tattoo Nepal"
        />
        <meta
          property="og:description"
          content="Secure your tattoo or piercing appointment at Eden Tattoo Nepal. Hygienic studio, professional artists, unforgettable ink."
        />
        <meta property="og:image" content="/assets/logos/eden-logo.svg" />
        <meta
          property="og:url"
          content="https://www.edentattoonepal.com/bookings"
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.edentattoonepal.com/bookings" />
      </Head>

      <Navbar />

      <main>
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4 text-yellow-500">
            Book a Session
          </h1>
          <p className="text-lg text-bone/80 max-w-2xl mx-auto">
            This isn’t just a booking—it’s the start of your ritual. Choose your
            slot, share your vision, and let Eden ink your story.
          </p>
        </section>

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
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-ink/20 rounded px-4 py-2 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g. 97XXXXXXXX"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-black">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-ink/20 rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-black">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full border border-ink/20 rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-black">
                  Design Idea
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-ink/20 rounded px-4 py-2 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Tell us about your vision, placement, and style..."
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
                {loading ? "Sending..." : "Submit Booking Request"}
              </button>

              {status && (
                <p className="text-center mt-4 text-green-600">{status}</p>
              )}
            </form>
          </div>
        </section>

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
