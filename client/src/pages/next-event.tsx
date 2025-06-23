import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy, Clock, Zap } from "lucide-react";

const NextEvent = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-light-text mb-4">
            NEXT <span className="text-accent-purple">EVENT</span>
          </h1>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            Join us for our upcoming combat robotics tournament featuring intense battles and cutting-edge engineering.
          </p>
        </div>

        {/* Main Event Card */}
        <div className="bg-[#F2F2F2] border border-medium-gray p-8 lg:p-12 relative overflow-hidden mb-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent-purple"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent-orange"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="bg-accent-purple text-[#F2F2F2] px-3 py-1 text-sm font-bold uppercase tracking-wide mr-4">
                  Next Event
                </span>
                <span className="text-accent-orange font-medium">March 15, 2024</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-[#0D172B] mb-4">
                SPRING CLASH 2024
              </h2>

              <p className="text-lg text-[#0D172B]/80 mb-6">
                Our biggest tournament of the year featuring fierce robot battles across multiple weight classes. 
                Single elimination bracket with live streaming and expert commentary.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-accent-cyan mr-3" />
                  <div>
                    <div className="text-lg font-bold text-[#0D172B]">Lake Macquarie FabLab</div>
                    <div className="text-sm text-[#0D172B]/70">Location</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-accent-purple mr-3" />
                  <div>
                    <div className="text-lg font-bold text-[#0D172B]">March 15, 2024</div>
                    <div className="text-sm text-[#0D172B]/70">Event Date</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent-purple hover:bg-accent-purple/90 text-[#F2F2F2] font-bold">
                  REGISTER NOW
                </Button>
                <Button 
                  variant="outline" 
                  className="border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-[#F2F2F2] font-bold"
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

        {/* Weight Classes */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-light-text mb-8 text-center">
            COMPETITION <span className="text-accent-cyan">CLASSES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#F2F2F2] border-accent-cyan/30 hover:border-accent-cyan transition-colors duration-200">
              <CardHeader>
                <CardTitle className="flex items-center text-[#0D172B]">
                  <Zap className="h-6 w-6 text-accent-cyan mr-3" />
                  150g Antweight (Open)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0D172B]/80 mb-4">
                  Open class for experienced builders. Any materials and weapon systems allowed within safety guidelines.
                </p>
                <ul className="space-y-2">
                  <li className="text-[#0D172B]/70 text-sm flex items-start">
                    <span className="text-accent-cyan mr-2">•</span>
                    Maximum weight: 150 grams
                  </li>
                  <li className="text-[#0D172B]/70 text-sm flex items-start">
                    <span className="text-accent-cyan mr-2">•</span>
                    All materials permitted
                  </li>
                  <li className="text-[#0D172B]/70 text-sm flex items-start">
                    <span className="text-accent-cyan mr-2">•</span>
                    Advanced weapon systems allowed
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#F2F2F2] border-accent-purple/30 hover:border-accent-purple transition-colors duration-200">
              <CardHeader>
                <CardTitle className="flex items-center text-[#0D172B]">
                  <Users className="h-6 w-6 text-accent-purple mr-3" />
                  150g Antweight (Plastic)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0D172B]/80 mb-4">
                  Beginner-friendly class with material restrictions to encourage learning and creativity.
                </p>
                <ul className="space-y-2">
                  <li className="text-[#0D172B]/70 text-sm flex items-start">
                    <span className="text-accent-purple mr-2">•</span>
                    Maximum weight: 150 grams
                  </li>
                  <li className="text-[#0D172B]/70 text-sm flex items-start">
                    <span className="text-accent-purple mr-2">•</span>
                    Plastic construction only
                  </li>
                  <li className="text-[#0D172B]/70 text-sm flex items-start">
                    <span className="text-accent-purple mr-2">•</span>
                    Perfect for newcomers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="bg-[#F2F2F2] p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[#0D172B] mb-6 text-center">Event Schedule</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-accent-orange mx-auto mb-3" />
              <h4 className="font-bold text-[#0D172B] mb-2">Registration & Setup</h4>
              <p className="text-[#0D172B]/70 text-sm">9:00 AM - 10:30 AM</p>
              <p className="text-[#0D172B]/70 text-sm">Robot inspection and driver briefing</p>
            </div>
            
            <div className="text-center">
              <Trophy className="h-8 w-8 text-accent-cyan mx-auto mb-3" />
              <h4 className="font-bold text-[#0D172B] mb-2">Competition Rounds</h4>
              <p className="text-[#0D172B]/70 text-sm">11:00 AM - 4:00 PM</p>
              <p className="text-[#0D172B]/70 text-sm">Elimination brackets and finals</p>
            </div>
            
            <div className="text-center">
              <Users className="h-8 w-8 text-accent-purple mx-auto mb-3" />
              <h4 className="font-bold text-[#0D172B] mb-2">Awards Ceremony</h4>
              <p className="text-[#0D172B]/70 text-sm">4:30 PM - 5:00 PM</p>
              <p className="text-[#0D172B]/70 text-sm">Recognition and prizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;