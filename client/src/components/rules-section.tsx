import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, AlertTriangle } from "lucide-react";

const RulesSection = () => {
  const ruleHighlights = [
    {
      icon: AlertTriangle,
      title: "Safety First",
      description: "All robots must pass safety inspection before competition"
    },
    {
      icon: BookOpen,
      title: "Weight Limits",
      description: "Strict 150g weight limit enforced at weigh-in"
    },
    {
      icon: FileText,
      title: "Material Rules",
      description: "Different restrictions apply to Open vs Plastic categories"
    }
  ];

  return (
    <section id="rules" className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            COMPETITION <span className="text-accent-orange">RULES</span>
          </h2>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            Everything you need to know to compete safely and fairly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ruleHighlights.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className="bg-[#F2F2F2] border border-medium-gray p-6 text-center group hover:border-accent-cyan transition-colors duration-200"
              >
                <Icon className="h-12 w-12 text-accent-cyan mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-bold text-[#0D172B] mb-3">
                  {rule.title}
                </h3>
                <p className="text-[#0D172B]/70 text-sm">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brief Rulebook */}
          <div className="bg-[#F2F2F2] border border-medium-gray p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-accent-orange"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-accent-orange mr-3" />
                <h3 className="text-2xl font-black text-[#0D172B]">
                  Brief Rulebook
                </h3>
              </div>
              <p className="text-[#0D172B]/80 mb-6">
                Quick visual guide with essential rules and reminders. Perfect for experienced builders who need a fast reference.
              </p>
              <div className="space-y-2 mb-6 text-sm text-[#0D172B]/70">
                <div>• Visual safety checklist</div>
                <div>• Weight class specifications</div>
                <div>• Competition format overview</div>
                <div>• Quick material guidelines</div>
              </div>
              <Button className="bg-accent-orange hover:bg-accent-orange/90 text-[#0D172B] font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download Brief Rules
              </Button>
            </div>
          </div>

          {/* Full Ruleset */}
          <div className="bg-[#F2F2F2] border border-medium-gray p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-accent-purple"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-accent-purple mr-3" />
                <h3 className="text-2xl font-black text-[#0D172B]">
                  Complete Ruleset
                </h3>
              </div>
              <p className="text-[#0D172B]/80 mb-6">
                Comprehensive 30-page document covering all rules, safety requirements, and competition procedures in detail.
              </p>
              <div className="space-y-2 mb-6 text-sm text-[#0D172B]/70">
                <div>• Detailed safety regulations</div>
                <div>• Complete material specifications</div>
                <div>• Tournament bracket procedures</div>
                <div>• Scoring and judging criteria</div>
              </div>
              <Button 
                variant="outline"
                className="border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-[#F2F2F2] font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Full Rules
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;