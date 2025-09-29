"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookingCTASection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="bookings"
      className={`relative py-14 px-6 bg-dark-600 text-bone text-center transition-all duration-700 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">
        Ready to <span className="text-yellow-500">Mark Your Moment</span>?
      </h2>
      <p className="text-lg mb-6 text-bone/70">
        Book your session. Own your story.
      </p>

      {/* Ambient Glow Behind Button */}
      <div className="relative inline-block">
        <div className="absolute inset-0 w-[200px] h-[200px] bg-yellow-500 opacity-10 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none z-0" />
        <Link href="/bookings">
          <button className="relative z-10 flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 hover:scale-105 transition duration-300 shadow hover:shadow-yellow-500/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Your Session
          </button>
        </Link>
      </div>

      {/* Microcopy for trust */}
      <p className="text-xs text-bone/50 mt-4">
        No upfront payment. Just lock your slot.
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-6" />
    </section>
  );
}
