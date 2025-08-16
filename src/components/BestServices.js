import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import VideosBestService from "./VideosBestService";
import "./StyleComponents/StyleBestServices.css";

const BestServices = () => {
  return (
    <div className="SectionBestServices">
      {/* Overlay hitam transparan */}
      <div className="overlay"></div>

      <motion.div
        variants={FramerMotion("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="TitleBestService"
      >
        <h2 className="TitleBestServiceText">Layanan Terbaik</h2>
        <p>Kepuasan pelanggan adalah prioritas utama kami</p>
      </motion.div>

      <Row className="RowBestServices">
        <Col md={12}>
          <VideosBestService />
        </Col>
      </Row>
    </div>
  );
};

export default BestServices;
