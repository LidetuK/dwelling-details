
import { Property } from "@/types/property";

export const property6: Property = {
  id: 6,
  title: "Luxury Waterfront Condo",
  address: "789 Harbor View, Miami, FL 33131",
  price: 1150000,
  discountedPrice: 1050000,
  bedrooms: 3,
  bathrooms: 2,
  area: 1950,
  description: "Embrace the Miami lifestyle in this stunning waterfront condo with breathtaking bay views. Floor-to-ceiling windows and an expansive balcony create a seamless connection to the water. The open floor plan features porcelain floors, designer lighting, and a sleek kitchen with European cabinetry and quartz countertops. The primary suite offers a spa-like bathroom and walk-in closet. Building amenities include infinity pool, fitness center, spa, and concierge services. Walking distance to top restaurants and shopping.",
  features: [
    "Infinity pool",
    "Fitness center",
    "Spa",
    "Concierge service",
    "Private balcony",
    "Floor-to-ceiling windows",
    "European cabinetry",
    "Boat slips available"
  ],
  image: "/property-6-main.jpg",
  images: [
    "/property-6-main.jpg",
    "/property-6-living.jpg",
    "/property-6-kitchen.jpg",
    "/property-6-bedroom.jpg"
  ],
  type: "Condo",
  status: "For Sale",
  communityAmenities: [
    "Marina Access",
    "Infinity Pool",
    "Fitness Center",
    "Private Beach",
    "Tennis Courts",
    "Valet Parking"
  ],
  propertyInfo: {
    yearBuilt: 2019,
    lotSize: "N/A",
    garageSpaces: 2,
    basement: false,
    heating: "Central",
    cooling: "Central Air"
  }
};
