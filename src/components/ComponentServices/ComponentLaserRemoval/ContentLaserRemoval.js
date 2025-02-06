import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import "../../StyleComponents/StyleContentLaserRemoval.css";
import { ImagesLaser1, ImagesLaser2 } from "../../../assets/images";
const ContentLaserRemoval = () => {
  return (
    <div className="ContentLaserRemoval">
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h4>Membuat Kulit Menjadi Sempurna.</h4>
        <p>Dengan Menggunakan Teknologi Mesin Laser</p>
      </motion.div>
      <Row className="RowDescLaserRemoval">
        <Col md={6} className="ColDescLaserRemoval">
          <p>
            Meremajakan kulit wajah (mengencangkan, mengecilkan pori atau
            mengurangi garis kerutan halus), mengatasi jerawat meradang,
            menghilangkan flek/melasma, menghilangkan tato, atau mengatasi tanda
            lahir. Laser menghilangkan lapisan kulit mati menggunakan sinar.
          </p>
        </Col>
        <Col md={6} className="ColDescLaserRemoval">
          <div className="RowImgLaserRemoval">
            <Image
              className="ImagesLaserRemoval"
              src={ImagesLaser1}
              alt="imgLaserRemoval"
            />
            <Image
              className="ImagesLaserRemoval"
              src={ImagesLaser2}
              alt="imgLaserRemoval"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentLaserRemoval;
