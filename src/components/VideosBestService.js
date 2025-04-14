import React, { Component } from "react";
// import VideoArtisGaby from "../assets/videos/VideoArtisGaby.mp4";
// import Poster from "../assets/videos/PosterVideoGaby.webp";
import "./StyleComponents/StyleComponentVideoBestService.css";
class VideosBestService extends Component {
  render() {
    return (
      <div className="VideoArtis">
        <iframe
          controls={true}
          src="https://www.youtube.com/embed/bVPMidBjq5k?si=VbvBNoXB4QWuaHbN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
export default VideosBestService;
