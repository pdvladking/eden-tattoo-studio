import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Studio Hygiene | Eden Tattoo Nepal</title>
        <meta
          name="description"
          content="Explore Eden Tattoo Nepal's hygiene standards, safety protocols, and studio environment. Your safety is our priority."
        />
        <meta
          name="keywords"
          content="Tattoo Hygiene Nepal, Piercing Safety Kathmandu, Hygienic Tattoo Studio, Eden Tattoo Thamel"
        />
        <meta name="author" content="Eden Tattoo Nepal" />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Thamel, Kathmandu" />
        <meta name="geo.position" content="27.73384;85.38173" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Studio Hygiene | Eden Tattoo Nepal"
        />
        <meta
          property="og:description"
          content="Discover Eden Tattoo Nepal's strict hygiene protocols and safe studio environment in Thamel, Kathmandu."
        />
        <meta property="og:image" content="/assets/logos/eden-logo.svg" />
        <meta
          property="og:url"
          content="https://www.edentattoonepal.com/studio"
        />
        <meta property="og:type" content="article" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.edentattoonepal.com/studio" />
      </Head>

      <Navbar />

      <main>
        {/* Studio Philosophy with image */}
        <section className="pt-24 sm:pt-28 px-6 bg-ink text-bone">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Inside Eden Tattoo
              </h2>
              <p className="text-lg text-bone/80 mb-4">
                <span className="font-playfair text-yellow-500 text-lg sm:text-xl tracking-wide">
                  Eden Tattoo
                </span>{" "}
                isn&apos;t just a studio—it&apos;s a{" "}
                <span className="text-yellow-500 font-semibold">system</span>.
                Every detail is intentional:{" "}
                <span className="text-yellow-500">airflow</span>,{" "}
                <span className="text-yellow-500">lighting</span>,{" "}
                <span className="text-yellow-500">layout</span>. You&apos;ll
                feel the{" "}
                <span className="font-semibold text-yellow-500">
                  difference
                </span>{" "}
                the moment you walk in.
              </p>
              <p className="text-lg text-bone/80 mb-4">
                We run{" "}
                <span className="text-yellow-500 font-semibold">
                  strict hygiene protocols
                </span>
                : <span className="text-yellow-500">single-use needles</span>,{" "}
                <span className="text-yellow-500">
                  medical-grade disinfectants
                </span>
                , and{" "}
                <span className="text-yellow-500">barrier protection</span>.{" "}
                <span className="font-semibold text-yellow-500">
                  Safety isn&apos;t a checkbox—it&apos;s a ritual
                </span>
                .
              </p>
              <p className="text-lg text-bone/80">
                Whether you&apos;re here for{" "}
                <span className="text-yellow-500">bold ink</span> or{" "}
                <span className="text-yellow-500">fine-line elegance</span>, our
                space is built to support your story.{" "}
                <span className="font-semibold text-yellow-500">
                  Eden is where it begins
                </span>
                .
              </p>
            </div>
            <div>
              <Image
                src="/assets/tattoos/shop-img1.webp"
                alt="Inside Eden Tattoo Studio"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Hygiene Protocols Grid */}
        <section className="py-14 px-6 bg-bone text-ink text-center">
          <h2 className="text-3xl font-playfair font-bold mb-8">
            Our Hygiene Standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Sterile Equipment",
                desc: "All needles and tubes are single-use and disposed of after each session.",
              },
              {
                title: "Sanitized Workstations",
                desc: "Our stations are disinfected before and after every client.",
              },
              {
                title: "Certified Inks",
                desc: "We use high-quality, skin-safe inks approved for professional use.",
              },
              {
                title: "Gloves & Barriers",
                desc: "Artists wear gloves and use protective barriers throughout the process.",
              },
              {
                title: "Client Prep",
                desc: "We guide you through skin prep and aftercare for optimal healing.",
              },
              {
                title: "Clean Air & Surfaces",
                desc: "Air purifiers and regular deep cleaning keep our studio fresh and safe.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-ink text-bone p-6 rounded-lg shadow-md border-2 border-transparent hover:border-yellow-500 transform transition duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                  {item.title}
                </h3>
                <p className="text-bone/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-6 text-center bg-ink text-bone">
          <h2 className="text-2xl font-bold mb-4">
            Ready to book your session?
          </h2>
          <Link
            href="/bookings"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>
        </section>
      </main>
    </>
  );
}
