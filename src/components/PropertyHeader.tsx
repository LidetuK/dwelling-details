
import { ArrowLeft, Heart, Share2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface PropertyHeaderProps {
  title: string;
  address: string;
  price: number;
  status: string;
  onGoBack: () => void;
}

const PropertyHeader = ({ title, address, price, status, onGoBack }: PropertyHeaderProps) => {
  return (
    <div className="container mx-auto px-4 md:px-6 mb-8">
      <button 
        onClick={onGoBack}
        className="flex items-center text-estate-text hover:text-estate-primary transition-colors mb-6"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Properties
      </button>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-display">{title}</h1>
          <div className="flex items-center mt-2 text-estate-lightText">
            <MapPin size={18} className="mr-1" />
            <span>{address}</span>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0">
          <p className="text-3xl font-bold text-estate-primary">
            {formatCurrency(price)}
          </p>
          <span className="bg-estate-primary/90 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mt-2">
            {status}
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
  );
};

export default PropertyHeader;
