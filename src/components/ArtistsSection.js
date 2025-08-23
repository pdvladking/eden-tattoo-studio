import Image from "next/image";

export default function ArtistsSection() {
  return (
    <section id="artists" className="py-24 px-6 bg-ink text-bone">
      <h2 className="text-3xl font-bold text-center mb-8">Meet the Artists</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-ink/90 p-6 rounded-lg shadow-lg text-center">
          <Image
            src="/assets/artists/eden.webp"
            alt="Eden"
            width={96}
            height={96}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Eden</h3>
          <p className="text-bone/70 mt-2">
            “I don’t tattoo designs—I translate emotions.”
          </p>
        </div>
        <div className="bg-ink/90 p-6 rounded-lg shadow-lg text-center">
          <Image
            src="/assets/artists/arya.webp"
            alt="Arya"
            width={96}
            height={96}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Arya</h3>
          <p className="text-bone/70 mt-2">
            “Every line is a story. Every shade is a soul.”
          </p>
        </div>
      </div>
    </section>
  );
}
