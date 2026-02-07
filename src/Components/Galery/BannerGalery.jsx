import React from "react";
import { motion } from "framer-motion";
import TitleBanner from "../TitleBanner";
import ResponsiveImage from "../../assets/images/ResponsiveImage";
import FramerMotion from "../FramerMotion";

const BannerGalery = () => {
  return (
    /* pt-32 untuk Mobile & md:pt-48 untuk Desktop agar teks "GALERI" tidak tertutup navbar */
    <section className="relative bg-surface pt-32 pb-16 md:pt-48 md:pb-32 px-8 overflow-hidden">
      {/* ELEMEN DEKORATIF - Pola Garis Minimalis */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #B49411 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

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
            <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase block mb-2">
              Our Masterpieces
            </span>
            <div className="w-16 h-[1px] bg-accent mx-auto lg:mx-0" />
          </div>

          <TitleBanner tipe="Galeri" className="mb-6" />

          <p className="text-primary/60 text-sm md:text-base font-light max-w-md mx-auto lg:mx-0 leading-relaxed italic">
            "Seni yang memadukan presisi teknik dengan keindahan alami wajah
            Anda."
          </p>
        </motion.div>

        {/* BAGIAN GAMBAR (KANAN) */}
        <motion.div
          variants={FramerMotion("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 relative w-full max-w-2xl lg:max-w-none mx-auto"
        >
          {/* Efek Bingkai Artistik */}
          <div className="absolute -inset-4 border border-accent/10 rounded-[2.5rem] md:block hidden pointer-events-none" />

          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 group">
            <ResponsiveImage
              baseName="Teams2"
              alt="Galeri - Rosidi Sulam Alis"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
              width={1200}
              height={700}
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>

          {/* Label Kecil di Pojok Gambar */}
          <div className="absolute -bottom-4 -right-4 bg-white py-2 px-6 rounded-full shadow-lg border border-accent/10 z-20 md:block hidden">
            <p className="text-[10px] font-bold tracking-widest text-primary uppercase italic">
              Professional Team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerGalery;
