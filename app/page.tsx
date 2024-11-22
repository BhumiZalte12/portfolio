import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import {ProjectsSection} from "@/components/Projects";
import{AboutSection} from "@/components/About";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <h1></h1>
    </div>
  );
}
