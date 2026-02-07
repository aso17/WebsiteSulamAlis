import React from "react";
import { motion } from "framer-motion";
import TitleBanner from "../TitleBanner";
import FramerMotion from "../FramerMotion";
import BannerContactImg from "../../assets/images/BannerContact.webp";

const BannerContact = () => {
  return (
    /* pt-32 untuk Mobile & md:pt-48 untuk Desktop agar teks tidak tertutup navbar */
    <section className="relative bg-surface pt-32 pb-16 md:pt-48 md:pb-32 px-8 overflow-hidden">
      {/* ELEMEN DEKORATIF BACKGROUND */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/[0.03] rounded-l-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

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
              Get In Touch
            </span>
            <div className="w-16 h-[1px] bg-accent mx-auto lg:mx-0" />
          </div>

          <TitleBanner tipe="Kontak" className="mb-6" />

          <p className="text-primary/60 text-sm md:text-base font-light max-w-md mx-auto lg:mx-0 leading-relaxed italic">
            "Konsultasikan kecantikan impian Anda bersama para ahli kami yang
            berdedikasi."
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
          {/* Efek Frame Mewah */}
          <div className="absolute -inset-4 border border-accent/10 rounded-[2.5rem] md:block hidden pointer-events-none" />

          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 group">
            <img
              src={BannerContactImg}
              alt="Banner Contact - Rosidi Sulam Alis"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
              loading="lazy"
            />

            {/* Overlay Gradient Halus */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Aksesori Dekoratif Kecil */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default BannerContact;
