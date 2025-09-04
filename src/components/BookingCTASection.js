import Link from "next/link";

export default function BookingCTASection() {
  return (
    <section
      id="bookings"
      className="py-14 px-6 bg-dark-600 text-bone text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-white">
        Ready to <span className="text-yellow-500">Mark Your Moment</span>?
      </h2>
      <p className="text-lg mb-16 text-bone/70">
        Book your session. Own your story.
      </p>
      <Link href="/bookings">
        <button className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition duration-300 shadow hover:shadow-yellow-500/40">
          Book Your Session
        </button>
      </Link>

      <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-2" />
    </section>
  );
}
