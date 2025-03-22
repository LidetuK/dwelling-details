import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Home, Search, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Kept GLOBAL MENTORS but removed the logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-estate-primary">GLOBAL MENTORS</h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium text-estate-text hover:text-estate-primary transition-colors flex items-center gap-1">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/" className="font-medium text-estate-text hover:text-estate-primary transition-colors flex items-center gap-1">
              <Search size={18} />
              <span>Properties</span>
            </Link>
            <Link to="/" className="font-medium text-estate-text hover:text-estate-primary transition-colors flex items-center gap-1">
              <Phone size={18} />
              <span>Contact</span>
            </Link>
            <Button className="bg-estate-primary hover:bg-estate-primary/90">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-estate-text p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-estate-text hover:text-estate-primary transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/" 
              className="font-medium text-estate-text hover:text-estate-primary transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search size={18} />
              <span>Properties</span>
            </Link>
            <Link 
              to="/" 
              className="font-medium text-estate-text hover:text-estate-primary transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} />
              <span>Contact</span>
            </Link>
            <Button className="bg-estate-primary hover:bg-estate-primary/90 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
