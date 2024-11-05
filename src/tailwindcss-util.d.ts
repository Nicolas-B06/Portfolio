declare module 'tailwindcss/lib/util/flattenColorPalette';
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}