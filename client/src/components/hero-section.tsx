import { Button } from "@/components/ui/button";
import { ChevronDown, Bot } from "lucide-react";
import { Link } from "wouter";

const HeroSection = () => {
  const scrollToGettingStarted = () => {
    const element = document.getElementById("getting-started");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEvents = () => {
    const element = document.getElementById("upcoming-event");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            }}
          ></div>
        </video>
        <div className="absolute inset-0 bg-dark-blue/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Bot className="text-8xl text-accent-orange mb-6 mx-auto h-32 w-32" />
            <h1 className="text-6xl md:text-8xl font-black text-light-text mb-4 tracking-tight">
              HUNTER COMBAT ROBOTICS
            </h1>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link href="/getting-started">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/90 text-dark-blue font-bold py-4 px-8 transition-all duration-200 transform hover:scale-105"
              >
                GET STARTED
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToEvents}
              className="w-full sm:w-auto border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-blue font-bold py-4 px-8 transition-all duration-200"
            >
              VIEW EVENTS
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-light-text/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
