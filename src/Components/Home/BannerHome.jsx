import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const banners = [
  {
    id: 1,
    baseName: "ImgBannerHome2",
    folder: "../../assets/images/OptimizeImage",
    alt: "Sulam Alis Profesional Jakarta",
    title: "PASTIKAN ANDA",
    subtitle: "Layanan Terbaik & Profesional",
    text: "Fasilitas modern dengan standar sterilisasi tinggi dan tren kecantikan terkini.",
  },
  {
    id: 2,
    baseName: "ImgBannerHome",
    folder: "../../assets/images/OptimizeImage",
    alt: "Perawatan Sulam Alis Natural",
    title: "UPGRADE PENAMPILAN",
    subtitle: "Sulam Alis Natural & Elegan",
    text: "Dapatkan hasil alami yang presisi, dirancang khusus sesuai karakter wajah Anda.",
  },
  {
    id: 3,
    baseName: "ImgBannerHome3",
    folder: "../../assets/images/OptimizeImage",
    alt: "Pilihan Para Artis",
    title: "TRUSTED BY CELEBRITIES",
    subtitle: "Rahasia Kecantikan Publik Figur",
    text: "Telah dipercaya oleh banyak artis papan atas untuk hasil sulam yang sempurna dan berkelas.",
  },
  {
    id: 4,
    baseName: "ImgBannerHome4",
    folder: "../../assets/images/OptimizeImage",
    alt: "Standard Internasional",
    title: "EXCLUSIVE QUALITY",
    subtitle: "Hasil Presisi Standar Dunia",
    text: "Sentuhan profesional yang memberikan efek wajah lebih segar dan proporsional sepanjang hari.",
  },
  // BANNER TAMBAHAN (ID: 5)
  {
    id: 5,
    baseName: "ImgBannerHome5",
    folder: "../../assets/images/OptimizeImage",
    alt: "Teknologi Kecantikan Modern",
    title: "MODERN TECHNOLOGY",
    subtitle: "Peralatan Canggih & Steril",
    text: "Kami menggunakan peralatan mutakhir dan tinta organik premium untuk keamanan dan kenyamanan Anda.",
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const BannerHome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentBanner = banners[index];

  return (
    <section className="relative w-full min-h-[80svh] md:h-screen overflow-hidden bg-primary flex items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 md:bg-primary/30 z-10" />
            <ResponsiveImage
              baseName={currentBanner.baseName}
              alt={currentBanner.alt}
              width={1920}
              height={1080}
              priority
              className="
                w-full h-full object-cover
                object-[center_25%] 
                md:object-[center_20%]
              "
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-6 sm:px-10 md:px-20 lg:px-32 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentBanner.id}`}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-full md:max-w-xl lg:max-w-2xl pt-10 md:pt-20"
          >
            {/* Tagline */}
            <motion.span
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 20 },
              }}
              className="text-accent text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-2 sm:mb-4 block"
            >
              {currentBanner.title}
            </motion.span>

            {/* Title */}
            <motion.h2
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.8, ease: easing, delay: 0.2 }}
              className="text-white font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:max-w-[95%]"
            >
              {currentBanner.subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 font-sans text-sm md:text-base lg:text-lg mt-4 sm:mt-6 max-w-[280px] md:max-w-md lg:max-w-lg font-light leading-relaxed"
            >
              {currentBanner.text}
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-12"
            >
              <a
                href="https://wa.me/6281279564211?text=Halo%20Admin%20Rosidi%20Sulam%20Alis%2C%20saya%20ingin%20konsultasi."
                className="w-full sm:w-auto bg-gradient-to-r from-accent via-accent to-accent-hover text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all"
              >
                Konsultasi Sekarang <Calendar size={16} />
              </a>

              <button className="flex items-center gap-2 text-white/90 hover:text-accent font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors group px-2">
                Lihat Galeri
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SLIDE INDICATOR */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              relative transition-all duration-500 rounded-full 
              ${index === i ? "w-8 md:w-10 h-2 bg-accent" : "w-2 h-2 bg-white/40 hover:bg-white/60"}
            `}
            aria-label={`Go to slide ${i + 1}`}
          >
            {index === i && (
              <motion.div
                layoutId="activeGlow"
                className="absolute inset-0 bg-accent blur-[4px] opacity-50"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BannerHome;
