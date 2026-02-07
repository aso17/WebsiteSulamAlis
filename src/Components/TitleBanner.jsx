import React from "react";
import { motion } from "framer-motion";

const konfigurasiJudul = {
  HeroAboutMe: {
    judul: "TENTANG KAMI",
    deskripsi:
      "Komitmen kami adalah menggabungkan seni dan ilmu dalam memberikan solusi kecantikan yang personal dan modern.",
  },
  Galeri: {
    judul: "GALERI KARYA",
    deskripsi:
      "Koleksi maha karya terbaik dan hasil perawatan eksklusif dari studio kami.",
  },
  Kontak: {
    judul: "HUBUNGI KAMI",
    deskripsi:
      "Silakan hubungi kami untuk konsultasi gratis dan reservasi layanan kecantikan Anda.",
  },
  SulamAlis: {
    judul: "SULAM ALIS",
    deskripsi:
      "Ciptakan alis indah, natural, dan presisi yang dirancang khusus sesuai karakter unik wajah Anda.",
  },
  HapusSulamAlis: {
    judul: "RETOUCH & REMOVAL",
    deskripsi:
      "Penghapusan sulam alis dengan teknik laser modern, minim rasa sakit, dan menjaga integritas kulit Anda.",
  },
  SulamBibir: {
    judul: "SULAM BIBIR",
    deskripsi:
      "Kembalikan warna bibir segar, sehat, dan tahan lama untuk penampilan yang selalu elegan.",
  },
  SulamEyeliner: {
    judul: "SULAM EYELINER",
    deskripsi:
      "Definisikan tatapan mata Anda agar lebih tegas, hidup, dan mempesona setiap saat.",
  },
  LaserRemoval: {
    judul: "LASER REMOVAL",
    deskripsi:
      "Teknologi medis modern untuk perawatan penghapusan tato dan sulam yang aman serta efektif.",
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

const TitleBanner = ({ tipe, className = "" }) => {
  // Fallback ke HeroAboutMe jika tipe tidak ditemukan
  const data = konfigurasiJudul[tipe] || konfigurasiJudul.HeroAboutMe;
  const { judul, deskripsi } = data;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Judul dengan Style Serif/Modern */}
      <div className="relative inline-block">
        <motion.h2
          className="text-4xl md:text-5xl font-serif italic text-primary leading-tight tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easing }}
        >
          {judul}
        </motion.h2>

        {/* Underline Emas Tipis & Mewah */}
        <motion.div
          className="absolute left-0 bottom-[-10px] h-[1px] bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        />
      </div>

      {/* Deskripsi dengan Font Light */}
      <motion.p
        className="text-primary/70 text-base md:text-lg leading-relaxed max-w-2xl font-light"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easing, delay: 0.6 }}
      >
        {deskripsi}
      </motion.p>
    </div>
  );
};

export default TitleBanner;
