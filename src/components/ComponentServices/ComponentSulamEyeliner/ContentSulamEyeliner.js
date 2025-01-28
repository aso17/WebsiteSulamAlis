import React from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import ModalComponent from "../../ModalComponent";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import "../../StyleComponents/StyleContentSulamEyeliner.css";
import {
  ImagesBeforeSulamEyeliner,
  ImagesSulamEleyener1,
} from "../../../assets/images";

const ContentSulamEyeliner = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="ContentSulamEyeliner">
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h4>Membuat Bentuk Mata Menjadi Sempurna.</h4>
        <p>
          Combination Sulam Eyeliner Sulam Alis membuat lebih terlihat soft &
          natural.
        </p>
      </motion.div>
      <Row className="RowDescSulamEyeliner">
        <Col md={6} className="ColDescSulamEyeliner">
          <p>
            Tindakan mempertegas garis eyeliner bagian atas dan bawah. Sulam
            eyeliner bermanfaat agar mata terlihat selalu segar, bersinar, dan
            memberikan efek percaya diri sepanjang hari.
          </p>
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Badge
              bg="secondary"
              className="ProcedureSulamEyeliner"
              onClick={() => setModalShow(true)}
            >
              Lihat Procedure
            </Badge>
          </motion.div>
          <ModalComponent
            show={modalShow}
            id={`3`}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col md={6} className="ColImgSulamEyeliner">
          <div className="RowImgSulamEyeliner">
            <Image
              className="ImagesSulamEyeliner"
              src={ImagesBeforeSulamEyeliner}
              alt="imgSulamEyeliner"
            />

            <Image
              className="ImagesSulamEyeliner"
              src={ImagesSulamEleyener1}
              alt="imgSulamEyeliner"
            />
          </div>
          <div className="RowCaptionSulamEyeliner">
            <div className="CaptionSulamEyeliner">
              <motion.div
                variants={FramerMotion("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>Before</p>
              </motion.div>
            </div>
            <div className="CaptionSulamEyeliner">
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

export default ContentSulamEyeliner;
