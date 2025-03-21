
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { properties, Property } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { 
  Bed, 
  Bath, 
  Home, 
  MapPin, 
  ArrowLeft, 
  Heart, 
  Share2, 
  CheckCircle2,
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      const foundProperty = properties.find(
        (p) => p.id === Number(id)
      );
      
      if (foundProperty) {
        setProperty(foundProperty);
        setSelectedImage(foundProperty.images[0] || foundProperty.image);
      }
      
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-estate-bgLight flex items-center justify-center">
        <div className="animate-pulse">
          <p className="text-estate-primary text-lg">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-estate-bgLight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-6">The property you're looking for doesn't exist.</p>
          <Button onClick={handleGoBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-estate-bgLight">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Property Header */}
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <button 
            onClick={handleGoBack}
            className="flex items-center text-estate-text hover:text-estate-primary transition-colors mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Properties
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-display">{property.title}</h1>
              <div className="flex items-center mt-2 text-estate-lightText">
                <MapPin size={18} className="mr-1" />
                <span>{property.address}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-3xl font-bold text-estate-primary">
                {formatCurrency(property.price)}
              </p>
              <span className="bg-estate-primary/90 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mt-2">
                {property.status}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="gap-2">
              <Heart size={18} />
              Save
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 size={18} />
              Share
            </Button>
          </div>
        </div>
        
        {/* Property Gallery */}
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-xl overflow-hidden property-image-container">
              <img 
                src={selectedImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"} 
                alt={property.title} 
                className="w-full h-full object-cover max-h-[500px]"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {property.images.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden cursor-pointer property-image-container ${
                    selectedImage === image ? "ring-2 ring-estate-primary" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image || `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop&crop=center`} 
                    alt={`${property.title} - Image ${index + 1}`} 
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Features Overview */}
              <div className="bg-white rounded-xl p-6 shadow-card mb-8">
                <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-estate-bgDark rounded-lg">
                    <Bed size={24} className="mx-auto mb-2 text-estate-primary" />
                    <p className="text-sm text-estate-lightText">Bedrooms</p>
                    <p className="text-xl font-semibold">{property.bedrooms}</p>
                  </div>
                  
                  <div className="text-center p-4 bg-estate-bgDark rounded-lg">
                    <Bath size={24} className="mx-auto mb-2 text-estate-primary" />
                    <p className="text-sm text-estate-lightText">Bathrooms</p>
                    <p className="text-xl font-semibold">{property.bathrooms}</p>
                  </div>
                  
                  <div className="text-center p-4 bg-estate-bgDark rounded-lg">
                    <Home size={24} className="mx-auto mb-2 text-estate-primary" />
                    <p className="text-sm text-estate-lightText">Area</p>
                    <p className="text-xl font-semibold">{property.area} sq ft</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold mb-4 font-display">Description</h2>
                <p className="text-estate-text mb-6 leading-relaxed">
                  {property.description}
                </p>
                
                <h2 className="text-2xl font-semibold mb-4 font-display">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location */}
              <div className="bg-white rounded-xl p-6 shadow-card mb-8">
                <h2 className="text-2xl font-semibold mb-4 font-display">Location</h2>
                <div className="aspect-video bg-estate-bgDark rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin size={40} className="text-estate-primary mx-auto mb-2" />
                    <p className="text-estate-lightText">Map view would be displayed here</p>
                    <a 
                      href={`https://www.google.com/maps/search/${encodeURIComponent(property.address)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-estate-primary hover:underline flex items-center justify-center mt-2"
                    >
                      View on Google Maps
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                <p className="text-estate-lightText">
                  {property.address}
                </p>
              </div>
            </div>
            
            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm property={property} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
