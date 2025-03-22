
import { Property } from "@/types/property";

export const property7: Property = {
  id: 7,
  title: "Countryside Estate",
  address: "1010 Rural Route, Greenwich, CT 06830",
  price: 4250000,
  discountedPrice: 3950000,
  bedrooms: 6,
  bathrooms: 5.5,
  area: 6200,
  description: "Experience the ultimate in privacy and luxury with this magnificent countryside estate set on 5 acres. The grand entrance with a sweeping staircase leads to formal living and dining rooms ideal for entertaining. The gourmet kitchen features custom cabinetry, top-of-the-line appliances, and a large center island. The primary suite includes a sitting area, dual walk-in closets, and a sumptuous bathroom. Additional highlights include a library, home theater, wine cellar, and guest apartment. The grounds feature manicured gardens, a pool, tennis court, and a pond.",
  features: [
    "5-acre property",
    "Tennis court",
    "Swimming pool",
    "Wine cellar",
    "Home theater",
    "Library",
    "Guest apartment",
    "6-car garage"
  ],
  image: "/property-7-main.jpg",
  images: [
    "/property-7-main.jpg",
    "/property-7-living.jpg",
    "/property-7-kitchen.jpg",
    "/property-7-bedroom.jpg"
  ],
  type: "House",
  status: "For Sale",
  communityAmenities: [
    "Gated Community",
    "Equestrian Facilities",
    "Walking Trails",
    "Private Lake",
    "Clubhouse",
    "Golf Course"
  ],
  propertyInfo: {
    yearBuilt: 2015,
    lotSize: "5 acres",
    garageSpaces: 6,
    basement: true,
    heating: "Radiant",
    cooling: "Central Air"
  }
};
