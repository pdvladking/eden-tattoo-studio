import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer" className="py-12 px-6 bg-ink text-bone text-center">
      <p className="mb-4">Eden Tattoo Studio, Kathmandu</p>
      <div className="flex justify-center gap-4">
        <Link href="#bookings">Book</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#artists">Artists</Link>
        <Link href="#about">About</Link>
      </div>
      <p className="mt-6 text-sm text-bone/60">© 2025 Eden Tattoo Studio</p>
    </footer>
  );
}
