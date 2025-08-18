import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./StyleComponents/SliderImages.css";

import {
  ImgSulamAlis2,
  ImgSulamAlis3,
  ImgSulamAlis4,
  Model0,
  Model1,
  Model2,
  Model3,
} from "../assets/images";

const images = [
  ImgSulamAlis2,
  ImgSulamAlis3,
  ImgSulamAlis4,
  Model0,
  Model1,
  Model2,
  Model3,
];

const SliderImage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: "-100%", // geser ke kiri hingga -100%
        transition: {
          duration: 30, // durasi animasi
          ease: "linear", // animasi linear untuk smooth gerak terus
          repeat: Infinity,
          repeatType: "loop", // loop tanpa jeda
        },
      });
    } else {
      controls.stop(); // pause animasi
    }
  }, [isPaused, controls]);

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="slider-wrapper" onClick={handleTogglePause}>
      <div className="fade-left" />
      <motion.div
        className="slider-track"
        animate={controls}
        initial={{ x: 0 }} // mulai langsung di posisi 0 (terlihat)
      >
        {/* Gandakan images supaya loop terlihat mulus */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`image-${index}`}
            className="slider-image"
            draggable={false}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SliderImage;
