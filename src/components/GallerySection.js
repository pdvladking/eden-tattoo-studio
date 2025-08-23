import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-6 bg-bone text-ink">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Mutations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <Image
          src="/assets/tattoos/sample-1.webp"
          alt="Tattoo 1"
          width={400}
          height={400}
          className="rounded-lg hover:scale-105 transition"
        />
        <Image
          src="/assets/tattoos/sample-2.webp"
          alt="Tattoo 2"
          width={400}
          height={400}
          className="rounded-lg hover:scale-105 transition"
        />
        <Image
          src="/assets/tattoos/sample-3.webp"
          alt="Tattoo 3"
          width={400}
          height={400}
          className="rounded-lg hover:scale-105 transition"
        />
      </div>
      <div className="text-center mt-8">
        <Link href="/gallery">
          <button className="px-6 py-3 bg-ink text-bone rounded-full font-semibold hover:bg-rose-600 transition">
            View Full Gallery
          </button>
        </Link>
      </div>
    </section>
  );
}
