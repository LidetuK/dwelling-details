
import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { Bed, Bath, Home, MapPin, ArrowUpRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="property-card bg-white rounded-xl overflow-hidden shadow-card group">
      <Link to={`/property/${property.id}`}>
        <div className="property-image-container">
          <img 
            src={property.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
            alt={property.title} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-estate-primary/90 text-white text-sm font-medium px-3 py-1 rounded-full">
              {property.status}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-estate-lightText mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm truncate">{property.address}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-estate-text mb-2 group-hover:text-estate-primary transition-colors">
            {property.title}
          </h3>
          
          <p className="text-2xl font-bold text-estate-primary mb-4">
            {formatCurrency(property.price)}
          </p>
          
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Bed size={18} className="text-estate-lightText mr-1" />
                <span className="text-estate-text">{property.bedrooms}</span>
              </div>
              
              <div className="flex items-center">
                <Bath size={18} className="text-estate-lightText mr-1" />
                <span className="text-estate-text">{property.bathrooms}</span>
              </div>
              
              <div className="flex items-center">
                <Home size={18} className="text-estate-lightText mr-1" />
                <span className="text-estate-text">{property.area} sq ft</span>
              </div>
            </div>
            
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="flex items-center text-estate-primary font-medium">
                View
                <ArrowUpRight size={16} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
