import React from "react";
import { Row, Col } from "react-bootstrap";
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
    </div>
  );
};

export default ContentGalery;
