import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "..//../FramerMotion";
import ModalComponent from "../../ModalComponent";
import "../../StyleComponents/StyleContentSulamAlis.css";
import {
  ImgSulamAlis2,
  ImgSulamAlis3,
  ImgSulamAlis4,
  Model0,
  Model1,
  Model2,
  Model3,
} from "../../../assets/images";
const ContentSulamAlis = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="ContentSulamAlis">
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h4>Alis Terlihat Lebih Natural Dengan Teknik & Alat Modern</h4>
      </motion.div>
      <p className="DescContentSulamAlis">
        Dikerjakan Oleh Ahli, Menggunakan Kosmetik Berkualitas & Alami
      </p>

      <Row className="RowDescContentSulamAlis">
        <Col md={6} className="ColDescContentSulamAlis">
          <p>
            Teknik mendepositkan tinta pigmen warna ke dalam kulit menggunakan
            alat bahan khusus di atas permukaan kulit (epidermis). Setiap
            goresan yang dihasilkan menciptakan helaian menyerupai rambut–rambut
            yang realistis. Bentuk sulam alis serta pigmen warna setiap pasien
            dapat disesuaikan dengan kondisi dan sesuai keinginan pasien
            masing–masing.
          </p>
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <p
              className="ProcedureSulamAlis"
              onClick={() => setModalShow(true)}
            >
              Lihat Procedure
            </p>
          </motion.div>

          <ModalComponent
            show={modalShow}
            id={`1`}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col md={6} className="ColDescContentSulamAlis">
          <Row className="RowImagesSulamAlis">
            <Col md={6} className="ColImagesSulamAlis">
              <Image
                className="ImgSulamAlis1Content0"
                src={ImgSulamAlis3}
                alt="imgSulamAlis"
              />
            </Col>
            <Col md={6} className="ColImagesSulamAlis">
              <Image
                className="ImgSulamAlis1Content1"
                src={ImgSulamAlis2}
                alt="imgSulamAlis"
              />
              <Image
                className="ImgSulamAlis1Content2"
                src={ImgSulamAlis4}
                alt="imgSulamAlis"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="RowModelSulamAlis">
        <h5>Kepuasan Konsumen Paling Utama</h5>
        <Col md={3} className="ColModelSulamAlis">
          <Image className="Model0" src={Model0} alt="Model0" />
        </Col>
        <Col md={3} className="ColModelSulamAlis">
          <Image className="Model1" src={Model1} alt="Model1" />
        </Col>
        <Col md={3} className="ColModelSulamAlis">
          <Image className="Model2" src={Model2} alt="Model1" />
        </Col>
        <Col md={3} className="ColModelSulamAlis">
          <Image className="Model3" src={Model3} alt="Model3" />
        </Col>
      </Row>
    </div>
  );
};

export default ContentSulamAlis;
