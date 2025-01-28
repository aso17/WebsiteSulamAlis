import React from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
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
            <Badge
              className="ProcedureSulamAlis"
              onClick={() => setModalShow(true)}
              bg="secondary"
            >
              Lihat Procedure
            </Badge>
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
              <motion.div
                variants={FramerMotion("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <Image
                  className="ImgSulamAlis1Content0"
                  src={ImgSulamAlis3}
                  alt="imgSulamAlis"
                />
              </motion.div>
            </Col>
            <Col md={6} className="ColImagesSulamAlis">
              <motion.div
                variants={FramerMotion("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <Image
                  className="ImgSulamAlis1Content1"
                  src={ImgSulamAlis2}
                  alt="imgSulamAlis"
                />
              </motion.div>
              <motion.div
                variants={FramerMotion("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <Image
                  className="ImgSulamAlis1Content2"
                  src={ImgSulamAlis4}
                  alt="imgSulamAlis"
                />
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="RowModelSulamAlis">
        <motion.div
          variants={FramerMotion("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <h5>Kepuasan Konsumen Paling Utama</h5>
        </motion.div>
        <Col md={3} className="ColModelSulamAlis">
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image className="Model0" src={Model0} alt="Model0" />
          </motion.div>
        </Col>
        <Col md={3} className="ColModelSulamAlis">
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image className="Model1" src={Model1} alt="Model1" />
          </motion.div>
        </Col>
        <Col md={3} className="ColModelSulamAlis">
          <motion.div
            variants={FramerMotion("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image className="Model2" src={Model2} alt="Model1" />
          </motion.div>
        </Col>
        <Col md={3} className="ColModelSulamAlis">
          <motion.div
            variants={FramerMotion("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image className="Model3" src={Model3} alt="Model3" />
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentSulamAlis;
