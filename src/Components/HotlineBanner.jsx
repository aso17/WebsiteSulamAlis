import React from "react";
import { motion } from "framer-motion";

const HotlineBanner = () => {
  return (
    <div className="flex justify-center lg:justify-start">
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Efek Cahaya (Glow) di belakang tombol yang berdenyut */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-accent-hover/30 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />

        <motion.div
          className="relative px-8 py-3 bg-white/90 backdrop-blur-md border border-accent/20 rounded-full shadow-xl shadow-accent/5 cursor-default"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Titik Hijau Indikator Online/Aktif */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>

            <p className="text-[10px] md:text-[11px] font-bold text-primary uppercase tracking-[0.3em] whitespace-nowrap">
              Tetap Cantik <span className="text-accent mx-1">&</span> Sehat
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HotlineBanner;
