import { Bot, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-dark-blue border-t border-medium-gray py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-accent-orange mr-3" />
              <h3 className="text-2xl font-bold text-light-text">Hunter Combat Robotics</h3>
            </div>
            <p className="text-light-text/70 mb-4 max-w-md">
              Building the future of competitive robotics through innovation, 
              community, and the relentless pursuit of mechanical excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="/discord" className="text-accent-orange hover:text-accent-orange/80 transition-colors duration-200">
                <MessageCircle className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-light-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/rules" className="text-light-text/70 hover:text-accent-cyan transition-colors duration-200">
                  Rules & Regulations
                </Link>
              </li>
              <li>
                <Link href="/#upcoming-event" className="text-light-text/70 hover:text-accent-cyan transition-colors duration-200">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/getting-started" className="text-light-text/70 hover:text-accent-cyan transition-colors duration-200">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-light-text/70 hover:text-accent-cyan transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-light-text mb-4">Contact</h4>
            <ul className="space-y-2 text-light-text/70">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-accent-orange mr-2" />
                <span>info@hcrleague.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-accent-cyan mr-2" />
                <span>New York, NY</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 text-accent-purple mr-2" />
                <span>Join our Discord</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-medium-gray mt-12 pt-8 text-center">
          <p className="text-light-text/60">
            © 2024 Hunter Combat Robotics League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
