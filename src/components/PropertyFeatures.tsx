
import { Bed, Bath, Home, CheckCircle2 } from "lucide-react";

interface PropertyFeaturesProps {
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
}

const PropertyFeatures = ({ 
  bedrooms, 
  bathrooms, 
  area, 
  description, 
  features 
}: PropertyFeaturesProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-card mb-8">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-6">
        <div className="text-center p-4 bg-estate-bgDark rounded-lg">
          <Bed size={24} className="mx-auto mb-2 text-estate-primary" />
          <p className="text-sm text-estate-lightText">Bedrooms</p>
          <p className="text-xl font-semibold">{bedrooms}</p>
        </div>
        
        <div className="text-center p-4 bg-estate-bgDark rounded-lg">
          <Bath size={24} className="mx-auto mb-2 text-estate-primary" />
          <p className="text-sm text-estate-lightText">Bathrooms</p>
          <p className="text-xl font-semibold">{bathrooms}</p>
        </div>
        
        <div className="text-center p-4 bg-estate-bgDark rounded-lg">
          <Home size={24} className="mx-auto mb-2 text-estate-primary" />
          <p className="text-sm text-estate-lightText">Area</p>
          <p className="text-xl font-semibold">{area} sq ft</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4 font-display">Description</h2>
      <p className="text-estate-text mb-6 leading-relaxed">
        {description}
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 font-display">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle2 size={18} className="text-estate-primary mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;
