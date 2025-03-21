
import { useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  
  const showMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 4, properties.length));
  };

  return (
    <section className="py-16 bg-estate-bgLight">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">
            Explore our handpicked selection of premium properties across the country
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.slice(0, visibleCount).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {visibleCount < properties.length && (
          <div className="text-center mt-12">
            <button 
              onClick={showMore} 
              className="bg-estate-primary hover:bg-estate-primary/90 text-white py-3 px-8 rounded-full transition-colors font-medium"
            >
              Show More Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;
