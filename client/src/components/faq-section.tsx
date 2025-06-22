import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What weight classes do you support?",
      answer: "We support four main weight classes: Featherweight (30 lbs), Lightweight (60 lbs), Middleweight (120 lbs), and Heavyweight (250 lbs). Each class has specific rules and safety requirements."
    },
    {
      question: "Do I need prior robotics experience?",
      answer: "Not at all! Many of our most successful builders started with zero robotics experience. We provide mentorship programs, workshops, and detailed guides to help newcomers learn the fundamentals of robot design and construction."
    },
    {
      question: "What's the typical cost to build a robot?",
      answer: "Costs vary significantly by weight class and design complexity. Entry-level featherweight robots can be built for $500-1000, while competitive heavyweight robots may cost $5000-15000. We provide budget-friendly starter kits and used parts marketplace."
    },
    {
      question: "How often do competitions happen?",
      answer: "We host major tournaments quarterly, with smaller local events monthly. Practice sessions and testing days happen weekly at our facility. Competition schedules are posted 6 months in advance to allow adequate preparation time."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0D172B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-light-text mb-4">
            FREQUENTLY ASKED <span className="text-accent-purple">QUESTIONS</span>
          </h2>
          <p className="text-xl text-light-text/80">Everything you need to know to get started</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-medium-gray bg-dark-blue">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-dark-gray/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-light-text">{faq.question}</span>
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
              className="border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-blue font-bold"
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
