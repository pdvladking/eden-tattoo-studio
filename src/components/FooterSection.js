import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer" className="py-12 px-6 bg-ink text-bone text-center">
      <p className="mb-4">Eden Tattoo Studio, Kathmandu</p>

      {/* Embedded Google Map */}
      <div className="w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden shadow-md">
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

      <div className="flex justify-center gap-4 mb-6">
        <Link href="#bookings">Book</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#artists">Artists</Link>
        <Link href="#about">About</Link>
      </div>

      <p className="text-sm text-bone/60">© 2025 Eden Tattoo Studio</p>
    </footer>
  );
}
