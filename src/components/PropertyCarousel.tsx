
import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { Bed, Bath, Home, ArrowUpRight } from "lucide-react";
import { formatCurrency, createSlug } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PropertyCarouselProps {
  properties: Property[];
}

const PropertyCarousel = ({ properties }: PropertyCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2 md:-ml-4">
        {properties.map((property) => (
          <CarouselItem key={property.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="property-card bg-white rounded-xl overflow-hidden shadow-card h-full group">
              <Link to={`/property/${createSlug(property.title)}`} className="block h-full">
                <div className="property-image-container">
                  <img
                    src={property.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-estate-primary/90 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {property.status}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-estate-text mb-2 group-hover:text-estate-primary transition-colors line-clamp-1">
                    {property.title}
                  </h3>

                  <p className="text-xl font-bold text-estate-primary mb-2">
                    {formatCurrency(property.price)}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <Bed size={16} className="text-estate-lightText mr-1" />
                        <span className="text-estate-text text-sm">{property.bedrooms}</span>
                      </div>

                      <div className="flex items-center">
                        <Bath size={16} className="text-estate-lightText mr-1" />
                        <span className="text-estate-text text-sm">{property.bathrooms}</span>
                      </div>

                      <div className="flex items-center">
                        <Home size={16} className="text-estate-lightText mr-1" />
                        <span className="text-estate-text text-sm">{property.area}</span>
                      </div>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="flex items-center text-estate-primary text-sm font-medium">
                        View
                        <ArrowUpRight size={14} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 bg-white text-estate-primary border-estate-primary/20 hover:bg-estate-primary hover:text-white" />
      <CarouselNext className="hidden md:flex -right-4 bg-white text-estate-primary border-estate-primary/20 hover:bg-estate-primary hover:text-white" />
    </Carousel>
  );
};

export default PropertyCarousel;
