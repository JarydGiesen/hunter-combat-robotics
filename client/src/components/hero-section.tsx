import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
    <section id="home" className="relative overflow-hidden">
      {/* Background Video with proper aspect ratio */}
      <AspectRatio ratio={2.35} className="w-full">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/bot-1.jpg')",
              }}
            ></div>
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="/logo-transparent-large.png"
                alt="Hunter Combat Robotics Logo"
                className="h-32 w-auto mx-auto mb-6"
                onError={(e) => {
                  // Fallback to robot icon if logo doesn't load
                  e.currentTarget.style.display = "none";
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = "block";
                }}
              />
              <Bot className="hidden text-8xl text-accent-orange mb-6 mx-auto h-32 w-32" />
              <h1 className="text-6xl md:text-8xl font-black text-light-text mb-4 tracking-tight">
                HUNTER COMBAT ROBOTICS
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-light-text/60 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </AspectRatio>
    </section>
  );
};

export default HeroSection;
