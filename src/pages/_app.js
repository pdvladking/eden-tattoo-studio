import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FooterSection from "../components/FooterSection";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FooterSection />
      <SpeedInsights />
    </>
  );
}
