import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="py-14 px-6 text-center bg-ink text-bone">
        <Image
          src="/assets/tattoos/lead-artist.jpg"
          alt="Lead artist at Eden Tattoo"
          width={160}
          height={160}
          className="mx-auto mb-6 rounded-full shadow-lg object-cover"
        />
        <h2 className="text-3xl font-playfair font-bold mb-4">
          Founded in <span className="text-yellow-500">2015</span>, we have been
          serving our clients for over a decade.
        </h2>
        <p className="text-lg text-bone/80 max-w-2xl mx-auto">
          Welcome to Eden Tattoo Nepal. From{" "}
          <span className="text-yellow-500 font-semibold">
            bold statement pieces
          </span>{" "}
          to fine-line elegance, we turn your ideas into tattoos you’ll wear
          with pride.
        </p>
      </section>

      {/* Gradient Accent Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-yellow-500/20 via-white/10 to-yellow-500/20 mt-2" />
    </>
  );
}
