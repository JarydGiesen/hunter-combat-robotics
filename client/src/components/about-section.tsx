import { Cog } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-light-text mb-6">
              WHERE ENGINEERING<br />
              <span className="text-accent-purple">MEETS DESTRUCTION</span>
            </h2>
            <p className="text-lg text-light-text/80 mb-6 leading-relaxed">
              Combat robotics is the ultimate test of engineering prowess, creativity, and tactical thinking. 
              Our league brings together builders, engineers, and competitors to create fighting machines 
              that battle in controlled arenas.
            </p>
            <p className="text-lg text-light-text/80 mb-8 leading-relaxed">
              From lightweight spinning discs to heavyweight crushers, every robot tells a story of 
              innovation, determination, and the relentless pursuit of mechanical perfection.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="border border-accent-orange/30 p-4">
                <div className="text-3xl font-black text-accent-orange mb-2">150+</div>
                <div className="text-sm text-light-text/70 uppercase tracking-wide">Robots Built</div>
              </div>
              <div className="border border-accent-cyan/30 p-4">
                <div className="text-3xl font-black text-accent-cyan mb-2">500+</div>
                <div className="text-sm text-light-text/70 uppercase tracking-wide">Matches Fought</div>
              </div>
              <div className="border border-accent-purple/30 p-4">
                <div className="text-3xl font-black text-accent-purple mb-2">75+</div>
                <div className="text-sm text-light-text/70 uppercase tracking-wide">Active Builders</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://pixabay.com/get/gca596df5697a601c2ecbc0ffb43dd183c1256a1cdeee28090f01e5096046629d96bf04946a576d45724e50f80cc294967507f30d2e286d53724924bf8b1da3c4_1280.jpg" 
              alt="Combat robot mechanical components" 
              className="w-full h-auto rounded-lg shadow-2xl" 
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent-orange bg-dark-blue flex items-center justify-center">
              <Cog className="h-12 w-12 text-accent-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
