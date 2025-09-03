import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="py-24 px-6 text-center bg-ink text-bone">
        <Image
          src="/assets/tattoos/lead-artist.jpg"
          alt="Lead artist at Eden Tattoo"
          width={160}
          height={160}
          className="mx-auto mb-6 rounded-full shadow-lg object-cover"
        />
        <h2 className="text-3xl font-bold mb-4">
          Founded in 2015, we have been serving our clients for over a decade.
        </h2>
        <p className="text-lg text-bone/80 max-w-2xl mx-auto">
          Welcome to Eden Tattoo Nepal. From bold statement pieces to fine-line
          elegance, we turn your ideas into tattoos you’ll wear with pride.
        </p>
      </section>

      {/* Gradient Accent Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-yellow-500/30 via-bone/20 to-yellow-500/30 my-12" />
    </>
  );
}
