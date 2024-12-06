import Image from "next/image";
import Hero from "./section/Hero";
import Services from "./section/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
}
