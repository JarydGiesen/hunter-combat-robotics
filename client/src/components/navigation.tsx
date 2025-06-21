import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bot } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/rules", label: "Rules" },
    { path: "/getting-started", label: "Get Started" },
    { path: "/faq", label: "FAQ" },
    { path: "/discord", label: "Discord" },
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark-blue/95 backdrop-blur-sm border-b border-medium-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Bot className="h-8 w-8 text-accent-orange mr-2" />
            <span className="text-2xl font-bold text-accent-orange">
              HCR League
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant="ghost"
                    className={`text-light-text hover:text-accent-cyan transition-colors duration-200 font-medium ${
                      location === item.path ? "text-accent-cyan" : ""
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
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
                    <Link key={item.path} href={item.path} onClick={closeSheet}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-light-text hover:text-accent-cyan transition-colors duration-200 ${
                          location === item.path ? "text-accent-cyan" : ""
                        }`}
                      >
                        {item.label}
                      </Button>
                    </Link>
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
