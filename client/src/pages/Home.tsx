import { Helmet } from "react-helmet";
import HeroSection from "@/sections/home/HeroSection";
import ServicesSection from "@/sections/home/ServicesSection";
import AboutSection from "@/sections/home/AboutSection";
import ProcessSection from "@/sections/home/ProcessSection";
import ProjectsSection from "@/sections/home/ProjectsSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import CtaSection from "@/sections/home/CtaSection";
import FaqSection from "@/sections/home/FaqSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rooks Roofing - Quality Roofing Services You Can Trust</title>
        <meta 
          name="description" 
          content="Rooks Roofing provides top-notch residential and commercial roofing solutions throughout Central Oregon since 1995. Licensed, insured, and 5-star rated roofing services."
        />
        <meta property="og:title" content="Rooks Roofing - Quality Roofing Services You Can Trust" />
        <meta property="og:description" content="Providing top-notch residential and commercial roofing solutions throughout Central Oregon since 1995." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rooksroofing.com" />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
