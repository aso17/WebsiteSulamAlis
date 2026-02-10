import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const VideoCard = ({ videoId, title, subscribers }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-video bg-black/5">
      <AnimatePresence mode="wait">
        {play ? (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        ) : (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlay(true)}
            className="group relative cursor-pointer w-full h-full overflow-hidden"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <div className="flex items-center gap-1.5 text-white">
                <Users size={12} className="opacity-80" />
                <span className="text-[10px] font-bold tracking-tight uppercase">
                  {subscribers} Subscribers
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-accent">
                  <Play
                    size={32}
                    className="text-accent fill-accent group-hover:text-white group-hover:fill-white transition-colors ml-1"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm md:text-base font-medium tracking-wide">
                {title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const VideosBestService = () => {
  const videos = [
    {
      id: "bVPMidBjq5k",
      title: "Testimonial Eksklusif Rosidi Sulam Alis",
      subscribers: "212 rb",
    },
    {
      // UPDATE: Video kedua diganti sesuai permintaan
      id: "GBE8yrl1Dhc",
      title: "Transformasi Sulam Alis & Bibir Natural",
      subscribers: "212 rb",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-0 py-10">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .video-swiper .swiper-button-next,
        .video-swiper .swiper-button-prev {
          background: white !important;
          width: 45px !important;
          height: 45px !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15) !important;
        }
        .video-swiper .swiper-button-next:after,
        .video-swiper .swiper-button-prev:after {
          font-size: 18px !important;
          color: #C5A358 !important;
        }
        @media (max-width: 768px) {
          .video-swiper .swiper-button-next,
          .video-swiper .swiper-button-prev { display: none !important; }
        }
      `,
        }}
      />

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="video-swiper !pb-12"
        style={{
          "--swiper-navigation-color": "#C5A358",
          "--swiper-pagination-color": "#C5A358",
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <VideoCard
              videoId={video.id}
              title={video.title}
              subscribers={video.subscribers}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideosBestService;
