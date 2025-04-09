import { ProductDemo } from "./products/interfaces";

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp?: Date;
  products?: ProductDemo[];
}
