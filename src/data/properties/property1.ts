
import { Property } from "@/types/property";

export const property1: Property = {
  id: 1,
  title: "3 Spacious Bedrooms in Dubai",
  address: "Dubai",
  price: 1250000,
  discountedPrice: 1150000,
  bedrooms: 3,
  bathrooms: 3.5,
  area: 3200,
  description: "Discover modern luxury in this exquisite 3-bedroom townhouse at Reportage Hills. Designed for contemporary living, this spacious home boasts high-end finishes, panoramic windows, and breathtaking city views. The open-plan layout seamlessly connects stylish interiors with functional elegance, making it ideal for families and those seeking refined comfort.",
  features: [
    "Spacious Bedrooms – Three elegantly designed bedrooms with premium finishes.",
    "Bright & Airy Living Room – Panoramic windows flood the space with natural light.",
    "Gourmet Kitchen – Fully equipped with modern appliances and sleek cabinetry.",
    "Luxury Bathrooms – Three sophisticated bathrooms with high-end fixtures.",
    "Private Balcony – Enjoy stunning views of the city and lush surroundings.",
    "Dedicated Parking – Convenient parking space with easy access to amenities."
  ],
  image: "/4.webp",
  images: [
    "/4.webp",
    "/2.webp",
    "/3.webp",
    "/1.webp"
  ],
  type: "Villa",
  status: "For Sale",
  communityAmenities: [
    "Swimming Pool",
    "Fitness Center",
    "Children's Playground",
    "Tennis Courts",
    "Gated Community",
    "24/7 Security"
  ],
  propertyInfo: {
    yearBuilt: 2022,
    lotSize: "5,000 sq ft",
    garageSpaces: 2,
    basement: true,
    heating: "Central",
    cooling: "Central Air"
  }
};
