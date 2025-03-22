
import { Property } from "@/types/property";

export const property3: Property = {
  id: 3,
  title: "Coastal Dream Home",
  address: "789 Shoreline Rd, Malibu, CA 90265",
  price: 3950000,
  discountedPrice: 3750000,
  bedrooms: 5,
  bathrooms: 4.5,
  area: 4500,
  description: "Breathtaking oceanfront property with direct beach access and unobstructed views of the Pacific. This architectural masterpiece features walls of glass that showcase the ocean from every room. The main level offers seamless indoor-outdoor living with a gourmet kitchen, spacious living areas, and expansive deck. The primary suite occupies its own wing with a luxurious bathroom, walk-in closet, and private terrace. Additional features include a media room, home office, and guest suite. A rare opportunity to own a piece of paradise.",
  features: [
    "Direct beach access",
    "Heated infinity pool",
    "Outdoor kitchen",
    "Floor-to-ceiling windows",
    "Home automation system",
    "Solar panels",
    "Wine room",
    "Outdoor shower"
  ],
  image: "/property-3-main.jpg",
  images: [
    "/property-3-main.jpg",
    "/property-3-living.jpg",
    "/property-3-kitchen.jpg",
    "/property-3-bedroom.jpg"
  ],
  type: "House",
  status: "For Sale",
  communityAmenities: [
    "Private Beach",
    "Beach Club",
    "24/7 Security",
    "Community Dock",
    "Tennis Courts",
    "Golf Course"
  ],
  propertyInfo: {
    yearBuilt: 2020,
    lotSize: "0.8 acres",
    garageSpaces: 3,
    basement: false,
    heating: "Radiant",
    cooling: "Central Air"
  }
};
