import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FramerMotion from "./FramerMotion";
import ResponsiveImage from "../assets/images/ResponsiveImage";

const ComponentFasilitas = () => {
  const rooms = [
    {
      baseName: "AssistantRoom",
      label: "Assistant Room",
      desc: "Ruang asisten yang higienis dan terorganisir.",
    },
    {
      baseName: "WaitingRoom",
      label: "Waiting Room",
      desc: "Area tunggu yang nyaman dengan suasana relaksasi.",
    },
    {
      baseName: "VipRoom",
      label: "VIP Room",
      desc: "Privasi eksklusif untuk kenyamanan maksimal Anda.",
    },
    {
      baseName: "FrontOffice",
      label: "Front Office",
      desc: "Layanan informasi dan administrasi yang ramah.",
    },
    {
      baseName: "LaserRoom",
      label: "Laser Room",
      desc: "Teknologi laser modern dengan standar keamanan tinggi.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % rooms.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + rooms.length) % rooms.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* HEADER SECTION */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 text-center px-6"
      >
        <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">
          Our Sanctuary
        </span>
        <h2 className="text-3xl md:text-5xl font-serif italic text-primary mb-4">
          Studio Rooms
        </h2>
        <div className="w-12 h-[1px] bg-accent mx-auto mb-6" />
        <p className="text-primary/60 font-light max-w-lg mx-auto text-sm md:text-base">
          Setiap sudut ruangan dirancang untuk memberikan ketenangan dan hasil
          yang presisi.
        </p>
      </motion.div>

      {/* CAROUSEL CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* SLIDER WRAPPER */}
          <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-primary/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <ResponsiveImage
                  baseName={rooms[current].baseName}
                  alt={rooms[current].label}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradasi agar Teks Terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/20" />

                {/* Caption Interior */}
                <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-white z-10">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-accent font-bold text-[10px] tracking-[0.2em] uppercase mb-2"
                  >
                    Fasilitas {current + 1} / {rooms.length}
                  </motion.p>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-5xl font-serif italic mb-2"
                  >
                    {rooms[current].label}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/70 font-light text-sm md:text-base max-w-sm"
                  >
                    {rooms[current].desc}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION BUTTONS INSIDE CAROUSEL */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6 md:px-10 z-20 pointer-events-none">
              <button
                onClick={prevSlide}
                className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white pointer-events-auto hover:bg-accent hover:border-accent transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white pointer-events-auto hover:bg-accent hover:border-accent transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center gap-3 mt-10">
          {rooms.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === i ? "w-12 bg-accent" : "w-3 bg-primary/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentFasilitas;
