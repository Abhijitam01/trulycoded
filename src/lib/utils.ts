import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BOOK_INTRO_CALL_URL = "https://cal.com/abhijitamdubey/30min";

export const openIntroCall = () => {
  if (typeof window !== "undefined") {
    window.open(BOOK_INTRO_CALL_URL, "_blank", "noopener,noreferrer");
  }
};
