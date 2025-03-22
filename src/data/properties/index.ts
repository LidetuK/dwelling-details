
import { Property } from "@/types/property";
import { property1 } from "./property1";
import { property2 } from "./property2";
import { property3 } from "./property3";
import { property4 } from "./property4";
import { property5 } from "./property5";
import { property6 } from "./property6";
import { property7 } from "./property7";


// Re-export the Property type
export type { Property };

// Create and export the properties array
export const properties: Property[] = [
  property1,
  property2,
  property3,
  property4,
  property5,
  property6,
  property7
 
];
