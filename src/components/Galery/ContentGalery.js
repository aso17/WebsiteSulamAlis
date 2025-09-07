import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";


// import "../StyleComponents/StyleContentGalery.css"; // ⬅️ di-comment, jangan dihapus

const ContentGalery = () => {
  return (
    <div className="ContentGalery px-4 py-8">
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-6"
      >
        <h4 className="text-xl font-semibold">Bersama Model & Artis</h4>
        <p className="text-gray-600">
          Rosidi Sulam Alis & Academy Terbukti Menjadi Pilihan Kita Semua
        </p>
      </motion.div>

      {/* Ganti Row & Col Bootstrap dengan Tailwind Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          variants={FramerMotion("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full"
        >
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/6x8iVx0UsIw?si=NSsIFYnAHomXo362"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </motion.div>

        <motion.div
          variants={FramerMotion("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full"
        >
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/5RZu7e4yH-8?si=6Zb1vdrpIN4E3sx2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </motion.div>

        <motion.div
          variants={FramerMotion("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full"
        >
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/wztpYzI_4UU?si=ko1-BKgBuFNHsKg3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentGalery;
