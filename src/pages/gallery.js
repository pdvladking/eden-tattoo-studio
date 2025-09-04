import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  const images = [
    "/assets/gallery/ink1.jpg",
    "/assets/gallery/ink2.jpg",
    "/assets/gallery/ink3.jpg",
    "/assets/gallery/ink4.jpg",
    "/assets/gallery/ink5.jpg",
    "/assets/gallery/ink6.jpg",
  ];

  return (
    <>
      <Head>
        <title>Gallery | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Explore our tattoo gallery—bold ink, fine-line elegance, and stories etched in skin. Eden Tattoo Nepal showcases precision and passion."
        />
      </Head>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Gallery</h1>
          <p className="text-lg text-bone/80 max-w-2xl mx-auto">
            Every piece tells a story. Explore our work—from bold blackwork to
            delicate line art. This is Eden, etched in skin.
          </p>
        </section>

        {/* Image Grid */}
        <section className="py-14 px-6 bg-bone text-ink">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <Image
                  src={src}
                  alt={`Tattoo ${idx + 1}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-6 text-center bg-ink text-bone">
          <h2 className="text-2xl font-bold mb-4">Inspired by what you see?</h2>
          <a
            href="/bookings"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Book Your Session
          </a>
        </section>
      </main>
    </>
  );
}
