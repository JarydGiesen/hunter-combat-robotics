import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bot } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  const navItems = [
    { anchor: "upcoming-event", label: "Next Event", color: "accent-cyan" },
    { anchor: "rules", label: "Rules", color: "accent-orange" },
    { anchor: "discord", label: "Discord", color: "accent-purple" },
  ];

  const closeSheet = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections with light backgrounds
      const lightSections = document.querySelectorAll('[class*="bg-[#F2F2F2]"]');
      const navHeight = 64; // Height of the navigation bar
      const scrollY = window.scrollY;
      
      let onLightSection = false;
      
      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if navigation bar overlaps with this light section
        if (scrollY + navHeight > sectionTop && scrollY < sectionBottom) {
          onLightSection = true;
        }
      });
      
      setIsOnLightSection(onLightSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0D172B] border-b border-medium-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo-blue-small.jpg" 
              alt="HCR League Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                // Fallback to robot icon if logo doesn't load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center">
              <Bot className="h-8 w-8 text-accent-orange mr-2" />
              <span className="text-2xl font-bold text-accent-orange">
                HCR League
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.anchor}
                  href={`#${item.anchor}`}
                  className={`text-light-text hover:text-${item.color} transition-all duration-300 font-medium transform hover:scale-110 hover:shadow-lg px-2 py-1 rounded`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-light-text">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-gray border-medium-gray">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.anchor}
                      href={`#${item.anchor}`}
                      className={`block px-3 py-2 text-base font-medium text-light-text hover:text-${item.color} transition-all duration-300 transform hover:scale-105 hover:bg-${item.color}/10 rounded`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
