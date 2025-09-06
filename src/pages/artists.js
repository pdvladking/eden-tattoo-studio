import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ArtistPage() {
  return (
    <>
      <Head>
        <title>Meet Our Artists | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Get to know the artists behind Eden Tattoo Nepal. Explore their styles, stories, and the passion they bring to every piece."
        />
        <meta
          name="keywords"
          content="Tattoo Artists Nepal, Fine-line Tattoo Kathmandu, Eden Tattoo Studio Thamel"
        />
        <meta name="author" content="Eden Tattoo Nepal" />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Thamel, Kathmandu" />
        <meta name="geo.position" content="27.73384;85.38173" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Meet Our Artists | Eden Tattoo Nepal"
        />
        <meta
          property="og:description"
          content="Discover the artists behind Eden Tattoo Nepal. Explore their styles, stories, and the passion they bring to every piece."
        />
        <meta property="og:image" content="/assets/artists/sagar.webp" />
        <meta
          property="og:url"
          content="https://www.edentattoonepal.com/artists"
        />
        <meta property="og:type" content="article" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.edentattoonepal.com/artists" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Meet the Artists
          </h1>
          <p className="text-lg text-bone/80 max-w-2xl mx-auto">
            Every artist at Eden Tattoo brings a unique story, style, and ritual
            to the studio. This isn&apos;t just ink—it&apos;s identity,
            engineered with care.
          </p>
        </section>

        {/* Artist Grid */}
        <section className="py-14 px-6 bg-bone text-ink">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Sagar Rana Magar",
                role: "Founder & Lead Artist",
                bio: "Sagar Rana Magar is the founder of Eden Tattoo Nepal, located in Thamel, Kathmandu. Known for his precision in fine-line work and his ability to blend traditional Nepali motifs with modern design, Sagar has built a reputation for intentional artistry and studio discipline. His approach to tattooing is rooted in ritual, hygiene, and emotional resonance—every piece is engineered to reflect the client’s story, not just inked for aesthetics.",
                img: "/assets/artists/sagar.webp",
              },
            ].map((artist, idx) => (
              <div
                key={idx}
                className="bg-ink text-bone rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <Image
                  src={artist.img}
                  alt={artist.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-bone/60 mb-2">{artist.role}</p>
                  <p className="text-bone/80 text-base">{artist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-6 text-center bg-ink text-bone">
          <h2 className="text-2xl font-bold mb-4">
            Want to work with a specific artist?
          </h2>
          <Link
            href="/bookings"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Book Your Session
          </Link>
        </section>
      </main>
    </>
  );
}
