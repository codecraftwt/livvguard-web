import Hero from "@/components/sections/Hero";
import Modules from "@/components/sections/Modules";
import FeatureRows from "@/components/sections/FeatureRows";
import About from "@/components/sections/About";
import Plans from "@/components/sections/Plans";
import AppDownload from "@/components/sections/AppDownload";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Modules />
      <FeatureRows />
      <About />
      <Plans />
      <AppDownload />
      <Faq />
      <Cta />
    </>
  );
}
