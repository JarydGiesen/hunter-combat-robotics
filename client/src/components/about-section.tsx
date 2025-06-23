import { Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D172B] mb-6">
              WHERE ENGINEERING
              <br />
              <span className="text-accent-purple">MEETS DESTRUCTION</span>
            </h2>
            <p className="text-lg text-[#0D172B]/80 mb-6 leading-relaxed">
              Combat robotics is the ultimate test of engineering prowess,
              creativity, and tactical thinking. Our league brings together
              builders, engineers, and competitors to create fighting machines
              that battle in controlled arenas.
            </p>
            <p className="text-lg text-[#0D172B]/80 mb-6 leading-relaxed">
              From lightweight spinning discs to heavyweight crushers, every
              robot tells a story of innovation, determination, and the
              relentless pursuit of mechanical perfection.
            </p>
            <p className="text-lg text-[#0D172B]/80 mb-8 leading-relaxed font-semibold">
              The best part? You don't need any prior experience to get started.
              Our community welcomes complete beginners and provides all the
              guidance you need to build your first robot.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="border border-accent-orange/30 p-4">
                <div className="text-3xl font-black text-accent-orange mb-2">
                  150+
                </div>
                <div className="text-sm text-[#0D172B]/70 uppercase tracking-wide">
                  Robots Built
                </div>
              </div>
              <div className="border border-accent-cyan/30 p-4">
                <div className="text-3xl font-black text-accent-cyan mb-2">
                  500+
                </div>
                <div className="text-sm text-[#0D172B]/70 uppercase tracking-wide">
                  Matches Fought
                </div>
              </div>
              <div className="border border-accent-purple/30 p-4">
                <div className="text-3xl font-black text-accent-purple mb-2">
                  75+
                </div>
                <div className="text-sm text-[#0D172B]/70 uppercase tracking-wide">
                  Active Builders
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/getting-started">
                <Button
                  size="lg"
                  className="bg-accent-orange hover:bg-accent-orange/90 text-[#0D172B] font-bold py-6 px-12 text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  GET STARTED TODAY
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/action-shot.jpg"
              alt="Combat robot mechanical components"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent-orange bg-[#0D172B] flex items-center justify-center">
              <img 
                src="/logo-blue-small.jpg" 
                alt="HCR Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to gear icon if logo doesn't load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <Cog className="hidden h-12 w-12 text-accent-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
