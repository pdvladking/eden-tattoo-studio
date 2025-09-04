import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-ink text-bone py-20 px-6">
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
          <Link href="#bookings" className="hover:text-yellow-500 transition">
            Book
          </Link>
          <Link href="#gallery" className="hover:text-yellow-500 transition">
            Gallery
          </Link>
          <Link href="#artists" className="hover:text-yellow-500 transition">
            Artists
          </Link>
          <Link href="#about" className="hover:text-yellow-500 transition">
            About
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl text-bone/70">
          <Link
            href="https://www.facebook.com/profile.php?id=100076221092054"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instagram.com/edentattoonepal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            <FaTiktok />
          </Link>
          <Link
            href="edentattoo73@gmail.com"
            className="hover:text-yellow-500 transition"
          >
            <FaEnvelope />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-bone/10 to-yellow-500/20" />

        {/* Copyright */}
        <p className="text-xs text-bone/50 tracking-wide">
          © 2025 Eden Tattoo Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
