const CompetitionWinners = () => {
  const winners = [
    {
      robotName: "DEVASTATOR MK-III",
      builderName: "Team Chaos",
      weightClass: "Heavyweight",
      event: "Winter Clash 2024",
      description:
        "Vertical spinner with titanium armor. Dominated the heavyweight division with devastating power.",
      image: "/bot-1.jpg", // First bot image
      borderColor: "accent-orange",
    },
    {
      robotName: "RAZOR EDGE",
      builderName: "Sarah Chen",
      weightClass: "Middleweight",
      event: "Winter Clash 2024",
      description:
        "Horizontal spinner with exceptional speed and precision. Undefeated in middleweight competition.",
      image: "/bot-2.jpg", // Second bot image
      borderColor: "accent-purple",
    },
    {
      robotName: "WHIRLWIND",
      builderName: "Mike Rodriguez",
      weightClass: "Lightweight",
      event: "Winter Clash 2024",
      description:
        "Compact vertical disk with incredible agility. Perfect weight distribution and devastating attacks.",
      image: "/bot-3.jpg", // Third bot image
      borderColor: "accent-cyan",
    },
  ];

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D172B] mb-4">
            HALL OF <span className="text-accent-cyan">CHAMPIONS</span>
          </h2>
          <p className="text-xl text-[#0D172B]/80">
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