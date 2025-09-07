import React, { useState } from "react";

const VideosBestService = () => {
  const [play, setPlay] = useState(false);
  const videoId = "bVPMidBjq5k";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video">
        {play ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="no-referrer"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            onClick={() => setPlay(true)}
            className="relative cursor-pointer w-full h-full"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
              <span className="text-white text-2xl font-bold">
                ▶ Play Video
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosBestService;
