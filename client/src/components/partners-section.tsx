import { Button } from "@/components/ui/button";
import { Factory, Cpu, Hammer, Video } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Lake Macquarie FabLab",
      contribution: "",
      icon: Hammer,
      color: "accent-orange",
      url: "https://library.lakemac.com.au/Explore/Fab-Lab",
      logo: "/partner-fablab.png",
    },
    {
      name: "Hunter Innovation and Science Hub",
      contribution: "",
      icon: Cpu,
      color: "accent-cyan",
      url: "https://hish.org.au/",
      logo: "/partner-hish.png",
    },
    {
      name: "Robot Royale",
      contribution: "",
      icon: Video,
      color: "accent-purple",
      url: "https://linktr.ee/robotroyale",
      logo: "/partner-rr.png",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-partner-${partner.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex flex-col bg-dark-blue border border-medium-gray p-6 text-center hover:border-${partner.color} transition-colors duration-200 group cursor-pointer transform hover:scale-105 h-64`}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-200 flex justify-center items-center h-32 w-full">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      // Fallback to icon if logo doesn't load
                      e.currentTarget.style.display = "none";
                      const fallbackDiv = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (fallbackDiv) fallbackDiv.style.display = "flex";
                    }}
                  />
                  <div
                    className={`hidden text-${partner.color} justify-center items-center h-full w-full`}
                  >
                    <Icon className="h-12 w-12" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-light-text mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-light-text/60">
                    {partner.contribution}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
