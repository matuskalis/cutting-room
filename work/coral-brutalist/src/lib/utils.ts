import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Motion design tokens (from research)
export const motion = {
  duration: {
    instant: "100ms",
    fast: "200ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
    accelerate: "cubic-bezier(0.4, 0.0, 1, 1)",
  },
} as const
