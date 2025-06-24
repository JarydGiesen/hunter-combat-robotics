import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Share, Wrench } from "lucide-react";

const DiscordSection = () => {
  const features = [
    { icon: MessageCircle, text: "Real-time chat and voice channels" },
    { icon: Wrench, text: "Technical help and troubleshooting" },
    { icon: Calendar, text: "Event announcements and reminders" },
    { icon: Share, text: "Design sharing and feedback" }
  ];

  return (
    <section id="discord" className="py-20 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D172B] border border-medium-gray p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative Discord-style elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-orange"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MessageCircle className="h-12 w-12 text-accent-purple mr-4" />
                <div>
                  <h2 className="text-4xl font-black text-light-text">JOIN OUR</h2>
                  <h2 className="text-4xl font-black text-accent-purple">DISCORD</h2>
                </div>
              </div>

              <p className="text-lg text-light-text/80 mb-6 leading-relaxed">
                Connect with fellow builders, share designs, get real-time help, and stay updated on 
                the latest league news. Our Discord is the beating heart of the HCR community.
              </p>



              <div className="space-y-3 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const colors = ["accent-orange", "accent-cyan", "accent-purple", "accent-orange"];
                  return (
                    <div key={index} className="flex items-center text-light-text/80">
                      <Icon className={`h-5 w-5 text-${colors[index]} mr-3`} />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              <Button className="bg-accent-purple hover:bg-accent-purple/90 text-light-text font-bold py-4 px-8 flex items-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                <MessageCircle className="h-5 w-5 mr-3" />
                JOIN DISCORD SERVER
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse group of engineers collaborating on robot designs" 
                className="w-full h-auto rounded-lg shadow-2xl" 
              />
              <div className="absolute -top-6 -right-6 bg-accent-purple text-[#F2F2F2] p-4 rounded">
                <MessageCircle className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
