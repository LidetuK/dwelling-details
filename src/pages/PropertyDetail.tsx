
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { properties, Property } from "@/data/properties";
import Navbar from "@/components/Navbar";
import PropertyDetailFooter from "@/components/PropertyDetailFooter";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyImageGallery from "@/components/PropertyImageGallery";
import PropertyFeatures from "@/components/PropertyFeatures";
import PropertyLocation from "@/components/PropertyLocation";
import SimilarProperties from "@/components/SimilarProperties";
import ContactForm from "@/components/ContactForm";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [otherProperties, setOtherProperties] = useState<Property[]>([]);

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
        
        // Get other properties (excluding current one)
        const others = properties
          .filter(p => p.id !== foundProperty.id)
          .slice(0, 4); // Limit to 4 properties for the carousel
        setOtherProperties(others);
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
        <PropertyHeader 
          title={property.title}
          address={property.address}
          price={property.price}
          status={property.status}
          onGoBack={handleGoBack}
        />
        
        <PropertyImageGallery 
          images={property.images} 
          title={property.title}
        />
        
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PropertyFeatures 
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                description={property.description}
                features={property.features}
                communityAmenities={property.communityAmenities}
                propertyInfo={property.propertyInfo}
                price={property.price}
                discountedPrice={property.discountedPrice}
              />
              
              <PropertyLocation address={property.address} />
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm property={property} />
              </div>
            </div>
          </div>
        </div>
        
        <SimilarProperties properties={otherProperties} />
      </main>
      
      <PropertyDetailFooter />
    </div>
  );
};

export default PropertyDetail;
