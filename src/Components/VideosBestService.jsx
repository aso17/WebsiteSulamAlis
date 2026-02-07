import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideosBestService = () => {
  const [play, setPlay] = useState(false);
  const videoId = "bVPMidBjq5k";

  return (
    <div className="w-full max-w-5xl mx-auto px-2 md:px-0">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-video bg-primary-light">
        {play ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Sulam Alis Rosidi Video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            onClick={() => setPlay(true)}
            className="group relative cursor-pointer w-full h-full overflow-hidden"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                className="relative flex items-center justify-center"
              >
                {/* Ping effect menggunakan warna accent */}
                <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />

                {/* Tombol Play menggunakan bg-white dan hover:bg-accent */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-accent">
                  <Play
                    size={32}
                    className="text-accent fill-accent group-hover:text-white group-hover:fill-white transition-colors ml-1"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosBestService;
