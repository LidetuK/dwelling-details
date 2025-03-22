
import { Property } from "@/types/property";

export const property4: Property = {
  id: 4,
  title: "Mountain View Chalet",
  address: "321 Alpine Way, Aspen, CO 81611",
  price: 2750000,
  discountedPrice: 2550000,
  bedrooms: 4,
  bathrooms: 3,
  area: 3800,
  description: "Escape to this luxurious mountain retreat offering breathtaking panoramic views. This custom-built chalet combines rustic charm with modern amenities, featuring vaulted ceilings with exposed beams, a stone fireplace, and large windows that frame the mountain scenery. The gourmet kitchen opens to a spacious great room perfect for entertaining. Each bedroom provides a private sanctuary with stunning views. Outside, enjoy the hot tub, fire pit, and expansive deck. Minutes from world-class skiing and hiking trails.",
  features: [
    "Stone fireplace",
    "Hot tub",
    "Heated floors",
    "Ski room",
    "Wrap-around deck",
    "Fire pit",
    "Wood-burning pizza oven",
    "Game room"
  ],
  image: "/property-4-main.jpg",
  images: [
    "/property-4-main.jpg",
    "/property-4-living.jpg",
    "/property-4-kitchen.jpg",
    "/property-4-bedroom.jpg"
  ],
  type: "House",
  status: "For Sale",
  communityAmenities: [
    "Ski-in/Ski-out Access",
    "Private Shuttle",
    "Club House",
    "Heated Trails",
    "On-site Management",
    "Concierge Services"
  ],
  propertyInfo: {
    yearBuilt: 2017,
    lotSize: "0.6 acres",
    garageSpaces: 2,
    basement: true,
    heating: "Radiant",
    cooling: "None"
  }
};
