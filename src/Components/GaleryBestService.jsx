import React, { useLayoutEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResponsiveImage from "../assets/images/ResponsiveImage";

const images = [
  { baseName: "ImagesSulamAlis2", alt: "Sulam Alis Natural" },
  { baseName: "ImagesSulamAlis3", alt: "Hasil Sulam Alis Modern" },
  { baseName: "ImagesSulamAlis4", alt: "Proses Sulam Alis" },
  { baseName: "Model0", alt: "Model 1 Sulam Alis" },
  { baseName: "Model1", alt: "Model 2 Sulam Alis" },
  { baseName: "Model2", alt: "Model 3 Sulam Alis" },
  { baseName: "Model3", alt: "Model 4 Sulam Alis" },
];

const SliderImage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(40);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const distanceToTravel = trackWidth / 2;
      const isMobile = window.innerWidth < 768;
      const baseSpeed = isMobile ? 30 : 50;
      setDuration(distanceToTravel / baseSpeed);
    }
  }, []);

  useLayoutEffect(() => {
    if (!isPaused) {
      controls.start({
        x: `-${trackRef.current?.scrollWidth / 2 || 0}px`,
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, duration, controls]);

  const handleManualNav = (direction) => {
    const shiftAmount = window.innerWidth < 768 ? 280 : 450;
    const currentTransform = trackRef.current.getBoundingClientRect().left;
    const parentLeft =
      trackRef.current.parentElement.getBoundingClientRect().left;
    const relativeX = currentTransform - parentLeft;

    const targetX =
      direction === "next" ? relativeX - shiftAmount : relativeX + shiftAmount;

    controls
      .start({
        x: targetX,
        transition: { duration: 0.6, ease: "easeOut" },
      })
      .then(() => {
        if (!isPaused) {
          controls.start({
            x: `-${trackRef.current?.scrollWidth / 2 || 0}px`,
            transition: {
              duration: duration,
              ease: "linear",
              repeat: Infinity,
            },
          });
        }
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
          Portofolio Kami
        </span>
        <h3 className="text-primary font-serif italic text-2xl md:text-4xl mt-2">
          The Gallery
        </h3>
      </div>

      {/* DESKTOP FLOATING BUTTONS (Sembunyi di Mobile) */}
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

      {/* GRADIENT MASKING */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      {/* SLIDER TRACK */}
      <motion.div
        className="flex whitespace-nowrap cursor-grab active:cursor-grabbing"
        animate={controls}
        initial={{ x: 0 }}
        ref={trackRef}
        drag="x" // Mengizinkan swipe di mobile
        dragConstraints={{ left: -5000, right: 0 }} // Batas kasar agar bisa di-swipe
        onDragStart={() => setIsPaused(true)}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={`${img.baseName}-${index}`}
            className="inline-block px-2 md:px-5"
          >
            <div className="relative w-[240px] h-[340px] md:w-[380px] md:h-[520px] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-primary/5 shadow-sm bg-white group">
              <ResponsiveImage
                baseName={img.baseName}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-110"
                draggable={false}
              />

              {/* Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex items-end p-6 md:p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-accent font-bold text-[8px] md:text-[10px] tracking-widest uppercase">
                    {img.alt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* MOBILE INDICATOR (Hanya muncul di Mobile) */}
      <div className="flex md:hidden justify-center gap-2 mt-8">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i ? "w-6 bg-accent" : "w-2 bg-primary/10"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
