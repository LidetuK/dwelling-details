
import { useState } from "react";

interface PropertyImageGalleryProps {
  images: string[];
  title: string;
}

const PropertyImageGallery = ({ images, title }: PropertyImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0] || "");

  return (
    <div className="container mx-auto px-4 md:px-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 rounded-xl overflow-hidden property-image-container">
          <img 
            src={selectedImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"} 
            alt={title} 
            className="w-full h-full object-cover max-h-[500px]"
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {images.slice(0, 4).map((image, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden cursor-pointer property-image-container ${
                selectedImage === image ? "ring-2 ring-estate-primary" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image || `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop&crop=center`} 
                alt={`${title} - Image ${index + 1}`} 
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyImageGallery;
