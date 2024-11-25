import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import {ProjectsSection} from "@/components/Projects";
import{AboutSection} from "@/components/About";
import { ContactSection } from "@/components/Contact"; // Adjust the path based on your file structure
import {Footer} from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <h1></h1>
    </div>
  );
}
