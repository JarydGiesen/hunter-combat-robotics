import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D172B] mb-6">
              WHERE DESIGN
              <br />
              <span className="text-accent-purple">MEETS DESTRUCTION</span>
            </h2>
            <p className="text-lg text-[#0D172B]/80 mb-6 leading-relaxed">
              Combat robotics is a fast-paced, hands-on sport where builders go
              head-to-head in robot-versus-robot arena combat. Whether you are
              looking for high-stakes competition, or just for a fun
              community-orientated hobby, combat robotics offers something for
              everyone in one of the most exciting emerging sports in the world.
            </p>
            <p className="text-lg text-[#0D172B]/80 mb-6 leading-relaxed">
              Hunter Combat Robotics is a community of passionate builders that
              welcomes all skill levels and provides the resources and support
              needed to join this fast-growing sport. We regularly host events
              and tournaments in the Newcastle-Hunter region where builders can
              put their creations to the test.
            </p>
            <p className="text-lg text-[#0D172B]/80 mb-8 leading-relaxed font-semibold">
              The best part? You don't need any prior experience to get started!
              It's now easier more than ever to build and fight your first bot -
              thanks to highly accessible 3D printed weight classes and a strong
              community of Australian builders.
            </p>

            <div className="text-center mb-6">
              <div className="text-4xl font-black leading-none">
                <div><span className="text-accent-orange">All </span><span className="text-[#0D172B]">builders,</span></div>
                <div><span className="text-accent-cyan">All </span><span className="text-[#0D172B]">skill levels,</span></div>
                <div><span className="text-accent-purple">All </span><span className="text-[#0D172B]">welcome.</span></div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-accent-orange hover:bg-accent-orange/90 text-[#0D172B] font-bold py-6 px-12 text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
              >
                GET STARTED TODAY
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/action-shot.jpg"
              alt="Combat robot mechanical components"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent-orange bg-[#0D172B] flex items-center justify-center">
              <Bot className="h-12 w-12 text-accent-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
