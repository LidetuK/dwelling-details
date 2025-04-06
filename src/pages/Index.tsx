
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import ProductGrid from "@/components/ProductGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { ArrowRight, Home, CheckCircle2, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-estate-bgLight">
      <Navbar />
      <Hero />
      
      <ProductGrid />
      
      <PropertyGrid />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We're dedicated to providing exceptional service and finding the perfect property for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-estate-bgDark p-6 rounded-xl text-center animate-fade-in">
              <div className="w-16 h-16 bg-estate-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-estate-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Properties</h3>
              <p className="text-estate-lightText">
                We offer a curated selection of high-quality properties in prime locations.
              </p>
            </div>
            
            <div className="bg-estate-bgDark p-6 rounded-xl text-center animate-fade-in delay-75">
              <div className="w-16 h-16 bg-estate-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-estate-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Listings</h3>
              <p className="text-estate-lightText">
                All our properties are thoroughly verified to ensure accuracy and quality.
              </p>
            </div>
            
            <div className="bg-estate-bgDark p-6 rounded-xl text-center animate-fade-in delay-150">
              <div className="w-16 h-16 bg-estate-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-estate-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-estate-lightText">
                Our team of experts provides personalized assistance throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-estate-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">Ready to Find Your Dream Home?</h2>
              <p className="text-white/80 max-w-2xl">
                Contact our team today to start your journey towards finding the perfect property.
              </p>
            </div>
            <Button size="lg" className="bg-white text-estate-primary hover:bg-white/90">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-estate-bgDark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Have questions or need assistance? Reach out to our team.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
