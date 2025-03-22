export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  discountedPrice?: number;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet
  description: string;
  features: string[];
  image: string;
  images: string[];
  type: 'House' | 'Apartment' | 'Condo' | 'Villa';
  status: 'For Sale' | 'For Rent';
  communityAmenities?: string[];
  propertyInfo?: {
    yearBuilt?: number;
    lotSize?: string;
    garageSpaces?: number;
    basement?: boolean;
    heating?: string;
    cooling?: string;
    [key: string]: any;
  };
}

export const properties: Property[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];
