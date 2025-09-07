import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import ResponsiveImage from "../assets/images/ResponsiveImage";

import "./StyleComponents/Carousel.css";

const ComponentFasilitas = () => {
  const rooms = [
    { baseName: "AssistantRoom", label: "Assistant Room" },
    { baseName: "WaitingRoom", label: "Waiting Room" },
    { baseName: "VipRoom", label: "VIP Room" },
    { baseName: "FrontOffice", label: "Front Office" },
    { baseName: "LaserRoom", label: "Laser Room" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-white py-16 SectionFascility">
      {/* Judul */}
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="mb-10 text-center TitleFacility"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Studio Rooms
        </h2>
        <p className="text-gray-600">Kenyamanan Pelanggan Paling Utama</p>
      </motion.div>

      {/* Carousel */}
      <div className="flex justify-center RowFacility">
        <div className="carousel relative overflow-hidden w-[600px]">
          {/* Inner wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {rooms.map((room, i) => (
              <div key={i} className="w-full flex-shrink-0 text-center">
                <ResponsiveImage
                  baseName={room.baseName}
                  alt={room.label}
                  className="w-full h-80 object-cover rounded-lg"
                  width={600}
                  height={320}
                />
                <div className="caption mt-2 text-lg font-semibold">
                  {room.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tombol navigasi */}
          <button
            className="prev absolute left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="next absolute right-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentFasilitas;
