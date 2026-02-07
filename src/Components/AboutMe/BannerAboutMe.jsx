import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import TitleBanner from "../TitleBanner";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const BannerAboutMe = () => {
  return (
    /* PERBAIKAN: 
       - pt-32 (128px) pada mobile agar konten turun di bawah navbar.
       - md:pt-48 (192px) pada desktop untuk estetika yang lebih lega.
    */
    <section className="relative bg-surface pt-32 pb-20 md:pt-48 md:pb-32 px-8 overflow-hidden">
      {/* ELEMEN DEKORATIF BACKGROUND */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] rounded-l-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* BAGIAN TEKS (KIRI) */}
        <motion.div
          variants={FramerMotion("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left z-10"
        >
          {/* Label Kecil di Atas Judul */}
          <div className="mb-6 inline-block">
            <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase block mb-2">
              The Artist Behind
            </span>
            <div className="w-10 h-[1px] bg-accent mx-auto md:mx-0" />
          </div>

          <div className="prose prose-stone max-w-none">
            <TitleBanner tipe="HeroAboutMe" />
          </div>

          <p className="mt-8 text-primary/70 font-light leading-relaxed text-sm md:text-lg max-w-xl mx-auto md:mx-0">
            Berawal dari gairah dalam seni kecantikan, kami berkomitmen untuk
            memberikan hasil sulam yang presisi, natural, dan sesuai dengan
            karakter unik setiap wajah pelanggan kami.
          </p>

          {/* Statistik Experience */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-serif italic text-primary">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-accent font-bold">
                Years Experience
              </p>
            </div>
            <div className="w-[1px] h-10 bg-primary/10 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="text-2xl font-serif italic text-primary">5k+</p>
              <p className="text-[10px] uppercase tracking-widest text-accent font-bold">
                Happy Clients
              </p>
            </div>
          </div>
        </motion.div>

        {/* BAGIAN GAMBAR (KANAN) */}
        <motion.div
          variants={FramerMotion("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto"
        >
          {/* Bingkai Luar Dekoratif */}
          <div className="absolute -inset-4 border border-accent/20 rounded-[2rem] md:block hidden pointer-events-none" />

          <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10">
            <ResponsiveImage
              baseName="Teams1"
              alt="Tentang Kami - Rosidi Sulam Alis"
              width={800}
              height={1000}
              folder="../../assets/images/AboutMe/"
              className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
            />

            {/* Badge Overlay Gelas (Glassmorphism) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
              <p className="text-[10px] text-accent font-bold uppercase tracking-widest text-center">
                Certified Professional Academy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerAboutMe;
