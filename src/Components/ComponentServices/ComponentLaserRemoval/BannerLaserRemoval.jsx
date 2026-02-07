import React from "react";
import { motion } from "framer-motion";
import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const BannerLaserRemoval = () => {
  return (
    /* pt-32 (mobile) & md:pt-48 (desktop) agar tidak tertutup navbar */
    <section className="relative bg-surface pt-32 pb-16 md:pt-48 md:pb-32 px-8 overflow-hidden">
      {/* DEKORASI BACKGROUND - Nuansa Tech/Clinical yang Mewah */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-cyan-500/[0.02] rounded-l-full pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* BAGIAN TEKS (KIRI) */}
        <motion.div
          variants={FramerMotion("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <div className="mb-4 inline-block">
            <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase block mb-2">
              Advanced Skin Solution
            </span>
            <div className="w-12 h-[1px] bg-accent mx-auto lg:mx-0" />
          </div>

          <TitleBanner tipe="LaserRemoval" className="mb-8" />

          <div className="mt-10">
            <HotlineBanner />
          </div>
        </motion.div>

        {/* BAGIAN GAMBAR (KANAN) */}
        <motion.div
          variants={FramerMotion("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto"
        >
          {/* Frame Dekorasi - Double Border untuk kesan canggih */}
          <div className="absolute -inset-4 border border-accent/10 rounded-[2.5rem] md:block hidden pointer-events-none" />
          <div className="absolute -inset-2 border border-cyan-500/5 rounded-[2.5rem] md:block hidden pointer-events-none" />

          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 bg-white">
            <ResponsiveImage
              baseName="BannerSulamRemoval"
              alt="Laser Removal - Rosidi Sulam Alis"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
              priority={true}
            />

            {/* Overlay Gradient Soft Tech */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-cyan-500/5 pointer-events-none" />
          </div>

          {/* Indikator Cahaya kecil untuk kesan "Laser" */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400/20 blur-2xl rounded-full animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default BannerLaserRemoval;
