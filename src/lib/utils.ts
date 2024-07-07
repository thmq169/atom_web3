import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateAddress = (userAddr: string) => {
  return userAddr.slice(0, 5) + '...' + userAddr.slice(-5)
}
