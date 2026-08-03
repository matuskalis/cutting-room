import { Variants } from "framer-motion"

// Fade in with upward motion
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// Fade in with larger upward motion (for hero sections)
export const fadeInUpLarge: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// Container for staggered children
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Item variant for staggered animations
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

// Horizontal slide in from left
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

// Horizontal slide in from right
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

// Scale up with fade
export const scaleUp: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

// Clip-path reveal from bottom
export const clipRevealUp: Variants = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0
  },
  animate: {
    clipPath: "inset(0 0 0 0)",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// Clip-path reveal from right
export const clipRevealRight: Variants = {
  initial: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0
  },
  animate: {
    clipPath: "inset(0 0 0 0)",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// Stagger container with clip-path children
export const clipStaggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Clip-path reveal with staggered entrance (cards)
export const clipRevealStaggerItem: Variants = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
    y: 30,
    opacity: 0,
  },
  animate: {
    clipPath: "inset(0 0 0 0)",
    y: 0,
    opacity: 1,
    transition: {
      clipPath: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.6 },
    },
  },
}
