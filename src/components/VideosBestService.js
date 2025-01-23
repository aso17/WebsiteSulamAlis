import React, { Component } from "react";
import VideoArtisGaby from "../assets/videos/VideoArtisGaby.mp4";
import Poster from "../assets/videos/PosterVideoGaby.webp";
import "./StyleComponents/StyleComponentVideoBestService.css";
class VideosBestService extends Component {
  render() {
    return (
      <div className="VideoArtis">
        <video controls={true} src={VideoArtisGaby} poster={Poster}></video>
      </div>
    );
  }
}
export default VideosBestService;
