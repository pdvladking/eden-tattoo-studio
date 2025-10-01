"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      id="footer"
      className={`bg-ink text-bone py-20 px-6 transition-all duration-700 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Studio Info */}
        <div>
          <h3 className="text-xl font-semibold tracking-wide">
            Eden Tattoo Studio{" "}
            <span className="text-yellow-500">Kathmandu</span>
          </h3>
        </div>

        {/* Embedded Map */}
        <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg ring-1 ring-yellow-500/20">
          <iframe
            src="https://maps.google.com/maps?q=Eden%20Tattoo%20Studio%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/bookings" className="hover:text-yellow-500 transition">
            Book
          </Link>
          <Link href="/gallery" className="hover:text-yellow-500 transition">
            Gallery
          </Link>
          <Link href="/artists" className="hover:text-yellow-500 transition">
            Artists
          </Link>
          <Link href="/studio" className="hover:text-yellow-500 transition">
            About
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2 text-sm text-bone/70">
          <Link
            href="tel:+9779816245996"
            className="hover:text-yellow-500 transition"
          >
            📞 +977-9816245996
          </Link>
          <Link
            href="mailto:edentattoo73@gmail.com"
            className="hover:text-yellow-500 transition"
          >
            📧 edentattoo73@gmail.com
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl text-bone/70">
          {[FaFacebookF, FaInstagram, FaTiktok].map((Icon, i) => (
            <Link
              key={i}
              href={
                i === 0
                  ? "https://www.facebook.com/profile.php?id=100076221092054"
                  : i === 1
                  ? "https://www.instagram.com/edentattoonepal/"
                  : "https://www.tiktok.com/@edentattoonepal"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={["Facebook", "Instagram", "TikTok"][i]}
              className="hover:text-yellow-500 transition transform hover:scale-110 hover:-translate-y-1 hover:shadow-yellow-500/30"
            >
              <Icon />
            </Link>
          ))}
        </div>

        {/* Studio Policy */}
        <div className="max-w-xl text-xs text-bone/60 space-y-2 pt-6">
          <p>Clients must be 18 or older to get tattooed.</p>
          <p>Diabetic clients require medical clearance before booking.</p>
          <p>Drug and alcohol use is strictly prohibited on studio premises.</p>
          <p>Respectful behavior is mandatory at all times.</p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-bone/10 to-yellow-500/20" />

        {/* Copyright */}
        <p className="text-xs text-bone/50 tracking-wide">
          © {new Date().getFullYear()} Eden Tattoo Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
