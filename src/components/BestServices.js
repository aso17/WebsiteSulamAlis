import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import VideosBestService from "./VideosBestService";
import "./StyleComponents/StyleBestServices.css";

const BestServices = () => {
  return (
    <div className="SectionBestServices">
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="TitleBestService">
          <h2 className="TitleBestServiceText">Best Service</h2>
          <p>Customer Satisfaction is Our Top Priority</p>
        </div>
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
