import Image from "next/image";
import Hero from "./section/Hero";
import Services from "./section/Services";
import LearnMore from "@/app/section/LearnMore";
import CaseStudies from "./section/CaseStudies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <LearnMore />
      <CaseStudies />
    </div>
  );
}
