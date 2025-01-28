import React from "react";
import { Row, Col, Ratio } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import LiputanArtisFuzi from "../../assets/videos/LiputanArtisFuzi.mp4";
import LiputanArtis1 from "../../assets/videos/LiputanArtis1.mp4";
import LiputanModel0 from "../../assets/videos/LiputanModel0.mp4";
import { Model0 } from "../../assets/images";
import "../StyleComponents/StyleContentGalery.css";
const ContentGalery = () => {
  return (
    <div className="ContentGalery">
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h4>Bersama Model & Artis </h4>
        <p>Rosidi Sulam Alis & Academy Terbukti Menjadi Pilihan Kita Semua</p>
      </motion.div>
      <Row className="RowDescGalery">
        <Col md={4} className="ColDescGalery">
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <video
              className="VideoModel"
              controls={true}
              src={LiputanArtisFuzi}
              poster={Model0}
              typeof={"video/mp4"}
            ></video>
          </motion.div>
        </Col>
        <Col md={4} className="ColDescGalery">
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <video
              className="VideoModel"
              controls={true}
              src={LiputanArtis1}
              poster={""}
              typeof={"video/mp4"}
            ></video>
          </motion.div>
        </Col>
        <Col md={4} className="ColDescGalery">
          <motion.div
            variants={FramerMotion("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <video
              className="VideoModel"
              controls={true}
              src={LiputanModel0}
              poster={""}
              typeof={"video/mp4"}
            ></video>
          </motion.div>
        </Col>
      </Row>
      <Row className="RowVideoYoutube">
        <Col md={4} className="ColVideoYoutube">
          <motion.div
            variants={FramerMotion("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6x8iVx0UsIw?si=NSsIFYnAHomXo362"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </motion.div>
        </Col>
        <Col md={4} className="ColVideoYoutube">
          <motion.div
            variants={FramerMotion("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5RZu7e4yH-8?si=6Zb1vdrpIN4E3sx2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </motion.div>
        </Col>
        <Col md={4} className="ColVideoYoutube">
          <motion.div
            variants={FramerMotion("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wztpYzI_4UU?si=ko1-BKgBuFNHsKg3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentGalery;
