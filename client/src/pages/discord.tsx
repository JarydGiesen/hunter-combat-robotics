import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Calendar, Wrench, Share, Zap, Hash, Mic } from "lucide-react";

const Discord = () => {
  const channels = [
    {
      name: "general-chat",
      description: "Main community discussion and introductions",
      icon: MessageCircle,
      color: "accent-orange",
      type: "text"
    },
    {
      name: "robot-showcase",
      description: "Share photos and videos of your builds",
      icon: Share,
      color: "accent-cyan",
      type: "text"
    },
    {
      name: "technical-help",
      description: "Get assistance with design and build problems",
      icon: Wrench,
      color: "accent-purple",
      type: "text"
    },
    {
      name: "event-discussion",
      description: "Tournament planning and match analysis",
      icon: Calendar,
      color: "accent-orange",
      type: "text"
    },
    {
      name: "design-critique",
      description: "Get feedback on your robot designs",
      icon: Zap,
      color: "accent-cyan",
      type: "text"
    },
    {
      name: "build-voice-chat",
      description: "Voice chat while building and testing",
      icon: Mic,
      color: "accent-purple",
      type: "voice"
    }
  ];

  const benefits = [
    {
      title: "Real-time Support",
      description: "Get immediate help from experienced builders when you're stuck on a problem",
      icon: MessageCircle,
      color: "accent-orange"
    },
    {
      title: "Community Events",
      description: "Participate in virtual build sessions, Q&As with pro builders, and design challenges",
      icon: Calendar,
      color: "accent-cyan"
    },
    {
      title: "Knowledge Sharing",
      description: "Access shared libraries of CAD files, build guides, and troubleshooting tips",
      icon: Share,
      color: "accent-purple"
    },
    {
      title: "Competition Updates",
      description: "Be the first to know about upcoming events, rule changes, and registration openings",
      icon: Zap,
      color: "accent-orange"
    }
  ];

  const stats = [
    { label: "Active Members", value: "1,247", color: "accent-purple" },
    { label: "Messages Daily", value: "500+", color: "accent-cyan" },
    { label: "Channels", value: "25+", color: "accent-orange" },
    { label: "Help Requests Solved", value: "2,000+", color: "accent-purple" }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-light-text mb-4">
            JOIN OUR <span className="text-accent-purple">DISCORD</span>
          </h1>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            Connect with fellow builders, share designs, get real-time help, and stay updated on the latest league news.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-dark-gray border border-medium-gray p-8 lg:p-12 relative overflow-hidden mb-16">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-orange"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MessageCircle className="h-12 w-12 text-accent-purple mr-4" />
                <div>
                  <h2 className="text-3xl font-black text-light-text">The Heart of HCR</h2>
                  <h3 className="text-xl text-accent-purple">Community</h3>
                </div>
              </div>

              <p className="text-lg text-light-text/80 mb-8 leading-relaxed">
                Our Discord server is where the magic happens between competitions. Whether you're troubleshooting 
                a wiring issue at 2 AM or sharing victory photos after a tournament win, our community is here 
                to support your robotics journey.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className={`text-center p-4 border border-${stat.color}/30`}>
                    <div className={`text-2xl font-black text-${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-light-text/70 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button className="bg-accent-purple hover:bg-accent-purple/90 text-light-text font-bold py-4 px-8 flex items-center text-lg">
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
              <div className="absolute -top-6 -right-6 bg-accent-purple text-light-text p-4 rounded">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Channels Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-light-text mb-8 text-center">
            SERVER <span className="text-accent-cyan">CHANNELS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className={`bg-dark-gray border-medium-gray hover:border-${channel.color} transition-colors duration-200 group`}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-light-text">
                      {channel.type === "voice" ? (
                        <Mic className={`h-5 w-5 text-${channel.color} mr-3`} />
                      ) : (
                        <Hash className={`h-5 w-5 text-${channel.color} mr-3`} />
                      )}
                      <span className="text-sm">{channel.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Icon className={`h-8 w-8 text-${channel.color} mb-3 group-hover:scale-110 transition-transform duration-200`} />
                    <p className="text-light-text/70 text-sm">{channel.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-light-text mb-8 text-center">
            COMMUNITY <span className="text-accent-orange">BENEFITS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-dark-gray border-medium-gray">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Icon className={`h-8 w-8 text-${benefit.color} mr-4 mt-1`} />
                      <div>
                        <h3 className="text-lg font-bold text-light-text mb-2">{benefit.title}</h3>
                        <p className="text-light-text/70 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center p-6 border border-${stat.color}/30 bg-dark-gray`}>
              <div className={`text-3xl font-black text-${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-light-text/70 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-dark-gray border border-medium-gray p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-light-text mb-4">Ready to Join the Community?</h3>
          <p className="text-light-text/80 mb-6 max-w-2xl mx-auto">
            Join thousands of builders, share your passion for combat robotics, and become part of the most 
            supportive engineering community in the sport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-purple hover:bg-accent-purple/90 text-light-text font-bold py-4 px-8 flex items-center">
              <MessageCircle className="h-5 w-5 mr-3" />
              JOIN DISCORD NOW
            </Button>
            <Button 
              variant="outline" 
              className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-blue font-bold py-4 px-8"
            >
              Learn More About Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;
