import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import VideosBestService from "./VideosBestService";
import GaleryBestService from "./GaleryBestService";

const BestServices = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-pink-50 via-white to-purple-50 text-center py-16 px-4">
      <motion.div
        variants={FramerMotion("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 mb-8"
      >
       
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Kami berkomitmen menghadirkan pengalaman perawatan terbaik dengan
          sentuhan profesional, teknologi modern, dan hasil yang memuaskan.
        </p>
      </motion.div>

      {/* Video Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <VideosBestService />
        </div>
      </div>

      {/* Gallery */}
      <div className="relative z-10 mt-10">
        <GaleryBestService />
      </div>
    </div>
  );
};

export default BestServices;
