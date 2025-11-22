import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Cube = ({ size = 60, color = "rgba(34, 211, 238, 0.4)" }) => {
  const half = size / 2;
  const faceStyle: React.CSSProperties = {
    width: size,
    height: size,
    position: 'absolute',
    border: `1px solid ${color}`,
    background: `radial-gradient(circle, ${color.replace('0.4)', '0.05)')} 0%, transparent 100%)`,
    backfaceVisibility: 'visible',
  };

  return (
    <div style={{ width: size, height: size, position: 'relative', transformStyle: 'preserve-3d' }}>
      <div style={{ ...faceStyle, transform: `translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }} />
      <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
    </div>
  );
};

export const Background3D: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const smoothY1 = useSpring(y1, { stiffness: 50, damping: 20 });
  const smoothY2 = useSpring(y2, { stiffness: 50, damping: 20 });
  const smoothY3 = useSpring(y3, { stiffness: 50, damping: 20 });

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950/80 z-0" />

      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        
        {/* Floating Cube 1 - Top Right */}
        <motion.div
          style={{ 
            position: 'absolute', 
            top: '15%', 
            right: '10%', 
            y: smoothY1,
            rotateX: rotate1,
            rotateY: rotate1,
          }}
          animate={{ 
            rotateZ: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, repeatType: "reverse" }
          }}
        >
          <Cube size={120} />
        </motion.div>

        {/* Floating Cube 2 - Bottom Left (Starts lower) */}
        <motion.div
          style={{ 
            position: 'absolute', 
            top: '60%', 
            left: '5%', 
            y: smoothY2,
            rotateX: rotate2,
          }}
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 25, repeat: Infinity, ease: "linear" 
          }}
        >
          <Cube size={80} color="rgba(168, 85, 247, 0.4)" />
        </motion.div>

        {/* Floating Cube 3 - Middle Deep */}
        <motion.div
          style={{ 
            position: 'absolute', 
            top: '40%', 
            right: '25%', 
            opacity: 0.5,
            scale: 0.5,
            y: smoothY3,
          }}
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 30, repeat: Infinity, ease: "linear" 
          }}
        >
          <Cube size={200} color="rgba(255, 255, 255, 0.1)" />
        </motion.div>

        {/* Floating Grid Plane */}
        <motion.div
            style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-10%',
                width: '120%',
                height: '600px',
                background: 'linear-gradient(transparent 0%, rgba(34, 211, 238, 0.03) 50%, transparent 100%)',
                backgroundSize: '40px 40px',
                backgroundImage: `
                    linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px)
                `,
                transform: 'rotateX(60deg)',
                opacity: 0.4,
            }}
        />
      </div>
    </div>
  );
};
