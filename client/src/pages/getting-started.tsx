import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Wrench, Shield, Trophy, Download, Users, DollarSign, Clock } from "lucide-react";

const GettingStarted = () => {
  const buildSteps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Design & Plan",
      description: "Start with our design templates and weapon guides. Learn weight classes, rules, and basic engineering principles.",
      details: [
        "Choose your weight class based on experience and budget",
        "Study successful robot designs in our gallery",
        "Download CAD templates and design guides",
        "Join design workshops and mentorship programs"
      ],
      color: "accent-purple"
    },
    {
      number: "02", 
      icon: Wrench,
      title: "Build & Test",
      description: "Access our partner workshops and fabrication guides. Get mentorship from experienced builders in the community.",
      details: [
        "Source materials from our approved vendor list",
        "Book time at partner makerspaces and workshops",
        "Follow step-by-step construction guides",
        "Test drive systems and weapon functionality"
      ],
      color: "accent-cyan"
    },
    {
      number: "03",
      icon: Shield,
      title: "Safety Check",
      description: "Complete safety inspection with certified officials. Ensure your robot meets all competition requirements.",
      details: [
        "Schedule pre-competition safety inspection",
        "Install required safety systems and cutoffs",
        "Complete mandatory documentation",
        "Pass radio frequency and control tests"
      ],
      color: "accent-orange"
    },
    {
      number: "04",
      icon: Trophy,
      title: "Enter Combat",
      description: "Register for events and face off against other builders. Learn, iterate, and become a combat robotics champion.",
      details: [
        "Register for beginner-friendly competitions",
        "Practice driving and combat techniques",
        "Network with other builders and learn from matches",
        "Iterate on your design based on performance"
      ],
      color: "accent-purple"
    }
  ];

  const resources = [
    {
      title: "Beginner's Design Guide",
      description: "Complete guide to designing your first combat robot",
      icon: Download,
      color: "accent-orange"
    },
    {
      title: "CAD Templates",
      description: "Ready-to-use templates for all weight classes",
      icon: Download,
      color: "accent-cyan"
    },
    {
      title: "Safety Checklist",
      description: "Comprehensive safety requirements and inspection guide",
      icon: Shield,
      color: "accent-purple"
    },
    {
      title: "Parts & Vendors List",
      description: "Curated list of suppliers and recommended components",
      icon: Download,
      color: "accent-orange"
    }
  ];

  const pathways = [
    {
      title: "Budget Builder",
      cost: "$500-1,500",
      time: "2-4 months",
      description: "Perfect for first-time builders focusing on learning fundamentals",
      features: [
        "Featherweight or lightweight class",
        "Simple weapon systems",
        "Basic materials and components",
        "Community workshop access"
      ],
      icon: DollarSign,
      color: "accent-cyan"
    },
    {
      title: "Serious Competitor",
      cost: "$2,000-8,000", 
      time: "4-8 months",
      description: "For builders ready to invest in competitive performance",
      features: [
        "Middleweight or heavyweight class",
        "Advanced weapon systems",
        "Premium materials and machining",
        "Professional consultation available"
      ],
      icon: Trophy,
      color: "accent-orange"
    },
    {
      title: "Team Builder",
      cost: "$1,000-5,000",
      time: "3-6 months",
      description: "Split costs and knowledge across a dedicated team",
      features: [
        "Any weight class suitable for team",
        "Shared expertise and responsibilities", 
        "Collaborative learning experience",
        "Group workshop sessions"
      ],
      icon: Users,
      color: "accent-purple"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-light-text mb-4">
            BUILD YOUR <span className="text-accent-orange">WARRIOR</span>
          </h1>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            From concept to combat-ready. Follow our proven path to bring your robot vision to life.
          </p>
        </div>

        <Tabs defaultValue="steps" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-dark-gray border border-medium-gray mb-8">
            <TabsTrigger value="steps" className="text-light-text data-[state=active]:bg-accent-orange data-[state=active]:text-dark-blue">
              Build Steps
            </TabsTrigger>
            <TabsTrigger value="pathways" className="text-light-text data-[state=active]:bg-accent-cyan data-[state=active]:text-dark-blue">
              Build Pathways
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-light-text data-[state=active]:bg-accent-purple data-[state=active]:text-dark-blue">
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="steps">
            <div className="space-y-8">
              {buildSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="bg-dark-gray border-medium-gray">
                    <CardHeader>
                      <CardTitle className="flex items-center text-light-text">
                        <div className={`w-12 h-12 bg-${step.color} text-dark-blue flex items-center justify-center font-black mr-4`}>
                          {step.number}
                        </div>
                        <Icon className={`h-6 w-6 text-${step.color} mr-3`} />
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-light-text/80 mb-4">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <span className={`text-${step.color} mr-2`}>•</span>
                            <span className="text-light-text/70 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="pathways">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pathways.map((pathway, index) => {
                const Icon = pathway.icon;
                return (
                  <Card key={index} className={`bg-dark-gray border-${pathway.color}/30 hover:border-${pathway.color} transition-colors duration-200`}>
                    <CardHeader>
                      <CardTitle className="text-center">
                        <Icon className={`h-12 w-12 text-${pathway.color} mx-auto mb-4`} />
                        <h3 className="text-xl font-bold text-light-text mb-2">{pathway.title}</h3>
                        <div className="flex justify-center space-x-4 text-sm">
                          <span className={`text-${pathway.color}`}>{pathway.cost}</span>
                          <span className="text-light-text/60">•</span>
                          <span className="text-light-text/60">{pathway.time}</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-light-text/80 text-center mb-6">{pathway.description}</p>
                      <ul className="space-y-2">
                        {pathway.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-light-text/70 text-sm flex items-start">
                            <span className={`text-${pathway.color} mr-2`}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className={`bg-dark-gray border-medium-gray hover:border-${resource.color} transition-colors duration-200 group cursor-pointer`}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Icon className={`h-8 w-8 text-${resource.color} mr-4 mt-1 group-hover:scale-110 transition-transform duration-200`} />
                        <div>
                          <h3 className="text-lg font-bold text-light-text mb-2">{resource.title}</h3>
                          <p className="text-light-text/70 text-sm">{resource.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center bg-dark-gray border border-medium-gray p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-light-text mb-4">Ready to Start Building?</h3>
          <p className="text-light-text/80 mb-6">
            Join our community of builders and get started on your combat robotics journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-orange hover:bg-accent-orange/90 text-dark-blue font-bold">
              Download Starter Kit
            </Button>
            <Button 
              variant="outline" 
              className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-blue font-bold"
            >
              Find a Mentor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
