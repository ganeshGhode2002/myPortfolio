import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import MetricsSection from "@/components/MetricsSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import CertificationsSection from "@/components/CertificationsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MetricsSection />
      <ProjectsSection />
      <TechStackSection/>
      <AboutSection/>
      <CertificationsSection />
    </>
  );
}
