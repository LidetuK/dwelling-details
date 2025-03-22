
import { Bed, Bath, Home, CheckCircle2, Calendar, Ruler, Car, Building, Thermometer, Snowflake } from "lucide-react";

interface PropertyFeaturesProps {
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
  communityAmenities?: string[];
  propertyInfo?: {
    yearBuilt?: number;
    lotSize?: string;
    garageSpaces?: number;
    basement?: boolean;
    heating?: string;
    cooling?: string;
    [key: string]: any;
  };
  price?: number;
  discountedPrice?: number;
}

const PropertyFeatures = ({ 
  bedrooms, 
  bathrooms, 
  area, 
  description, 
  features,
  communityAmenities,
  propertyInfo,
  price,
  discountedPrice
}: PropertyFeaturesProps) => {
  const discount = price && discountedPrice ? Math.round(((price - discountedPrice) / price) * 100) : 0;
  
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
      
      {/* Price After Discount Section */}
      {discountedPrice && price && discountedPrice < price && (
        <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-100">
          <h2 className="text-xl font-semibold mb-2 font-display text-green-700">Price After Discount</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-800 text-lg font-bold">KES {discountedPrice.toLocaleString()}</p>
              <p className="text-green-600 text-sm">You save: KES {(price - discountedPrice).toLocaleString()} ({discount}%)</p>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              Limited Time Offer
            </div>
          </div>
        </div>
      )}
      
      <h2 className="text-2xl font-semibold mb-4 font-display">Description</h2>
      <p className="text-estate-text mb-6 leading-relaxed">
        {description}
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 font-display">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle2 size={18} className="text-estate-primary mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      {/* Community Amenities Section */}
      {communityAmenities && communityAmenities.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4 font-display">Community Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {communityAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </>
      )}
      
      {/* Property Information Section */}
      {propertyInfo && Object.keys(propertyInfo).length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4 font-display">Property Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {propertyInfo.yearBuilt && (
              <div className="flex items-center">
                <Calendar size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-estate-lightText">Year Built</p>
                  <p className="font-medium">{propertyInfo.yearBuilt}</p>
                </div>
              </div>
            )}
            
            {propertyInfo.lotSize && (
              <div className="flex items-center">
                <Ruler size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-estate-lightText">Lot Size</p>
                  <p className="font-medium">{propertyInfo.lotSize}</p>
                </div>
              </div>
            )}
            
            {propertyInfo.garageSpaces !== undefined && (
              <div className="flex items-center">
                <Car size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-estate-lightText">Garage Spaces</p>
                  <p className="font-medium">{propertyInfo.garageSpaces}</p>
                </div>
              </div>
            )}
            
            {propertyInfo.basement !== undefined && (
              <div className="flex items-center">
                <Building size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-estate-lightText">Basement</p>
                  <p className="font-medium">{propertyInfo.basement ? "Yes" : "No"}</p>
                </div>
              </div>
            )}
            
            {propertyInfo.heating && (
              <div className="flex items-center">
                <Thermometer size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-estate-lightText">Heating</p>
                  <p className="font-medium">{propertyInfo.heating}</p>
                </div>
              </div>
            )}
            
            {propertyInfo.cooling && (
              <div className="flex items-center">
                <Snowflake size={18} className="text-estate-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-estate-lightText">Cooling</p>
                  <p className="font-medium">{propertyInfo.cooling}</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyFeatures;
