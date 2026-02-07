import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";

const ContentGalery = () => {
  const videos = [
    { id: "6x8iVx0UsIw?si=NSsIFYnAHomXo362", delay: 0.1 },
    { id: "5RZu7e4yH-8?si=6Zb1vdrpIN4E3sx2", delay: 0.2 },
    { id: "wztpYzI_4UU?si=ko1-BKgBuFNHsKg3", delay: 0.3 },
  ];

  return (
    <div className="w-full px-8 py-24 max-w-7xl mx-auto bg-white">
      {/* HEADING SECTION */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-3">
          Trusted by Figures
        </span>
        <h4 className="text-3xl md:text-4xl font-serif italic text-primary mb-4">
          Bersama <span className="text-accent">Model & Artis</span>
        </h4>
        <div className="w-20 h-[1px] bg-accent/30 mx-auto mb-6" />
        <p className="text-primary/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Rosidi Sulam Alis & Academy terbukti menjadi pilihan utama bagi mereka
          yang mengutamakan kualitas dan hasil yang sempurna.
        </p>
      </motion.div>

      {/* VIDEO GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            variants={FramerMotion("up", video.delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Dekorasi Frame di belakang video */}
            <div className="absolute -inset-2 bg-accent/5 rounded-[1.5rem] scale-95 group-hover:scale-100 transition-transform duration-500 pointer-events-none" />

            <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl shadow-primary/5 bg-black aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`YouTube video player ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Caption kecil di bawah video */}
            <div className="mt-4 text-center">
              <div className="w-8 h-[1px] bg-accent/30 mx-auto mb-2" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40 font-bold">
                Exclusive Testimony {index + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContentGalery;
