import React from "react";
import { motion } from "framer-motion";
import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";
import FramerMotion from "../../FramerMotion";

const BannerHapusSulamAlis = () => {
  return (
    <section className="relative bg-surface pt-32 pb-16 md:pt-48 md:pb-32 px-8 overflow-hidden">
      {/* Dekorasi Background - Menggunakan nuansa yang senada dengan About Me */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/[0.03] rounded-l-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

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
              Advanced Laser Technology
            </span>
            <div className="w-12 h-[1px] bg-accent mx-auto lg:mx-0" />
          </div>

          <TitleBanner tipe="HapusSulamAlis" className="mb-8" />

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
          {/* Frame Artistik Dekorasif */}
          <div className="absolute -inset-4 border border-accent/10 rounded-[2.5rem] md:block hidden pointer-events-none" />

          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10">
            <ResponsiveImage
              baseName="BannerHapusSulamAlis"
              alt="Hapus Sulam Alis - Rosidi Sulam Alis"
              folder="../../../assets/images/OptimizeImage/"
              width={1200}
              height={600}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
              priority={true}
            />

            {/* Overlay Gradient halus */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerHapusSulamAlis;
