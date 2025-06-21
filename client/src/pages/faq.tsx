import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Getting Started",
      color: "accent-orange",
      faqs: [
        {
          question: "Do I need prior robotics experience?",
          answer: "Not at all! Many of our most successful builders started with zero robotics experience. We provide mentorship programs, workshops, and detailed guides to help newcomers learn the fundamentals of robot design and construction."
        },
        {
          question: "What's the typical cost to build a robot?",
          answer: "Costs vary significantly by weight class and design complexity. Entry-level featherweight robots can be built for $500-1000, while competitive heavyweight robots may cost $5000-15000. We provide budget-friendly starter kits and used parts marketplace."
        },
        {
          question: "How long does it take to build a robot?",
          answer: "First-time builders typically need 3-6 months for a simple featherweight robot, while experienced builders can complete heavyweight machines in 6-12 months. The timeline depends on complexity, available time, and access to tools."
        },
        {
          question: "What tools and equipment do I need?",
          answer: "Basic hand tools, a drill, and access to cutting tools (angle grinder, saw) are essential. Advanced builds may require welding equipment, CNC machines, or 3D printers. Many builders start simple and upgrade tools as they progress."
        }
      ]
    },
    {
      title: "Competition Rules",
      color: "accent-cyan",
      faqs: [
        {
          question: "What weight classes do you support?",
          answer: "We support four main weight classes: Featherweight (30 lbs), Lightweight (60 lbs), Middleweight (120 lbs), and Heavyweight (250 lbs). Each class has specific rules and safety requirements."
        },
        {
          question: "How are matches decided?",
          answer: "Matches can end by knockout (robot unable to move), judge decision (based on damage, control, aggression), or forfeit. Matches have a 3-minute time limit, and robots must show controlled movement every 10 seconds."
        },
        {
          question: "What weapons are allowed?",
          answer: "Weapon restrictions vary by weight class. Featherweights are limited to non-powered weapons, while heavyweights can use high-energy spinners, hammers, and other destructive systems within safety guidelines."
        },
        {
          question: "Can I modify my robot between matches?",
          answer: "Minor repairs and maintenance are allowed between matches with official approval. Major modifications or weapon changes require re-inspection. All changes must be documented and approved by technical staff."
        }
      ]
    },
    {
      title: "Events & Schedule",
      color: "accent-purple",
      faqs: [
        {
          question: "How often do competitions happen?",
          answer: "We host major tournaments quarterly, with smaller local events monthly. Practice sessions and testing days happen weekly at our facility. Competition schedules are posted 6 months in advance to allow adequate preparation time."
        },
        {
          question: "How do I register for events?",
          answer: "Registration opens 8 weeks before each event through our website and Discord server. Early registration is recommended as spots fill quickly, especially for major tournaments."
        },
        {
          question: "What happens if my robot breaks during an event?",
          answer: "We have designated repair time between matches, and our community is incredibly helpful with lending tools and parts. Many builders bring spare parts and help each other with repairs throughout the event."
        },
        {
          question: "Are events open to spectators?",
          answer: "Yes! All events welcome spectators with general admission tickets. VIP packages include pit access, meet-and-greets with builders, and behind-the-scenes tours of robot construction areas."
        }
      ]
    },
    {
      title: "Safety & Technical",
      color: "accent-orange",
      faqs: [
        {
          question: "How dangerous is combat robotics?",
          answer: "When proper safety protocols are followed, combat robotics is very safe. All robots undergo rigorous safety inspection, operators use protective equipment, and events have comprehensive safety protocols and emergency procedures."
        },
        {
          question: "What safety equipment is required?",
          answer: "Safety glasses, closed-toe shoes, and hearing protection are mandatory in pit areas. Specific safety gear requirements vary by robot weight class and weapon type. We provide detailed safety checklists for all participants."
        },
        {
          question: "How does robot inspection work?",
          answer: "All robots undergo technical inspection before competition, checking weight, dimensions, safety systems, and weapon compliance. Inspectors verify emergency stops, containment systems, and operational safety before approving robots for competition."
        },
        {
          question: "What insurance or liability coverage exists?",
          answer: "HCR League maintains comprehensive liability insurance for all sanctioned events. Participants sign waivers acknowledging risks, and we strongly recommend builders carry their own equipment insurance for valuable robots."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 1000 + faqIndex;
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-light-text mb-4">
            FREQUENTLY ASKED <span className="text-accent-purple">QUESTIONS</span>
          </h1>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto">
            Everything you need to know about combat robotics, competitions, and getting started.
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-6">
                <HelpCircle className={`h-6 w-6 text-${category.color} mr-3`} />
                <h2 className={`text-2xl font-bold text-${category.color}`}>{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 1000 + faqIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <Card key={faqIndex} className="bg-dark-gray border-medium-gray">
                      <button
                        className="w-full text-left p-6 flex justify-between items-center hover:bg-dark-blue/50 transition-colors duration-200"
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                      >
                        <span className="text-lg font-semibold text-light-text pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className={`h-5 w-5 text-${category.color} flex-shrink-0`} />
                        ) : (
                          <ChevronDown className={`h-5 w-5 text-${category.color} flex-shrink-0`} />
                        )}
                      </button>
                      {isOpen && (
                        <CardContent className="px-6 pb-6">
                          <p className="text-light-text/80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-dark-gray border border-medium-gray p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-light-text mb-4">Still Have Questions?</h3>
          <p className="text-light-text/80 mb-6">
            Join our Discord community for real-time answers from experienced builders and league organizers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/discord" className="bg-accent-purple hover:bg-accent-purple/90 text-light-text font-bold py-3 px-6 rounded transition-colors duration-200">
              Join Discord
            </a>
            <a href="mailto:info@hcrleague.com" className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-blue font-bold py-3 px-6 rounded transition-all duration-200">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
