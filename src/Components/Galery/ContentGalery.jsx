import React from "react";
import { motion } from "framer-motion";
import { Instagram, Star, ShieldCheck, Sparkles, Award } from "lucide-react";
import FramerMotion from "../FramerMotion";

const ContentGalery = () => {
  const trustPoints = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Sterilized Equipment" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Premium Organic Ink" },
    { icon: <Award className="w-5 h-5" />, text: "Certified Artist" },
    { icon: <Star className="w-5 h-5" />, text: "Natural Results" },
  ];

  const videos = [
    {
      id: "6x8iVx0UsIw",
      name: "Transformation Result", // Fokus pada hasil
      service: "Premium Eyebrow",
      delay: 0.1,
    },
    {
      id: "5RZu7e4yH-8",
      name: "Laser Technology", // Fokus pada teknologi/proses
      service: "Laser Tattoo Removal",
      delay: 0.2,
    },
    {
      id: "wztpYzI_4UU",
      name: "Correction Procedure", // Fokus pada solusi masalah
      service: "Eyebrow Laser Correction",
      delay: 0.3,
    },
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
        <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase block mb-3">
          The Art of Beauty
        </span>
        <h4 className="text-3xl md:text-5xl font-serif italic text-primary mb-4">
          Celebrity <span className="text-accent">Experience</span>
        </h4>
        <div className="w-20 h-[1.5px] bg-accent/40 mx-auto mb-8" />

        {/* TAMBAHAN 1: TRUST POINTS (Agar tidak kosong) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-primary/40">
              <span className="text-accent">{point.icon}</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">
                {point.text}
              </span>
            </div>
          ))}
        </div>

        <p className="text-primary/60 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Kualitas yang diakui oleh para profesional. Temukan transformasi
          sempurna bersama tangan ahli kami yang telah dipercaya oleh figur
          publik ternama.
        </p>
      </motion.div>

      {/* VIDEO GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mb-20">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            variants={FramerMotion("up", video.delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-3 bg-accent/5 rounded-[2rem] scale-95 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

            <div className="relative overflow-hidden rounded-[1.8rem] shadow-2xl shadow-primary/10 bg-black aspect-[9/16] md:aspect-video">
              <iframe
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                title={video.name}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-6 text-center">
              <h5 className="text-primary font-serif italic text-xl mb-1">
                {video.name}
              </h5>
              <p className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold">
                {video.service}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TAMBAHAN 2: MINI BANNER / STATS (Agar lebih padat) */}
      <motion.div
        variants={FramerMotion("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="bg-primary rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
      >
        {/* Efek Kilau Latar Belakang */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] -ml-32 -mb-32" />

        <h4 className="text-white font-serif italic text-2xl md:text-4xl mb-4 relative z-10">
          Ready for Your Own Transformation?
        </h4>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10 relative z-10">
          Bergabunglah dengan ribuan klien yang telah mendapatkan rasa percaya
          diri baru melalui sentuhan tangan Rosidi Sulam Alis.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
          <a
            href="https://instagram.com/rosidisulamalisjakarta"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full text-xs font-bold tracking-widest uppercase hover:scale-105 transition-all shadow-lg shadow-accent/20"
          >
            <Instagram size={18} /> Explore Instagram
          </a>
          <div className="text-white/40 hidden md:block">|</div>
          <div className="flex items-center gap-4 text-white">
            <div className="text-left">
              <p className="text-xl font-serif italic leading-none">10k+</p>
              <p className="text-[8px] uppercase tracking-widest text-white/40">
                Happy Clients
              </p>
            </div>
            <div className="text-left border-l border-white/10 pl-4">
              <p className="text-xl font-serif italic leading-none">15+</p>
              <p className="text-[8px] uppercase tracking-widest text-white/40">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentGalery;
