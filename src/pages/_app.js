import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FooterSection from "../components/FooterSection";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Eden Tattoo Nepal | Custom Tattoos & Piercings in Kathmandu
        </title>
        <meta
          name="description"
          content="Professional tattoo and piercing studio in Thamel, Kathmandu. Hygienic, artistic, and unforgettable ink."
        />
        <meta
          name="keywords"
          content="Tattoo Nepal, Piercing Kathmandu, Thamel Tattoo Studio, Hygienic Tattoo Studio"
        />
        <meta name="author" content="Eden Tattoo Nepal" />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Thamel, Kathmandu" />
        <meta name="geo.position" content="27.73384;85.38173" />

        {/* Open Graph */}
        <meta property="og:title" content="Eden Tattoo Nepal" />
        <meta
          property="og:description"
          content="Custom tattoos and piercings in Kathmandu. Hygienic studio, professional artists, unforgettable ink."
        />
        <meta property="og:image" content="/assets/logos/eden-logo.svg" />
        <meta property="og:url" content="https://www.edentattoonepal.com" />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.edentattoonepal.com" />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Eden Tattoo Nepal",
            image: "https://www.edentattoonepal.com/assets/logos/eden-logo.svg",
            url: "https://www.edentattoonepal.com",
            telephone: "+977-9800000000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Chaksibari Marg, Thamel",
              addressLocality: "Kathmandu",
              addressRegion: "Bagmati",
              postalCode: "44600",
              addressCountry: "NP",
            },
            openingHours: "Mo-Su 10:00-19:00",
            priceRange: "$$",
            description:
              "Eden Tattoo Nepal is a professional tattoo and piercing studio located in Thamel, Kathmandu. We specialize in custom designs, fine-line work, cover-ups, and hygienic piercing services.",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 27.73384,
              longitude: 85.38173,
            },
            sameAs: [
              "https://www.instagram.com/edentattoonepal",
              "https://www.facebook.com/edentattoonepal",
            ],
          })}
        </script>
      </Head>

      <Component {...pageProps} />
      <FooterSection />
      <SpeedInsights />
    </>
  );
}
