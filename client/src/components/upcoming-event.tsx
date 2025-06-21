import { Button } from "@/components/ui/button";

const UpcomingEvent = () => {
  return (
    <section id="upcoming-event" className="py-20 bg-dark-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            NEXT <span className="text-accent-cyan">BATTLEGROUND</span>
          </h2>
          <p className="text-xl text-light-text/80">Don't miss the action</p>
        </div>

        <div className="bg-dark-gray border border-medium-gray p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent-orange"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent-purple"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="bg-accent-orange text-dark-blue px-3 py-1 text-sm font-bold uppercase tracking-wide mr-4">
                  Next Event
                </span>
                <span className="text-accent-cyan font-medium">March 15, 2024</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-light-text mb-4">
                SPRING CLASH 2024
              </h3>

              <p className="text-lg text-light-text/80 mb-6">
                Our biggest tournament of the year featuring 64 robots across 4 weight classes. 
                Single elimination bracket with live streaming and expert commentary.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-black text-accent-cyan">NYC</div>
                  <div className="text-sm text-light-text/70 uppercase">Location</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-accent-orange">64</div>
                  <div className="text-sm text-light-text/70 uppercase">Robots</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-accent-purple">4</div>
                  <div className="text-sm text-light-text/70 uppercase">Classes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-accent-cyan">$5K</div>
                  <div className="text-sm text-light-text/70 uppercase">Prize Pool</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent-orange hover:bg-accent-orange/90 text-dark-blue font-bold">
                  REGISTER NOW
                </Button>
                <Button 
                  variant="outline" 
                  className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-blue font-bold"
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
