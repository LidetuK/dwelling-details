import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-bgDark text-estate-text">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* Removed the logo image but kept the company name */}
              <h3 className="text-2xl font-bold text-estate-primary font-display">GLOBAL MENTORS</h3>
            </div>
            <p className="mb-6 text-estate-lightText">
              Finding your dream home has never been easier. Explore our curated selection of premium properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="/" className="text-estate-lightText hover:text-estate-primary transition-colors">
                  Land
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-estate-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-estate-lightText">
                  Kenya, Nairobi
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-estate-primary mr-3 flex-shrink-0" />
                <p className="text-estate-lightText">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-estate-primary mr-3 flex-shrink-0" />
                <p className="text-estate-lightText">info@globalmentors.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200/10 mt-12 pt-6 text-center">
          <p className="text-sm text-estate-lightText">
            © {new Date().getFullYear()} GLOBAL MENTORS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
