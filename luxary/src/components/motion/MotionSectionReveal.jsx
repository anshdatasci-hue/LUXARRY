// "use client";

// import { m, useReducedMotion } from "framer-motion";

// export default function MotionSectionReveal({ children, className, delay = 0 }) {
//   const shouldReduceMotion = useReducedMotion();

//   if (shouldReduceMotion) {
//     return <div className={className}>{children}</div>;
//   }

//   return (
//     <m.div
//       className={className}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
//     >
//       {children}
//     </m.div>
//   );
// }

"use client";

export default function MotionSectionReveal({ children, className }) {
  return <div className={className}>{children}</div>;
}