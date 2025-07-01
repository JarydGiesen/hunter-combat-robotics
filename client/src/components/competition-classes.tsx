import { Trophy, Settings, Shield } from "lucide-react";

const CompetitionClasses = () => {
  const classes = [
    {
      name: "150g Antweight (Open)",
      description: "Open category with no material restrictions. Advanced builders showcase cutting-edge designs and materials.",
      icon: Trophy,
      color: "accent-orange",
      features: [
        "No material restrictions",
        "Advanced electronics allowed",
        "Maximum creativity freedom",
        "Experienced builder category"
      ]
    },
    {
      name: "150g Antweight (Plastic)",
      description: "Beginner-friendly category using plastic chassis and simplified electronics. Perfect for newcomers to learn fundamentals.",
      icon: Settings,
      color: "accent-purple",
      features: [
        "Plastic chassis required",
        "Simplified electronics",
        "Beginner-friendly rules",
        "Great learning category"
      ]
    }
  ];

  return (
    <section id="competition-classes" className="py-20 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D172B] mb-4">
            COMPETITION <span className="text-accent-cyan">CLASSES</span>
          </h2>
          <p className="text-xl text-[#0D172B]/80 max-w-3xl mx-auto">
            Two distinct categories designed for different skill levels and building approaches
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
                {/* Decorative corner elements */}
                <div className={`absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-${classInfo.color}/50`}></div>
                <div className={`absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-${classInfo.color}/50`}></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Icon className={`h-12 w-12 text-${classInfo.color} mr-4`} />
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
                        <Shield className={`h-4 w-4 text-${classInfo.color} mr-3 flex-shrink-0`} />
                        <span className="text-light-text/70 text-sm">{feature}</span>
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