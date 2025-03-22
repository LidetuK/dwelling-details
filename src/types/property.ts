
export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  discountedPrice?: number;
  discountLabel?: string;
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
