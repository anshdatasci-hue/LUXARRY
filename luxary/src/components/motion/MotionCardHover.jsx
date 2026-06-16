"use client";

import { m, useReducedMotion } from "framer-motion";

export default function MotionCardHover({ children, className }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
