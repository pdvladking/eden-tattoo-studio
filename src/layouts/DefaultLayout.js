"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import BookingCTASection from "../components/BookingCTASection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <BookingCTASection />
      <TestimonialsSection />
    </main>
  );
}
