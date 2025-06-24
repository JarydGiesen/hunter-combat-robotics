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
        "The plastic antweight (plantweight) class is designed to be an approachable and beginner friendly class. This class only allows 3D printed plastics to be used for chassis and weapon parts. Metal bolts, washers and any other non-structural parts are typically allowed. Open class is the more advanced of the two allowing for any materials or metals to be used in bot construction. Check the rules for final rulings and all restrictions on these classes.",
    },
    {
      question: "Do I need prior robotics experience?",
      answer:
        "Not at all! Combat robots see many succesful builders starting from zero robotics experience. The builder community is especially helpful to beginners with design and building techniques being shared freely. Joining our Discord would be your 1st point of contact for getting help with a bot!",
    },
    {
      question: "What's the typical cost to build a robot?",
      answer:
        "Costs can vary significantly depending on bot and complexity. Getting a reasonably competitive antweight ready to fight will set you back $150-$250 AUD with about $80 of that being for the radio and battery charger. Many internal parts are reusable in future bots and running costs for competing in an event are low.",
    },
    {
      question: "How often do competitions happen?",
      answer:
        "We try to host three to four tournaments a year. Craving more? We run our ruleset close to Robot Royale which also runs three to four times a year in Sydney. A bot built to our ruleset is likely able to be entered into their tournament.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0D172B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            FREQUENTLY ASKED{" "}
            <span className="text-accent-purple">QUESTIONS</span>
          </h2>
          <p className="text-xl text-light-text/80">
            Everything you need to know to get started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-medium-gray bg-dark-blue">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-dark-gray/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-light-text">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent-orange transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-accent-orange transition-transform duration-200" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-light-text/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/faq">
            <Button
              variant="outline"
              className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-[#0D172B] font-bold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              VIEW ALL QUESTIONS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
