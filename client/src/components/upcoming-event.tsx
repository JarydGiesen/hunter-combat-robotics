import { Button } from "@/components/ui/button";

const UpcomingEvent = () => {
  return (
    <section id="upcoming-event" className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            NEXT <span className="text-accent-cyan">BATTLEGROUND</span>
          </h2>
          <p className="text-xl text-light-text/80">Don't miss the action</p>
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
                <span className="text-accent-purple font-bold">March 15, 2024</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-[#0D172B] mb-4">
                SPRING CLASH 2024
              </h3>

              <p className="text-lg text-[#0D172B]/80 mb-6">
                Our biggest tournament of the year featuring 64 robots across 4 weight classes. 
                Single elimination bracket with live streaming and expert commentary.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 border border-accent-cyan/30">
                  <div className="text-sm font-black text-[#0D172B] mb-2 uppercase tracking-wide">Location:</div>
                  <div className="text-lg font-semibold text-accent-cyan">Lake Macquarie FabLab</div>
                </div>
                <div className="text-center p-4 border border-accent-purple/30">
                  <div className="text-sm font-black text-[#0D172B] mb-2 uppercase tracking-wide">Classes:</div>
                  <div className="space-y-1">
                    <div className="text-base font-semibold text-accent-cyan">150g Antweight (Open)</div>
                    <div className="text-base font-semibold text-accent-purple">150g Antweight (Plastic)</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent-orange hover:bg-accent-orange/90 text-[#0D172B] font-bold">
                  REGISTER NOW
                </Button>
                <Button 
                  variant="outline" 
                  className="border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-[#F2F2F2] font-bold"
                >
                  VIEW DETAILS
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Arena packed with spectators during robot competition" 
                className="w-full h-64 object-cover rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
