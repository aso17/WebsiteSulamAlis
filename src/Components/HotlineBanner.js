import React from "react";
import { motion } from "framer-motion";
import "./StyleComponents/StyleHotlineBanner.css";

const HotlineBanner = () => {
  return (
    <motion.div
      className="HotlineBanner"
      initial={{ scale: 0, opacity: 0 }} // kondisi awal: mengecil & transparan
      animate={{ scale: [1, 1.1, 1], opacity: 1 }} // animasi: membesar sedikit lalu kembali normal
      transition={{
        duration: 2, // durasi animasi
        ease: "easeInOut", // pola pergerakan halus
        repeat: Infinity, // animasi berulang terus
        repeatType: "mirror", // bolak-balik
      }}
    >
      <p>TETAP CANTIK & SEHAT</p>
    </motion.div>
  );
};

export default HotlineBanner;
