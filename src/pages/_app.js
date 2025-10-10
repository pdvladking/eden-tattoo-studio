import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FooterSection from "../components/FooterSection";
import Head from "next/head";
import WhatsAppButton from "../components/WhatsAppButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Eden Tattoo Nepal | Custom Tattoos & Piercings in Kathmandu
        </title>

        {/* ✅ Favicon Logic */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ SEO Meta */}
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

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Eden Tattoo Nepal" />
        <meta
          property="og:description"
          content="Custom tattoos and piercings in Kathmandu. Hygienic studio, professional artists, unforgettable ink."
        />
        <meta property="og:image" content="/assets/logos/eden-logo.svg" />
        <meta property="og:url" content="https://www.edentattoonepal.com.np" />
        <meta property="og:type" content="website" />

        {/* ✅ Canonical */}
        <link rel="canonical" href="https://www.edentattoonepal.com.np" />

        {/* ✅ LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Eden Tattoo Nepal",
            image:
              "https://www.edentattoonepal.com.np/assets/logos/eden-logo.svg",
            url: "https://www.edentattoonepal.com.np",
            telephone: "+977-981-6245996",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Chaksibari Marg, Thamel",
              addressLocality: "Kathmandu",
              addressRegion: "Bagmati",
              postalCode: "44600",
              addressCountry: "NP",
            },
            openingHours: [
              "Monday 10:00-23:00",
              "Tuesday 10:00-23:00",
              "Wednesday 10:00-23:00",
              "Thursday 10:00-23:00",
              "Friday 10:00-23:00",
              "Saturday 10:00-23:00",
              "Sunday 10:00-23:00",
            ],
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
              "https://www.facebook.com/profile.php?id=100076221092054",
            ],
          })}
        </script>
      </Head>

      <Component {...pageProps} />
      <WhatsAppButton />
      <FooterSection />
      <SpeedInsights />
    </>
  );
}
