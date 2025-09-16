import { Button } from "@/components/ui/button";
import { Factory, Cpu, Hammer, Video } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Lake Macquarie FabLab",
      contribution: "Facility Partner",
      icon: Hammer,
      color: "accent-orange",
      url: "https://lakemacfablab.org.au",
      logo: "/partner-fablab.png",
    },
    {
      name: "RoboTech Solutions",
      contribution: "Electronics Partner",
      icon: Cpu,
      color: "accent-cyan",
      url: "https://robotechsolutions.com.au",
      logo: "/partner-robotech.png",
    },
    {
      name: "StreamTech Media",
      contribution: "Broadcasting Partner",
      icon: Video,
      color: "accent-purple",
      url: "https://streamtechmedia.com.au",
      logo: "/partner-streamtech.png",
    },
  ];

  return (
    <section className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            WE'D LIKE TO <span className="text-accent-cyan">THANK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block bg-dark-blue border border-medium-gray p-6 text-center hover:border-${partner.color} transition-colors duration-200 group cursor-pointer transform hover:scale-105`}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-200 flex justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto"
                    onError={(e) => {
                      // Fallback to icon if logo doesn't load
                      e.currentTarget.style.display = "none";
                      const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackDiv) fallbackDiv.style.display = "flex";
                    }}
                  />
                  <div className={`hidden text-${partner.color} justify-center`}>
                    <Icon className="h-12 w-12" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-light-text mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-light-text/60">
                  {partner.contribution}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
