import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";

const ContentContact = () => {
  return (
    <div className="w-full py-24 px-8 bg-white flex justify-center items-center relative overflow-hidden">
      {/* Background Decor - Aksen halus agar tidak monoton */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        variants={FramerMotion("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-2xl bg-white border border-accent/10 rounded-[2.5rem] shadow-2xl shadow-primary/5 text-center p-12 md:p-16 relative z-10"
      >
        {/* Subtitle kecil */}
        <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
          Private Assistance
        </span>

        {/* Judul dengan font Serif khas studio */}
        <h2 className="text-3xl md:text-4xl font-serif italic text-primary mb-6">
          Reservasi & <span className="text-accent">Konsultasi</span>
        </h2>

        {/* Divider minimalis */}
        <div className="w-16 h-[1px] bg-accent/30 mx-auto mb-8" />

        <p className="text-primary/60 text-lg font-light mb-10 leading-relaxed max-w-md mx-auto">
          Dapatkan saran ahli untuk kecantikan Anda. Tim profesional kami siap
          membantu menjadwalkan kunjungan Anda dengan layanan prioritas.
        </p>

        {/* Tombol CTA dengan gaya yang sama dengan layanan lainnya */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <a
            href="https://wa.me/6281279564211?text=Halo%20Admin%20Rosidi%20Sulam%20Alis%2C%20saya%20ingin%20reservasi."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 overflow-hidden rounded-full bg-primary text-white transition-all duration-300 shadow-xl shadow-primary/20"
          >
            {/* Ikon WhatsApp Minimalis */}
            <svg
              className="w-5 h-5 fill-current relative z-10"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            <span className="relative z-10 font-medium tracking-widest text-xs uppercase">
              Chat via WhatsApp
            </span>

            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Jam Operasional kecil */}
        <p className="mt-8 text-[10px] text-primary/30 uppercase tracking-[0.2em]">
          Available: Monday — Saturday | 09.00 — 18.00
        </p>
      </motion.div>
    </div>
  );
};

export default ContentContact;
