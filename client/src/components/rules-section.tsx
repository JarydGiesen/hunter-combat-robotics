import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen } from "lucide-react";

const RulesSection = () => {


  return (
    <section id="rules" className="py-20 bg-[#0D172B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            COMPETITION <span className="text-accent-orange">RULES</span>
          </h2>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            Your bot will be scrutineered on the day to ensure it meets all the rules.
          </p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brief Rulebook */}
          <div className="bg-[#F2F2F2] border border-medium-gray p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-accent-cyan"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-accent-cyan mr-3" />
                <h3 className="text-2xl font-black text-[#0D172B]">
                  Brief Ruleset
                </h3>
              </div>
              <p className="text-[#0D172B]/80 mb-6">
                Quick visual guide with essential rules and reminders. Perfect for an introduction or refresher of the rules.
              </p>
              <Button 
                variant="outline"
                className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-[#F2F2F2] font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
              >
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
                  Complete Rulebook
                </h3>
              </div>
              <p className="text-[#0D172B]/80 mb-6">
                Comprehensive document covering all rules and safety requirements in detail. This has the final say on all rules.
              </p>
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