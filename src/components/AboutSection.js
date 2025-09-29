"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className={`py-14 px-6 text-center bg-ink text-bone transition-all duration-700 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative w-fit mx-auto mb-6">
          <div className="absolute inset-0 w-[160px] h-[160px] bg-yellow-500 opacity-10 blur-2xl rounded-full z-0" />
          <Image
            src="/assets/tattoos/lead-artist.webp"
            alt="Lead tattoo artist in Kathmandu | Eden Tattoo Nepal"
            width={160}
            height={160}
            className="relative rounded-full shadow-lg object-cover z-10"
          />
        </div>
        <h2 className="text-3xl font-playfair font-bold mb-4">
          Founded in <span className="text-yellow-500">2015</span>, we have been
          serving our clients for over a decade.
        </h2>
        <p className="text-lg text-bone/80 max-w-2xl mx-auto">
          Welcome to Eden Tattoo Nepal. From{" "}
          <span className="text-yellow-500 font-semibold">
            bold statement pieces
          </span>{" "}
          to fine-line elegance, we turn your ideas into tattoos you’ll wear
          with pride.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-14 px-6 text-center bg-bone text-ink transition-all duration-700 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-3xl font-playfair font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Custom Tattoo Design",
              desc: "Tailored artwork that reflects your story, style, and symbolism.",
            },
            {
              title: "Fine Line & Minimalist",
              desc: "Precision ink for subtle, elegant, and timeless pieces.",
            },
            {
              title: "Cover-Ups & Reworks",
              desc: "Transform old ink into fresh art with expert layering and shading.",
            },
            {
              title: "Piercing Services",
              desc: "Safe, sterile, and stylish—ear, nose, and body piercings available.",
            },
            {
              title: "Consultation & Aftercare",
              desc: "We guide you from idea to healing—because good ink deserves good care.",
            },
            {
              title: "Flash Days & Events",
              desc: "Limited-edition designs and guest artist sessions—follow us for drops.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-ink text-bone p-6 rounded-lg shadow-md border-2 border-transparent hover:border-yellow-500 transform transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-yellow-500/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                {service.title}
              </h3>
              <p className="text-bone/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gradient Accent Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-2" />
    </>
  );
}
