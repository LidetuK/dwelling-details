
import { Property } from "@/types/property";

export const property2: Property = {
  id: 2,
  title: "Urban Luxury Apartment",
  address: "456 Downtown Ave, New York, NY 10013",
  price: 850000,
  discountedPrice: 799000,
  bedrooms: 2,
  bathrooms: 2,
  area: 1800,
  description: "Live in the heart of the city in this sophisticated urban apartment with skyline views. Recently renovated with designer touches and premium materials, this home offers the perfect blend of comfort and style. The chef's kitchen features marble countertops and high-end appliances. Both bedrooms include en-suite bathrooms and generous closet space. Building amenities include 24-hour doorman, fitness center, and rooftop lounge. Steps from top restaurants, shopping, and transportation.",
  features: [
    "24-hour doorman",
    "Fitness center",
    "Rooftop lounge",
    "Private balcony",
    "Floor-to-ceiling windows",
    "Central air conditioning",
    "In-unit laundry",
    "Pet friendly"
  ],
  image: "/property-2-main.jpg",
  images: [
    "/property-2-main.jpg",
    "/property-2-living.jpg",
    "/property-2-kitchen.jpg",
    "/property-2-bedroom.jpg"
  ],
  type: "Apartment",
  status: "For Sale",
  communityAmenities: [
    "Rooftop Garden",
    "Resident Lounge",
    "Package Service",
    "Concierge Service",
    "Bike Storage",
    "Pet Spa"
  ],
  propertyInfo: {
    yearBuilt: 2018,
    lotSize: "N/A",
    garageSpaces: 1,
    basement: false,
    heating: "Forced Air",
    cooling: "Central Air"
  }
};
