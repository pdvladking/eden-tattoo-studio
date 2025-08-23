import Link from "next/link";

export default function BookingCTASection() {
  return (
    <section
      id="bookings"
      className="py-24 px-6 bg-rose-600 text-bone text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Mutate?</h2>
      <p className="text-lg mb-6">Limited slots. Premium intent only.</p>
      <Link href="/bookings">
        <button className="px-6 py-3 bg-bone text-ink rounded-full font-semibold hover:bg-white transition">
          Book Your Session
        </button>
      </Link>
    </section>
  );
}
