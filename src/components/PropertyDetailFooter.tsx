
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Home, ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import { formatCurrency } from "@/lib/utils";

const PropertyDetailFooter = () => {
  // Get 3 random properties for the footer
  const featuredProperties = properties
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <footer className="bg-estate-bgDark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-estate-primary mb-4 font-display">DwellingDetails</h3>
            <p className="mb-6 text-estate-lightText">
              Your journey to finding the perfect home begins and ends with us. Explore our exclusive selection of premium properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-estate-lightText hover:text-estate-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-estate-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-estate-lightText">
                  123 Real Estate Blvd, Beverly Hills, CA 90210
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-estate-primary mr-3 flex-shrink-0" />
                <p className="text-estate-lightText">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-estate-primary mr-3 flex-shrink-0" />
                <p className="text-estate-lightText">info@dwellingdetails.com</p>
              </div>
            </div>
          </div>
          
          {/* Featured Properties */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Featured Properties</h4>
            <div className="space-y-4">
              {featuredProperties.map((property) => (
                <Link key={property.id} to={`/property/${property.id}`} className="flex items-center group hover:bg-estate-bgDark/50 p-2 rounded-lg transition-colors">
                  <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3 flex-grow">
                    <h5 className="font-medium group-hover:text-estate-primary transition-colors line-clamp-1">{property.title}</h5>
                    <div className="flex items-center text-sm text-estate-lightText">
                      <Home size={14} className="mr-1" />
                      <span>{property.type}</span>
                      <span className="mx-2">•</span>
                      <span>{formatCurrency(property.price)}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-estate-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200/10 mt-12 pt-6 text-center">
          <p className="text-sm text-estate-lightText">
            © {new Date().getFullYear()} DwellingDetails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PropertyDetailFooter;
