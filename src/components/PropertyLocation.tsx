
import { MapPin, ExternalLink } from "lucide-react";

interface PropertyLocationProps {
  address: string;
}

const PropertyLocation = ({ address }: PropertyLocationProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-card mb-8">
      <h2 className="text-2xl font-semibold mb-4 font-display">Location</h2>
      <div className="aspect-video bg-estate-bgDark rounded-lg flex items-center justify-center mb-4">
        <div className="text-center">
          <MapPin size={40} className="text-estate-primary mx-auto mb-2" />
          <p className="text-estate-lightText">Map view would be displayed here</p>
          <a 
            href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`} 
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
        {address}
      </p>
    </div>
  );
};

export default PropertyLocation;
