import { Button } from "@/components/ui/button";
import { Factory, Cpu, Hammer, Video } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "TechForge Industries",
      contribution: "Materials Sponsor",
      icon: Factory,
      color: "accent-orange"
    },
    {
      name: "RoboTech Solutions",
      contribution: "Electronics Partner",
      icon: Cpu,
      color: "accent-cyan"
    },
    {
      name: "MakerSpace NYC",
      contribution: "Facility Partner",
      icon: Hammer,
      color: "accent-purple"
    },
    {
      name: "StreamTech Media",
      contribution: "Broadcasting Partner",
      icon: Video,
      color: "accent-orange"
    }
  ];

  return (
    <section className="py-20 bg-dark-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            OUR <span className="text-accent-orange">PARTNERS</span>
          </h2>
          <p className="text-xl text-light-text/80">Supporting the future of combat robotics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className={`bg-dark-blue border border-medium-gray p-6 text-center hover:border-${partner.color} transition-colors duration-200 group`}>
                <div className={`text-${partner.color} mb-3 group-hover:scale-110 transition-transform duration-200 flex justify-center`}>
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-lg font-bold text-light-text mb-2">{partner.name}</h3>
                <p className="text-sm text-light-text/60">{partner.contribution}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-light-text/60 mb-6">Interested in partnering with us?</p>
          <Button 
            variant="outline" 
            className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-blue font-bold"
          >
            BECOME A PARTNER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
