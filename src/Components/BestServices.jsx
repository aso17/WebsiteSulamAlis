import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import VideosBestService from "./VideosBestService";
import GaleryBestService from "./GaleryBestService";

const BestServices = () => {
  return (
    /* bg-surface dari config Anda (#F8FAFC) */
    <div className="relative w-full bg-surface text-center py-20 md:py-28 px-4 overflow-hidden">
      {/* Dekorasi Subtle menggunakan accent warna emas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <motion.div
        variants={FramerMotion("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mb-16"
      >
        {/* Menggunakan text-accent */}
        <span className="text-accent text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
          Exclusive Experience
        </span>

        {/* Menggunakan font-serif dari config */}
        <h2 className="text-3xl md:text-5xl font-serif italic text-primary mb-6">
          Layanan Terbaik Kami
        </h2>

        {/* Divider menggunakan gradient accent */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />

        <p className="text-primary/70 mt-2 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-sans font-light">
          Kami berkomitmen menghadirkan pengalaman perawatan terbaik dengan
          sentuhan profesional, teknologi modern, dan hasil alami yang
          memuaskan.
        </p>
      </motion.div>

      <div className="flex justify-center relative z-10">
        <VideosBestService />
      </div>

      <div className="relative z-10 mt-20 md:mt-28">
        <GaleryBestService />
      </div>
    </div>
  );
};

export default BestServices;
