import React, { useLayoutEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ResponsiveImage from "../assets/images/ResponsiveImage";
import "./StyleComponents/SliderImages.css";

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
  const [duration, setDuration] = useState(30); // default awal

  useLayoutEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth; // total track (dua kali gambar)
      const distanceToTravel = trackWidth / 2; // kita geser setengah track saja (loop)
      const isMobile = window.innerWidth < 768;
      const baseSpeed = isMobile ? 1000 / 30 : 1000 / 20; // px per detik
      const newDuration = distanceToTravel / baseSpeed;
      setDuration(newDuration);
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

  return (
    <div
      className="slider-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="fade-left" />
      <motion.div
        className="slider-track"
        animate={controls}
        initial={{ x: 0 }}
        ref={trackRef}
      >
        {[...images, ...images].map((img, index) => (
          <div key={`${img.baseName}-${index}`} className="slider-image-wrapper">
            <ResponsiveImage
              baseName={img.baseName}
              alt={img.alt}
              className="slider-image"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
      <div className="fade-right" />
    </div>
  );
};

export default SliderImage;
