// Client-only wrapper for framer-motion
// Prevents SSR issues with framer-motion imports

"use client";

import { motion as _motion } from "framer-motion";

// Re-export as motion (client-only)
export const motion = _motion;

// Named exports for common components
export const AnimatePresence = _motion.AnimatePresence;
export const motion.div = _motion.div;
export const motion.button = _motion.button;
export const motion.span = _motion.span;
export const motion.h1 = _motion.h1;
export const motion.h2 = _motion.h2;
export const motion.h3 = _motion.h3;
export const motion.p = _motion.p;
export const motion.a = _motion.a;
export const motion.img = _motion.img;
export const motion.path = _motion.path;
