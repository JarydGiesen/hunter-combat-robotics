import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import UpcomingEvent from "@/components/upcoming-event";
import GettingStartedSection from "@/components/getting-started-section";
import CompetitionWinners from "@/components/competition-winners";
import FAQSection from "@/components/faq-section";
import DiscordSection from "@/components/discord-section";
import PartnersSection from "@/components/partners-section";

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <UpcomingEvent />
      <GettingStartedSection />
      <CompetitionWinners />
      <FAQSection />
      <DiscordSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
