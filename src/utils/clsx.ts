import { type ClassValue, clsx as clsxOriginal } from "clsx";
import { twMerge } from "tailwind-merge";

function clsx(...inputs: ClassValue[]) {
  return twMerge(clsxOriginal(inputs));
}

export default clsx;
