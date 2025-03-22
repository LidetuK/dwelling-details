
import { Property } from "@/types/property";

export const property5: Property = {
  id: 5,
  title: "Historic Brownstone",
  address: "567 Heritage St, Boston, MA 02116",
  price: 1650000,
  discountedPrice: 1580000,
  bedrooms: 3,
  bathrooms: 2.5,
  area: 2400,
  description: "Own a piece of history with this meticulously restored brownstone in the heart of the city. Original architectural details like crown moldings, hardwood floors, and a marble fireplace are complemented by thoughtful modern updates. The chef's kitchen features custom cabinetry, professional-grade appliances, and a breakfast nook. The primary suite includes a luxurious bathroom with clawfoot tub and walk-in shower. A private garden offers a serene urban oasis. Steps from parks, dining, and cultural attractions.",
  features: [
    "Original hardwood floors",
    "Marble fireplace",
    "Crown moldings",
    "Private garden",
    "Custom kitchen cabinetry",
    "Wine storage",
    "Clawfoot tub",
    "High ceilings"
  ],
  image: "/property-5-main.jpg",
  images: [
    "/property-5-main.jpg",
    "/property-5-living.jpg",
    "/property-5-kitchen.jpg",
    "/property-5-bedroom.jpg"
  ],
  type: "House",
  status: "For Sale",
  communityAmenities: [
    "Historic District",
    "Community Gardens",
    "Local Shops",
    "Farmers Market",
    "Public Transportation",
    "Parks"
  ],
  propertyInfo: {
    yearBuilt: 1890,
    lotSize: "0.15 acres",
    garageSpaces: 0,
    basement: true,
    heating: "Forced Air",
    cooling: "Central Air"
  }
};
