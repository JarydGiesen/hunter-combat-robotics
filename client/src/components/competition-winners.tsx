const CompetitionWinners = () => {
  const winners = [
    {
      robotName: "Hex Witch",
      builderName: "Team Hot Glue",
      weightClass: "Antweight (Open)",
      event: "Bluest Bot -  Robot Royale 4",
      description:
        "4WD Hammersaw with a modular front-end. Harnesses the magical power of hot glue.",
      image: "/bot-1.jpg", // First bot image
      borderColor: "accent-orange",
    },
    {
      robotName: "Flip-Side",
      builderName: "Team Plot Armour",
      weightClass: "Antweight (Plastic)",
      event: "3rd Place - Robot Royale 4",
      description:
        "Tank-tracked bot with a mega powerful off-centred flipper arm.",
      image: "/bot-2.jpg", // Second bot image
      borderColor: "accent-purple",
    },
    {
      robotName: "Door Hinge",
      builderName: "Team Building Bots",
      weightClass: "Antweight (Plastic)",
      event: "1st Place - Robot Royale 4",
      description:
        "2WD, low-profile, big flipper bot that looks like a door hinge :)",
      image: "/bot-3.jpg", // Third bot image
      borderColor: "accent-cyan",
    },
    {
      robotName: "Spinner Fury",
      builderName: "Team Chaos",
      weightClass: "Antweight (Open)",
      event: "2nd Place - Robot Royale 4",
      description:
        "High-speed horizontal spinner with titanium weapon disk. Built for maximum destruction.",
      image: "/bot-1.jpg", // Fourth bot image
      borderColor: "accent-orange",
    },
    {
      robotName: "Wedge Master",
      builderName: "Team Precision",
      weightClass: "Antweight (Plastic)",
      event: "Best Design - Robot Royale 3",
      description:
        "Low-profile wedge bot with superior driving skills and tactical gameplay.",
      image: "/bot-2.jpg", // Fifth bot image
      borderColor: "accent-purple",
    },
    {
      robotName: "Thunder Clamp",
      builderName: "Team Voltage",
      weightClass: "Antweight (Open)",
      event: "Most Destructive - Robot Royale 3",
      description:
        "Powerful clamping bot with crushing force. Known for spectacular control victories.",
      image: "/bot-3.jpg", // Sixth bot image
      borderColor: "accent-cyan",
    },
  ];

  return (
    <section className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            HALL OF <span className="text-accent-cyan">CHAMPIONS</span>
          </h2>
          <p className="text-xl text-light-text/80">
            Meet some of our builder's bots.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-[#0D172B] border border-medium-gray hover:border-${winner.borderColor} transition-colors duration-200`}
            >
              <img
                src={winner.image}
                alt={`${winner.robotName} championship victory`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex flex-col space-y-2 mb-3">
                  <span
                    className={`px-3 py-1 text-sm font-bold uppercase tracking-wide self-start text-[#0D172B] ${
                      winner.borderColor === "accent-orange"
                        ? "bg-accent-orange"
                        : winner.borderColor === "accent-purple"
                          ? "bg-accent-purple"
                          : "bg-accent-cyan"
                    }`}
                  >
                    {winner.weightClass}
                  </span>
                  <span className="text-accent-cyan text-sm font-medium">
                    {winner.event}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-light-text mb-2">
                  {winner.robotName}
                </h3>
                <p className="text-light-text/70 text-sm mb-3">
                  Built by: {winner.builderName}
                </p>
                <p className="text-light-text/60 text-xs leading-relaxed">
                  {winner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionWinners;
