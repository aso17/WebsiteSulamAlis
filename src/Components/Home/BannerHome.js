import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImgBannerHome1, ImgBannerHome2 } from "../../assets/images";
import "../StyleComponents/StyleHeroHome.css";

const banners = [
  {
    id: 1,
    img: ImgBannerHome1,
    alt: "Sulam Alis Profesional Jakarta",
    title: "PASTIKAN ANDA",
    subtitle: "Mendapatkan Layanan Terbaik Kami",
    text: "Fasilitas Modern & Tren Terkini",
  },
  {
    id: 2,
    img: ImgBannerHome2,
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
    }, 10000);
    return () => clearTimeout(timer);
  }, [index]);

  const currentBanner = banners[index];

  return (
    <div className="SectionHeroHome">
      <div className="BannerWrapper">
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

        {/* Gambar statis untuk index pertama agar LCP cepat */}
        {index === 0 ? (
          <img
            src={currentBanner.img}
            alt={currentBanner.alt}
            className="ImgBannerHome"
            loading="eager"
            decoding="async"
            width="1200"
            height="600"
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentBanner.id}
              src={currentBanner.img}
              alt={currentBanner.alt}
              className="ImgBannerHome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              width="1200"
              height="600"
              style={{ width: "100%", height: "auto" }}
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default BannerHome;
