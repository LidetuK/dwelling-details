
import PropertyCarousel from "./PropertyCarousel";
import { Property } from "@/data/properties";

interface SimilarPropertiesProps {
  properties: Property[];
}

const SimilarProperties = ({ properties }: SimilarPropertiesProps) => {
  if (properties.length === 0) return null;
  
  return (
    <section className="py-16 bg-estate-bgDark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-white mb-2">Similar Properties</h2>
          <p className="text-estate-lightText">
            Explore other properties you might be interested in
          </p>
        </div>
        
        <PropertyCarousel properties={properties} />
      </div>
    </section>
  );
};

export default SimilarProperties;
