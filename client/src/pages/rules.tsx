import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Zap, Scale, Users } from "lucide-react";

const Rules = () => {
  const weightClasses = [
    {
      name: "Featherweight",
      weight: "30 lbs",
      description: "Perfect for beginners and those looking to experiment with new designs.",
      rules: [
        "Maximum weight: 30 pounds (13.6 kg)",
        "Maximum dimensions: 18\" x 18\" x 18\"",
        "Weapons must be non-powered or low-energy",
        "Remote control required at all times"
      ]
    },
    {
      name: "Lightweight",
      weight: "60 lbs", 
      description: "The sweet spot between accessibility and destruction potential.",
      rules: [
        "Maximum weight: 60 pounds (27.2 kg)",
        "Maximum dimensions: 24\" x 24\" x 24\"",
        "Powered weapons allowed with restrictions",
        "Safety link required for all powered systems"
      ]
    },
    {
      name: "Middleweight",
      weight: "120 lbs",
      description: "Where serious builders test their engineering limits.",
      rules: [
        "Maximum weight: 120 pounds (54.4 kg)",
        "Maximum dimensions: 36\" x 36\" x 36\"",
        "High-energy weapons permitted",
        "Mandatory safety inspection before competition"
      ]
    },
    {
      name: "Heavyweight",
      weight: "250 lbs",
      description: "The ultimate test of engineering prowess and destruction.",
      rules: [
        "Maximum weight: 250 pounds (113.4 kg)",
        "Maximum dimensions: 48\" x 48\" x 48\"",
        "No weapon restrictions (within safety guidelines)",
        "Extensive safety documentation required"
      ]
    }
  ];

  const safetyRules = [
    "All robots must pass pre-competition safety inspection",
    "Robots must have easily accessible emergency stop",
    "Lithium batteries must be in protective cases",
    "Weapons must have safety locks when not in combat",
    "Remote controls must operate on approved frequencies",
    "Builders must wear safety equipment in pit areas"
  ];

  const competitionRules = [
    "Matches are 3 minutes maximum duration",
    "Victory by knockout, judge decision, or opponent forfeit",
    "Robots must show controlled movement every 10 seconds",
    "Tapping out results in immediate defeat",
    "Judges score based on damage, control, and aggression",
    "Unsportsmanlike conduct results in disqualification"
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-light-text mb-4">
            RULES & <span className="text-accent-orange">REGULATIONS</span>
          </h1>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            Fair competition, safety first, and maximum destruction within controlled parameters.
          </p>
        </div>

        <Tabs defaultValue="weight-classes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-dark-gray border border-medium-gray">
            <TabsTrigger value="weight-classes" className="text-light-text data-[state=active]:bg-accent-orange data-[state=active]:text-dark-blue">
              Weight Classes
            </TabsTrigger>
            <TabsTrigger value="safety" className="text-light-text data-[state=active]:bg-accent-cyan data-[state=active]:text-dark-blue">
              Safety Rules
            </TabsTrigger>
            <TabsTrigger value="competition" className="text-light-text data-[state=active]:bg-accent-purple data-[state=active]:text-dark-blue">
              Competition
            </TabsTrigger>
            <TabsTrigger value="conduct" className="text-light-text data-[state=active]:bg-accent-orange data-[state=active]:text-dark-blue">
              Conduct
            </TabsTrigger>
          </TabsList>

          <TabsContent value="weight-classes" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {weightClasses.map((weightClass, index) => (
                <Card key={index} className="bg-dark-gray border-medium-gray">
                  <CardHeader>
                    <CardTitle className="flex items-center text-light-text">
                      <Scale className="h-6 w-6 text-accent-orange mr-3" />
                      {weightClass.name}
                      <span className="ml-auto text-accent-cyan">{weightClass.weight}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-light-text/80 mb-4">{weightClass.description}</p>
                    <ul className="space-y-2">
                      {weightClass.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="text-light-text/70 text-sm flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="safety" className="mt-8">
            <Card className="bg-dark-gray border-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-light-text">
                  <Shield className="h-6 w-6 text-accent-cyan mr-3" />
                  Safety Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-accent-cyan mb-4">Robot Safety</h3>
                    <ul className="space-y-3">
                      {safetyRules.slice(0, 3).map((rule, index) => (
                        <li key={index} className="text-light-text/80 flex items-start">
                          <span className="text-accent-cyan mr-2">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-accent-orange mb-4">Builder Safety</h3>
                    <ul className="space-y-3">
                      {safetyRules.slice(3).map((rule, index) => (
                        <li key={index} className="text-light-text/80 flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competition" className="mt-8">
            <Card className="bg-dark-gray border-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-light-text">
                  <Zap className="h-6 w-6 text-accent-purple mr-3" />
                  Competition Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {competitionRules.map((rule, index) => (
                    <li key={index} className="text-light-text/80 flex items-start">
                      <span className="text-accent-purple mr-3 font-bold">{index + 1}.</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conduct" className="mt-8">
            <Card className="bg-dark-gray border-medium-gray">
              <CardHeader>
                <CardTitle className="flex items-center text-light-text">
                  <Users className="h-6 w-6 text-accent-orange mr-3" />
                  Code of Conduct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-accent-orange mb-3">Sportsmanship</h3>
                    <p className="text-light-text/80">
                      All participants must demonstrate respect for opponents, officials, and the sport. 
                      Trash talking is encouraged but must remain lighthearted and not cross into 
                      personal attacks or harassment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-accent-cyan mb-3">Fair Play</h3>
                    <p className="text-light-text/80">
                      Robots must compete as built and inspected. No modifications between matches 
                      without official approval. Deliberate attempts to circumvent rules will result 
                      in immediate disqualification.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-accent-purple mb-3">Community Standards</h3>
                    <p className="text-light-text/80">
                      HCR League promotes an inclusive environment welcoming to all backgrounds, 
                      skill levels, and identities. Discrimination or harassment of any kind will 
                      not be tolerated.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Rules;
