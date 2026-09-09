import { Hero } from "@/components/sections/Hero";
import { WhatIsAtria } from "@/components/sections/WhatIsAtria";
import { MainAreas } from "@/components/sections/MainAreas";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsAtria />
      <MainAreas />
      <Ecosystem />
      <FinalCTA />
    </>
  );
}
