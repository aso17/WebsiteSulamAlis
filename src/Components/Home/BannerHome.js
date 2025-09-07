
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResponsiveImage from "../../assets/images/ResponsiveImage";
import "../StyleComponents/StyleHeroHome.css";

const banners = [
  {
    id: 1,
    baseName: "ImgBannerHome1",
    folder: "../../assets/images/OptimizeImage", // folder tempat gambar optimize kamu
    alt: "Sulam Alis Profesional Jakarta",
    title: "PASTIKAN ANDA",
    subtitle: "Mendapatkan Layanan Terbaik Kami",
    text: "Fasilitas Modern & Tren Terkini",
  },
  {
    id: 2,
    baseName: "ImgBannerHome",
    folder: "../../assets/images/OptimizeImage",
    alt: "Perawatan Sulam Alis Natural",
    title: "TINGKATKAN PENAMPILAN ANDA",
    subtitle: "Dengan Sulam Alis Profesional",
    text: "Hasil Alami, Fasilitas Modern & Teknik Terbaru",
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const BannerHome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  const currentBanner = banners[index];

  return (
    <div className="SectionHeroHome">
      <div className="BannerWrapper">
        {/* Caption */}
        <div className="CaptionContainer">
          <motion.h2
            className="CaptionTitle"
            key={`title-${currentBanner.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: easing }}
          >
            {currentBanner.title}
          </motion.h2>

          <motion.h3
            className="CaptionSubtitle"
            key={`subtitle-${currentBanner.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.2, ease: easing, delay: 0.3 }}
          >
            {currentBanner.subtitle}
          </motion.h3>

          <motion.p
            className="CaptionText"
            key={`text-${currentBanner.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.4, ease: easing, delay: 0.6 }}
          >
            {currentBanner.text}
          </motion.p>

          <motion.a
            href="https://wa.me/6281279564211?text=%20Halo?%20Admin%20Rosidi%20Sulam%20Alis"
            className="BtnCTA"
            key={`btn-${currentBanner.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.6, ease: easing, delay: 0.9 }}
          >
            Hubungi Sekarang
          </motion.a>
        </div>

        {/* Gambar */}
        <div className="ImageWrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ResponsiveImage
                baseName={currentBanner.baseName}
                alt={currentBanner.alt}
                width={1200}
                height={600}
                folder={currentBanner.folder}
                priority={index === 0} // Prioritas untuk banner pertama
                className="ImgBannerHome"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
