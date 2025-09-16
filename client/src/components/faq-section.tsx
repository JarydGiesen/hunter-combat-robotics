import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Whats the difference between plastic and open classes?",
      answer:
        "The plastic antweight (plantweight) class is designed to be an approachable and beginner friendly class. This class only allows simple plastics to be used for chassis and weapon parts. Metal bolts, washers and any other non-structural parts are allowed as long as they are not used to enhance a weapon, or the strength of your bot (in other words you can use bolts to screw your bot together, but not to give extra hitting power to something like a spinner). Check the full ruleset for allowed materials, but more bots are 3d printed with PLA, ABS, or PETG. Open class is the more advanced of the two allowing for any materials or metals to be used in bot construction. Expect lots of destruction and very well designed bots in this class. Check the rules for final rulings and all restrictions on these classes.",
    },
    {
      question: "Do I need prior robotics experience?",
      answer:
        "Not at all! Combat robots sees many succesful builders starting from zero robotics experience. The builder community is especially helpful to beginners with design and building techniques being shared freely. An antweight combat robot is a great first project to get into the world of robotics! Joining our Discord would be your first point of contact for getting help with a bot!",
    },
    {
      question: "What's the typical cost to build a robot?",
      answer:
        "Costs can vary significantly depending on bot and complexity. Getting a reasonably competitive antweight ready to fight will set you back $200-$300 AUD with about half of that being equipment you would use across multiple bots (transmitter, battery charger, etc.). Many internal parts are reusable in future bots and running costs for competing in an event are low. This is a destructive sport, but you need replacement parts far less often than you may think.",
    },
    {
      question: "How often do competitions happen?",
      answer:
        "We try to host three to four tournaments a year. Craving more? We run our ruleset exztremely close to Robot Royale (ideally identical) which also runs three to four times a year in Sydney. A bot built to our ruleset is likely be able to compete in Robot Royale. You will also find a wealth of events across Australia.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F2F2F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D172B] mb-4">
            FREQUENTLY ASKED{" "}
            <span className="text-accent-purple">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-medium-gray bg-white overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-[#0D172B]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-accent-orange transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[#0D172B]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() =>
              document
                .getElementById("discord")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ASK ON DISCORD
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
