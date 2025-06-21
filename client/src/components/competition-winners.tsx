const CompetitionWinners = () => {
  const winners = [
    {
      robotName: "DEVASTATOR MK-III",
      builderName: "Team Chaos",
      weightClass: "Heavyweight",
      event: "Winter Clash 2024",
      description: "Vertical spinner with titanium armor. Dominated the heavyweight division with devastating power.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      borderColor: "accent-orange"
    },
    {
      robotName: "RAZOR EDGE",
      builderName: "Sarah Chen",
      weightClass: "Middleweight",
      event: "Winter Clash 2024",
      description: "Horizontal spinner with exceptional speed and precision. Undefeated in middleweight competition.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      borderColor: "accent-purple"
    },
    {
      robotName: "WHIRLWIND",
      builderName: "Mike Rodriguez",
      weightClass: "Lightweight",
      event: "Winter Clash 2024",
      description: "Compact vertical disk with incredible agility. Perfect weight distribution and devastating attacks.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      borderColor: "accent-cyan"
    }
  ];

  return (
    <section className="py-20 bg-dark-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            HALL OF <span className="text-accent-cyan">CHAMPIONS</span>
          </h2>
          <p className="text-xl text-light-text/80">Celebrating our latest tournament winners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <div key={index} className={`group relative overflow-hidden bg-dark-gray border border-medium-gray hover:border-${winner.borderColor} transition-colors duration-200`}>
              <img 
                src={winner.image} 
                alt={`${winner.robotName} championship victory`} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`bg-${winner.borderColor} text-dark-blue px-2 py-1 text-xs font-bold uppercase tracking-wide`}>
                    {winner.weightClass}
                  </span>
                  <span className="text-accent-cyan text-sm font-medium">
                    {winner.event}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-light-text mb-2">{winner.robotName}</h3>
                <p className="text-light-text/70 text-sm mb-3">Built by: {winner.builderName}</p>
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
