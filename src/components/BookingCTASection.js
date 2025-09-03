import Link from "next/link";

export default function BookingCTASection() {
  return (
    <section
      id="bookings"
      className="py-24 px-6 bg-dark-600 text-bone text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Mark Your Moment?</h2>
      <p className="text-lg mb-6">Book Your Session. Own Your Story.</p>
      <Link href="/bookings">
        <button className="px-6 py-3 bg-bone text-ink rounded-full font-semibold hover:bg-yellow-400 border transition">
          Book Your Session
        </button>
      </Link>

      {/* Gradient Accent Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-yellow-500/30 via-bone/20 to-yellow-500/30 mt-12" />
    </section>
  );
}
