import { Button } from "@/components/ui/button";
import { MapPin, Trophy, DollarSign } from "lucide-react";

const UpcomingEvent = () => {
  return (
    <section id="upcoming-event" className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            NEXT <span className="text-accent-cyan">COMBAT EVENT</span>
          </h2>
          <p className="text-xl text-light-text/80">Don't miss the action.</p>
        </div>

        <div className="bg-[#F2F2F2] border border-medium-gray p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent-orange"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent-purple"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="bg-accent-orange text-[#0D172B] px-3 py-1 text-sm font-bold uppercase tracking-wide mr-4">
                  Next Event
                </span>
                <span className="text-accent-purple font-bold">December 6th 2025</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-[#0D172B] mb-2">
                Hunter Combat Robotics: Round 1
              </h3>

              <p className="text-lg text-[#0D172B]/80 mb-6">
                Our regularly occurring club tournament featuring round-robin
                qualifiers and a single-elimination bracket final.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-10 w-10 text-accent-cyan mr-3" />
                  <div>
                    <div className="text-lg font-bold text-[#0D172B]">
                      Lake Macquarie FabLab
                    </div>
                    <div className="text-sm text-[#0D172B]/70">Location</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-14 w-14 text-accent-purple mr-3" />
                  <div>
                    <div className="text-lg font-bold text-[#0D172B]">
                      150g Antweight (Open & Plastic)
                    </div>
                    <div className="text-sm text-[#0D172B]/70">Classes</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-9 w-9 text-accent-orange mr-3" />
                  <div>
                    <div className="text-lg font-bold text-[#0D172B]">FREE</div>
                    <div className="text-sm text-[#0D172B]/70">Admission</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.robotcombatevents.com/events/6395" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent-orange hover:bg-accent-orange/90 text-[#0D172B] font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    REGISTER NOW
                  </Button>
                </a>s
                <a href="https://www.robotcombatevents.com/events/6395" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-[#F2F2F2] font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    VIEW DETAILS
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <img
                src="/bot-2.jpg"
                alt="Combat robot at Lake Macquarie FabLab event"
                className="w-full h-64 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
