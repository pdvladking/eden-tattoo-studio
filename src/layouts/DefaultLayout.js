"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
/*import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import ArtistsSection from "../components/ArtistsSection";
import BookingCTASection from "../components/BookingCTASection";
import TestimonialsSection from "../components/TestimonialsSection";*/
import FooterSection from "../components/FooterSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FooterSection />
    </main>
  );
}
