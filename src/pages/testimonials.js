import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Stories Etched in Skin | Eden Tattoo Nepal</title>
      </Head>

      <Navbar />

      <main className="flex-grow pt-32 pb-16 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 font-playfair text-center px-4">
          Stories <span className="text-yellow-500">Etched</span> in Skin
        </h1>

        {/* Full-width responsive image */}
        <div className="w-screen sm:max-w-[1440px] animate-breathe-aggressive">
          <Image
            src="/assets/testimonials-avatar/testimoni.svg"
            alt="Eden Studio testimonial web"
            width={1440}
            height={1024}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Testimonial impact + CTA */}
        <div className="mt-24 sm:mt-12 text-center px-4 pb-4 sm:pb-16">
          <p className="text-xl sm:text-2xl font-semibold mb-4">
            Trusted by <span className="text-yellow-500">1000+</span> happy
            clients across Nepal and beyond.
          </p>
          <Link
            href="/bookings"
            className="mt-8 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-transform duration-300 hover:scale-105 shadow hover:shadow-yellow-500/30"
          >
            Book Now
          </Link>
        </div>
      </main>
    </div>
  );
}
