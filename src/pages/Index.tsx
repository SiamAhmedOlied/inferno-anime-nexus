import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TeamSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;