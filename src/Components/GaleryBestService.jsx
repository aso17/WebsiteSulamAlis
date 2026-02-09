import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResponsiveImage from "../assets/images/ResponsiveImage";

const images = [
  { baseName: "Artis_Nikita_Mirzani", alt: "Nikita Mirzani" },
  { baseName: "Dr_Richard_lee", alt: "Dr. Richard Lee" },
  { baseName: "Artis_Ghea_Youbi", alt: "Ghea Youbi" },
  { baseName: "Artis_Dinar_candy", alt: "Dinar Candy" },
  { baseName: "Artis_Nathalie_Holscher", alt: "Nathalie Holscher" },
  { baseName: "Artis_Angel_Karamoy", alt: "Angel Karamoy" },
  { baseName: "Artis_Afdhal", alt: "Afdhal" },
];

const SliderImage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(40);
  const [trackWidth, setTrackWidth] = useState(0);
  const x = useMotionValue(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth;
      setTrackWidth(width);
      const distanceToTravel = width / 2;
      const isMobile = window.innerWidth < 768;
      const baseSpeed = isMobile ? 25 : 45;
      setDuration(distanceToTravel / baseSpeed);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (trackWidth > 0) {
        const currentX = Math.abs(latest) % (trackWidth / 2);
        const index = Math.floor((currentX / (trackWidth / 2)) * images.length);
        if (index !== activeIndex) setActiveIndex(index);
      }
    });
    return () => unsubscribe();
  }, [x, trackWidth, activeIndex]);

  useEffect(() => {
    if (!isPaused && trackWidth > 0) {
      controls.start({
        x: `-${trackWidth / 2}px`,
        transition: { duration: duration, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, duration, controls, trackWidth]);

  // FIX: Fungsi navigasi manual menggunakan fungsi 'animate' langsung ke MotionValue
  const handleManualNav = (direction) => {
    setIsPaused(true); // Jeda animasi otomatis
    const shiftAmount = direction === "next" ? -400 : 400;
    const targetX = x.get() + shiftAmount;

    animate(x, targetX, {
      duration: 0.6,
      ease: "easeOut",
      onComplete: () => {
        // Berikan delay kecil sebelum melanjutkan auto-scroll
        setTimeout(() => setIsPaused(false), 1000);
      },
    });
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-surface py-12 md:py-28 group/slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* HEADER */}
      <div className="container mx-auto px-8 mb-8 md:mb-16 text-center">
        <span className="text-accent text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">
          Exclusive Portofolio
        </span>
        <h3 className="text-primary font-serif italic text-2xl md:text-4xl mt-2">
          The Gallery
        </h3>
      </div>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:flex absolute inset-0 z-30 items-center justify-between px-6 pointer-events-none">
        <button
          onClick={() => handleManualNav("prev")}
          className="p-4 rounded-full bg-white/90 backdrop-blur-md border border-primary/5 shadow-xl text-primary pointer-events-auto opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:bg-accent hover:text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleManualNav("next")}
          className="p-4 rounded-full bg-white/90 backdrop-blur-md border border-primary/5 shadow-xl text-primary pointer-events-auto opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:bg-accent hover:text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* MASKING */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-64 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-64 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      {/* SLIDER TRACK */}
      <motion.div
        className="flex whitespace-nowrap cursor-grab active:cursor-grabbing"
        animate={controls}
        style={{ x }}
        ref={trackRef}
        drag="x"
        dragConstraints={{ left: -trackWidth / 2, right: 0 }}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={() => setIsPaused(false)}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={`${img.baseName}-${index}`}
            className="inline-block px-2 md:px-5"
          >
            <div className="relative w-[260px] h-[360px] md:w-[400px] md:h-[540px] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-primary/5 shadow-sm bg-white group">
              <ResponsiveImage
                baseName={img.baseName}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:from-primary/80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex items-end p-7 md:p-12">
                <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 text-left">
                  <p className="text-white md:text-accent font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase drop-shadow-md">
                    {img.alt}
                  </p>
                  <span className="text-[8px] md:text-[9px] text-white/70 md:text-white/50 uppercase tracking-widest mt-1 block">
                    Official Client
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* MOBILE DOTS */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-8">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              activeIndex === i ? "w-6 bg-accent" : "w-1.5 bg-primary/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
