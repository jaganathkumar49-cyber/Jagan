import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  direction = "up",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const getHiddenVariant = () => {
    switch(direction) {
      case "left": return { opacity: 0, x: -100, y: 0, filter: "blur(8px)" };
      case "right": return { opacity: 0, x: 100, y: 0, filter: "blur(8px)" };
      case "down": return { opacity: 0, y: -75, x: 0, filter: "blur(8px)" };
      case "up": 
      default: return { opacity: 0, y: 75, x: 0, filter: "blur(8px)" };
    }
  };

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={{
          hidden: getHiddenVariant(),
          visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  );
};