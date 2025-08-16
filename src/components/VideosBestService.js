import React, { Component } from "react";
import "./StyleComponents/StyleComponentVideoBestService.css";
class VideosBestService extends Component {
  render() {
    return (
      <div className="VideoArtis">
        <iframe
          controls={true}
          src="https://www.youtube.com/embed/bVPMidBjq5k?si=VbvBNoXB4QWuaHbN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
export default VideosBestService;
