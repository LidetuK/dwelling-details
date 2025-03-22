
import { Property } from "@/types/property";

export const property1: Property = {
  id: 1,
  title: "Three Spacious Bedrooms in Dubai",
  address: "Dubai",
  price: 423941.00,
  discountedPrice: 423941.00, // Keeping it a number
  discountLabel: "40% : 423,941.05 KES for cash only", // Updated currency
  bedrooms: 3,
  bathrooms: 3.5,
  area: 3200,
  description:
    "Discover modern luxury in this exquisite 3-bedroom townhouse at Reportage Hills. Designed for contemporary living, this spacious home boasts high-end finishes, panoramic windows, and breathtaking city views. The open-plan layout seamlessly connects stylish interiors with functional elegance, making it ideal for families and those seeking refined comfort.",
  features: [
    "Spacious Bedrooms – Three elegantly designed bedrooms with premium finishes.",
    "Bright & Airy Living Room – Panoramic windows flood the space with natural light.",
    "Gourmet Kitchen – Fully equipped with modern appliances and sleek cabinetry.",
    "Luxury Bathrooms – Three sophisticated bathrooms with high-end fixtures.",
    "Private Balcony – Enjoy stunning views of the city and lush surroundings.",
    "Dedicated Parking – Convenient parking space with easy access to amenities.",
  ],
  image: "/1.webp",
  images: [
    "/1.webp", 
    "/2.webp", 
    "/3.webp", 
    "/4.webp"
  ],
  type: "Villa",
  status: "For Sale",
  communityAmenities: [
    "Resort-Style Pools – Luxury swimming pools with serene relaxation areas.",
    "State-of-the-Art Gym – Fully equipped fitness center for an active lifestyle.",
    "Scenic Gardens & Walking Trails – Beautifully landscaped spaces for leisure.",
    "Children's Play Areas – Safe and engaging play zones for families.",
    "Retail & Dining – Shops and fine dining cafés within the community.",
    "24/7 Security – Round-the-clock surveillance for peace of mind.",
    "Prime Location – Easy access to major roads and key Dubai landmarks.",
  ],
};
