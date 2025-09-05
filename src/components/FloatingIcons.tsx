"use client";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const romanticIcons = [
  { Icon: Heart, color: "text-rose-400", size: 28 },
  { Icon: Sparkles, color: "text-pink-300", size: 24 },
  { Icon: Star, color: "text-amber-300", size: 26 },
  { Icon: Moon, color: "text-purple-300", size: 25 },
  { Icon: Heart, color: "text-red-400", size: 30 },
  { Icon: Sparkles, color: "text-fuchsia-300", size: 22 },
  { Icon: Sun, color: "text-orange-300", size: 27 },
  { Icon: Star, color: "text-yellow-200", size: 24 },
];

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Gradient overlay for dreamy effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/20 via-transparent to-purple-50/20" />
      
      {romanticIcons.map(({ Icon, color, size }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} drop-shadow-lg`}
          style={{
            left: `${(i * 12.5) % 100}%`,
            filter: "drop-shadow(0 0 8px rgba(255, 182, 193, 0.3))",
          }}
          initial={{ 
            y: "110vh", 
            opacity: 0, 
            scale: 0.3,
            rotate: -180 
          }}
          animate={{ 
            y: "-15vh", 
            opacity: [0, 0.8, 0.9, 0.7, 0],
            scale: [0.3, 1, 1.1, 0.9, 0.4],
            rotate: 360,
            x: [0, 30, -20, 40, -10, 0]
          }}
          transition={{
            duration: 12 + (i * 2),
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Additional floating hearts with pulse effect */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute text-rose-300/40"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${20 + (i * 10)}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            rotate: 360
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut"
          }}
        >
          <Heart size={16} fill="currentColor" />
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`twinkle-${i}`}
          className="absolute text-yellow-200/50"
          style={{
            left: `${10 + (i * 11)}%`,
            top: `${30 + (i * 8)}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        >
          <Sparkles size={12} />
        </motion.div>
      ))}
    </div>
  );
}