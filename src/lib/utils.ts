import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely — clsx resolves conditionals, twMerge
 * resolves conflicts (e.g. "p-4 p-6" -> only "p-6" survives). This is the
 * standard shadcn/ui convention (lib/utils.ts, exporting `cn`); every
 * styled component in this system imports from here.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}