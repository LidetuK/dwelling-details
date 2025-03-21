
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-estate-bgDark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover exceptional properties in prime locations. From modern urban apartments to 
            luxurious countryside estates, we have the perfect home waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-estate-primary hover:bg-estate-primary/90 text-white">
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Glass Panel with Stats */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-full max-w-5xl px-4 md:px-6 z-20">
        <div className="glass-panel rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-estate-lightText text-sm font-medium uppercase tracking-wider">Properties</p>
            <p className="text-4xl font-bold text-estate-text mt-2 font-display">200+</p>
          </div>
          <div className="text-center">
            <p className="text-estate-lightText text-sm font-medium uppercase tracking-wider">Happy Clients</p>
            <p className="text-4xl font-bold text-estate-text mt-2 font-display">1,500+</p>
          </div>
          <div className="text-center">
            <p className="text-estate-lightText text-sm font-medium uppercase tracking-wider">Years of Experience</p>
            <p className="text-4xl font-bold text-estate-text mt-2 font-display">15+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
