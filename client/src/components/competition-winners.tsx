const CompetitionWinners = () => {
  const winners = [
    {
      robotName: "Hex Witch",
      builderName: "Team Hot Glue",
      weightClass: "Antweight (Open)",
      event: "Bluest Bot -  Robot Royale 4 & 5",
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
      robotName: "I built this in a cave",
      builderName: "BotBotics",
      weightClass: "Antweight (Plastic)",
      event: "3rd Place - Robot Royale 5",
      description:
        "A large full-body lifter wedge, that is also incredibly fast. Really fast...",
      image: "/bot-4.jpg", // Fourth bot image
      borderColor: "accent-purple",
    },
    {
      robotName: "Low Earth Orbit (LEO)",
      builderName: "HyperFocus3D",
      weightClass: "Antweight (Open)",
      event: "1st Place - Robot Royale 5",
      description:
        "4wd, hard-hitting vertical spinner that will send your bot into low earth orbit.",
      image: "/bot-5.jpg", // Fifth bot image
      borderColor: "accent-cyan",
    },
    {
      robotName: "Fighting Nemo",
      builderName: "Team Plot Armour",
      weightClass: "Antweight (Plastic)",
      event: "Fish?",
      description: "A staggering ineffective fish bot with a flipper tail.",
      image: "/bot-6.jpg", // Sixth bot image
      borderColor: "accent-orange",
    },
  ];

  return (
    <section className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            HALL OF <span className="text-accent-orange">CHAMPIONS</span>
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
                  <span className="text-accent-white text-sm font-medium">
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
