import { Button } from "@/components/ui/button";
import { Lightbulb, Wrench, Shield, Trophy } from "lucide-react";
import { Link } from "wouter";

const GettingStartedSection = () => {
  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Design & Plan",
      description:
        "Pick a class and learn the ruleset, then design or download a plan for your bot.",
      color: "accent-purple",
      borderClass: "border-accent-purple/30 hover:border-accent-purple",
      bgClass: "bg-accent-purple",
      textClass: "text-accent-purple",
    },
    {
      number: "02",
      icon: Wrench,
      title: "Build, Test and Iterate",
      description:
        "Assemble your bot and test it. It's better to find issues in testing than in the arena.",
      color: "accent-cyan",
      borderClass: "border-accent-cyan/30 hover:border-accent-cyan",
      bgClass: "bg-accent-cyan",
      textClass: "text-accent-cyan",
    },
    {
      number: "03",
      icon: Trophy,
      title: "Register and Fight",
      description:
        "Register for an event, and go head-to-head against other bots in the arena.",
      color: "accent-orange",
      borderClass: "border-accent-orange/30 hover:border-accent-orange",
      bgClass: "bg-accent-orange",
      textClass: "text-accent-orange",
    },
  ];

  return (
    <section id="getting-started" className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            BUILD YOUR <span className="text-accent-orange">BOT</span>
          </h2>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">From concept to combat-ready. Getting your bot in the arena is easier than you might think.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div
                  className={`bg-[#0D172B] border ${step.borderClass} p-6 h-full transition-colors duration-200`}
                >
                  <div
                    className={`absolute -top-4 -left-4 w-8 h-8 ${step.bgClass} text-[#0D172B] flex items-center justify-center font-black text-sm`}
                  >
                    {step.number}
                  </div>
                  <Icon className={`h-12 w-12 ${step.textClass} mb-4`} />
                  <h3 className="text-xl font-bold text-light-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-light-text/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange/90 text-[#0D172B] font-bold py-4 px-8 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('discord')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
