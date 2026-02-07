import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const banners = [
  {
    id: 1,
    baseName: "ImgBannerHome1",
    folder: "../../assets/images/OptimizeImage",
    alt: "Sulam Alis Profesional Jakarta",
    title: "PASTIKAN ANDA",
    subtitle: "Layanan Terbaik & Profesional",
    text: "Fasilitas Modern dengan standar sterilisasi tinggi dan tren kecantikan terkini.",
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
    <section className="relative w-full h-screen overflow-hidden bg-primary">
      {/* BACKGROUND IMAGE & OVERLAY */}
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
            <div className="absolute inset-0 bg-primary/40 z-10" />
            <ResponsiveImage
              baseName={currentBanner.baseName}
              alt={currentBanner.alt}
              width={1920}
              height={1080}
              folder={currentBanner.folder}
              priority={true}
              className="w-full h-full object-cover object-center md:object-[center_20%]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-20 container mx-auto h-full px-8 md:px-20 lg:px-32 flex flex-col justify-start items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentBanner.id}`}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-full md:max-w-xl lg:max-w-2xl pt-32 md:pt-44 lg:pt-52"
          >
            {/* Tagline */}
            <motion.span
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 20 },
              }}
              className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
            >
              {currentBanner.title}
            </motion.span>

            {/* Judul Utama */}
            <motion.h2
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.8, ease: easing, delay: 0.2 }}
              className="text-white font-serif italic text-4xl md:text-5xl lg:text-7xl leading-[1.1] md:max-w-[90%]"
            >
              {currentBanner.subtitle}
            </motion.h2>

            {/* Deskripsi */}
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 font-sans text-sm md:text-base lg:text-lg mt-6 max-w-sm md:max-w-md lg:max-w-lg font-light leading-relaxed"
            >
              {currentBanner.text}
            </motion.p>

            {/* Tombol Aksi */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 md:gap-12 lg:gap-16 font-sans"
            >
              <a
                href="https://wa.me/6281279564211"
                className="bg-gradient-to-r from-accent via-accent to-accent-hover text-white px-8 md:px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3 shadow-[0_10px_30px_rgba(197,163,88,0.2)] hover:brightness-110 active:scale-95 transition-all"
              >
                Konsultasi Sekarang <Calendar size={16} />
              </a>

              <button className="flex items-center gap-2 text-white/90 hover:text-accent font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors group">
                Lihat Galeri{" "}
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SLIDE INDICATORS - PINDAH KE TENGAH BAWAH */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-1 transition-all duration-500 rounded-full overflow-hidden bg-white/20 w-12"
          >
            {index === i && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-accent"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BannerHome;
