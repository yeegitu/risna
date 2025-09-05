"use client";

import { motion } from "framer-motion";

export default function FloatingWordsModern() {
  const lines = [
    { text: "My Favourite Girl", size: "text-4xl md:text-5xl font-extrabold" },
    { text: "Risnawati", size: "text-3xl md:text-4xl font-bold" },
    { text: `${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`, size: "text-lg md:text-xl font-light" }
  ];

  return (
    <div className="mt-8 mb-[8rem] md:mb-[12rem] text-center space-y-3 z-10">
      {lines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3, type: "spring", stiffness: 100 }}
          className={`${line.size} text-white/80 drop-shadow-lg`}
        >
          {line.text}
        </motion.p>
      ))}
    </div>
  );
}
