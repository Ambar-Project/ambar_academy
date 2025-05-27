import { HeroSection } from "@/components/HomePage/heroSection";
import "./home.css";
import { Metadata } from "next";
import { PitchSection } from "@/components/HomePage/pitchSection";
import { ScrollContainer } from "@/components/HomePage/scrollContainer";
import { SupportSection } from "@/components/HomePage/supportSection";



export default function Home() {
  return (
    <div className="home">
      <HeroSection id="home"/>
      <PitchSection id="pitch"/>
      <ScrollContainer id="ecossistema"/>
      <SupportSection id="suporte"/>
    </div>
  );
}
