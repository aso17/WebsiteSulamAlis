import React from "react";
import { motion } from "framer-motion";
import "./StyleComponents/StyleTitleBanner.css";

const konfigurasiJudul = {
  HeroAboutMe: {
    judul: "TENTANG KAMI",
    deskripsi:
      "Komitmen kami adalah menggabungkan seni dan ilmu dalam memberikan solusi kecantikan yang personal dan modern.",
  },
  Galeri: {
    judul: "GALERI",
    deskripsi: "Menampilkan Artis dan Model Indonesia",
  },
  Kontak: {
    judul: "KONTAK",
    deskripsi: "Dapatkan Konsultasi Gratis",
  },
  SulamAlis: {
    judul: "SULAM ALIS",
    deskripsi: "Pilihan Terbaik untuk Kebutuhan Anda",
  },
  SulamBibir: {
    judul: "SULAM BIBIR",
    deskripsi: "Bibir Sesuai Warna yang Anda Inginkan",
  },
  SulamEyeliner: {
    judul: "SULAM EYELINER",
    deskripsi: "Mata Tampak Lebih Indah dan Natural",
  },
  LaserRemoval: {
    judul: "LASER REMOVAL",
    deskripsi: "Perawatan Kulit dengan Teknologi Canggih",
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

const TitleBanner = ({ tipe }) => {
  const { judul, deskripsi } = konfigurasiJudul[tipe] || konfigurasiJudul.LaserRemoval;

  return (
    <div className="TitleBannerWrapper">
      <motion.div
        className="TitleBanner"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easing }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easing }}
        >
          {judul}
        </motion.h2>
      </motion.div>

      <motion.div
        className="TitleBannerDesc"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: easing, delay: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: easing, delay: 0.5 }}
        >
          {deskripsi}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TitleBanner;
