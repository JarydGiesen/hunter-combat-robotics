import { Trophy, Settings, Shield } from "lucide-react";

const CompetitionClasses = () => {
  const classes = [
    {
      name: "150g Plastic Antweight",
      description:
        "Beginner-friendly class with limitations on construction materials",
      icon: Trophy,
      color: "accent-orange",
      features: [
        "Basic 3D printed Materials (PLA, ABS, PETG, PET, Nylon)",
        "Other materials that don't enhance armour or weapon",
        "Other materials allowed at organiser's discretion",
        "Active weapon not required",
      ],
    },
    {
      name: "150g Open Antweight",
      description:
        "A more challenging, destructive class with no material restrictions.",
      icon: Settings,
      color: "accent-purple",
      features: [
        "Any materials permitted",
        "Any fabrication methods",
        "Expect metal weapons and chassis'",
        "Must have an active weapon",
      ],
    },
  ];

  return (
    <section id="competition-classes" className="py-20 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D172B] mb-4">
            ANTWEIGHT <span className="text-accent-purple">CLASSES</span>
          </h2>
          <p className="text-xl text-[#0D172B]/80 max-w-3xl mx-auto">
            A robot can only compete in one class, but you can enter as many
            bots as you want!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {classes.map((classInfo, index) => {
            const Icon = classInfo.icon;
            return (
              <div
                key={index}
                className={`bg-[#0D172B] border-4 border-${classInfo.color} p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
              >

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Icon
                      className={`h-12 w-12 text-${classInfo.color} mr-4`}
                    />
                    <h3 className="text-2xl font-black text-light-text">
                      {classInfo.name}
                    </h3>
                  </div>

                  <p className="text-light-text/80 mb-6 leading-relaxed">
                    {classInfo.description}
                  </p>

                  <div className="space-y-3">
                    {classInfo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Shield
                          className={`h-4 w-4 text-${classInfo.color} mr-3 flex-shrink-0`}
                        />
                        <span className="text-light-text/70 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompetitionClasses;
