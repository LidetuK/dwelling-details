
import { Property } from "@/types/property";

export const property8: Property = {
  id: 8,
  title: "Desert Modern Oasis",
  address: "888 Canyon View, Scottsdale, AZ 85262",
  price: 1850000,
  discountedPrice: 1750000,
  bedrooms: 3,
  bathrooms: 3.5,
  area: 3100,
  description: "This architectural gem combines indoor and outdoor living in perfect harmony. Designed to showcase the desert landscape, the home features walls of glass, soaring ceilings, and a flowing floor plan. The sleek kitchen includes custom cabinetry and high-end appliances. Each bedroom serves as a private retreat with en-suite bathrooms. The resort-style backyard offers a negative-edge pool, spa, outdoor kitchen, and fire pit, all surrounded by breathtaking mountain views. Smart home technology throughout. A true desert sanctuary.",
  features: [
    "Negative-edge pool",
    "Outdoor kitchen",
    "Fire pit",
    "Smart home technology",
    "Mountain views",
    "En-suite bathrooms",
    "Custom lighting",
    "Water feature"
  ],
  image: "/property-8-main.jpg",
  images: [
    "/property-8-main.jpg",
    "/property-8-living.jpg",
    "/property-8-kitchen.jpg",
    "/property-8-bedroom.jpg"
  ],
  type: "House",
  status: "For Sale",
  communityAmenities: [
    "Desert Botanical Garden",
    "Hiking Trails",
    "Golf Course",
    "Community Pool",
    "Fitness Center",
    "Tennis Courts"
  ],
  propertyInfo: {
    yearBuilt: 2021,
    lotSize: "0.75 acres",
    garageSpaces: 3,
    basement: false,
    heating: "Forced Air",
    cooling: "Central Air"
  }
};
