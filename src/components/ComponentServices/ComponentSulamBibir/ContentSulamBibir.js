import React from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import ModalComponent from "../../ModalComponent";
import { motion } from "framer-motion";
import FramerMotion from "..//../FramerMotion";
import "../../StyleComponents/StyleContentSulamBibir.css";
import {
  ImagesBeforeSulamBibir,
  ImagesAfterSulamBibir,
} from "../../../assets/images";
const ContentSulamBibir = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="ContentSulamBibir">
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h4>Membuat Bentuk Bibir Menjadi Sempurna.</h4>
        <p>Memberikan Efek Pada Bibir Menjadi Lebih Cerah & Natural</p>
      </motion.div>
      <Row className="RowDescSulamBibir">
        <Col md={6} className="ColDescSulamBibir">
          <p>
            Sulam bibir dapat menyesuaikan garis bibir agar simetris dengan
            pemilihan warna sesuai keinginan.
          </p>
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Badge
              bg="secondary"
              className="ProcedureSulamBibir"
              onClick={() => setModalShow(true)}
            >
              Lihat Procedure
            </Badge>
          </motion.div>
          <ModalComponent
            show={modalShow}
            id={`2`}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col md={6} className="ColDescSulamBibir">
          <div className="RowImgSulamBibir">
            <Image
              className="ImagesSulamBibir"
              src={ImagesBeforeSulamBibir}
              alt="imgSulamBibir"
            />
            <Image
              className="ImagesSulamBibir"
              src={ImagesAfterSulamBibir}
              alt="imgSulamBibir"
            />
          </div>
          <div className="RowCaptionSulamBibir">
            <div className="CaptionSulamBibir">
              <motion.div
                variants={FramerMotion("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>Before</p>
              </motion.div>
            </div>
            <div className="CaptionSulamBibir">
              <motion.div
                variants={FramerMotion("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>After</p>
              </motion.div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentSulamBibir;
