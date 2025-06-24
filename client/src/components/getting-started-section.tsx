import { Button } from "@/components/ui/button";
import { Lightbulb, Wrench, Shield, Trophy } from "lucide-react";
import { Link } from "wouter";

const GettingStartedSection = () => {
  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Design & Plan",
      description: "Start with our design templates and weapon guides. Learn weight classes, rules, and basic engineering principles.",
      color: "accent-purple"
    },
    {
      number: "02",
      icon: Wrench,
      title: "Build & Test",
      description: "Access our partner workshops and fabrication guides. Get mentorship from experienced builders in the community.",
      color: "accent-cyan"
    },
    {
      number: "03",
      icon: Trophy,
      title: "Compete",
      description: "Register for events and face off against other builders. Learn, iterate, and become a combat robotics champion.",
      color: "accent-orange"
    }
  ];

  return (
    <section id="getting-started" className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            BUILD YOUR <span className="text-accent-orange">WARRIOR</span>
          </h2>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            From concept to combat-ready. Follow our proven path to bring your robot vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className={`bg-[#0D172B] border border-${step.color}/30 p-6 h-full hover:border-${step.color} transition-colors duration-200`}>
                  <div className="absolute -top-4 -left-4 w-8 h-8 text-[#0D172B] flex items-center justify-center font-black text-sm bg-[#00b3ff]">
                    {step.number}
                  </div>
                  <Icon className={`h-12 w-12 text-${step.color} mb-4`} />
                  <h3 className="text-xl font-bold text-light-text mb-3">{step.title}</h3>
                  <p className="text-light-text/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/getting-started">
            <Button className="bg-accent-orange hover:bg-accent-orange/90 text-dark-blue font-bold py-4 px-8">
              VIEW COMPLETE GUIDE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
