import { IntroSection } from "@/components/IntroSection";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ClosingSection } from "@/components/ClosingSection";
import { PantaiExperienceSection } from "@/components/PantaiExperienceSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PantaiExperienceSection />
      <ExperienceSection />
      <ClosingSection />
    </>
  );
};

export default Home;
