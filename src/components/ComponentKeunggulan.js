import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import { iconDocument, iconPaint, iconTeams } from "../assets/icons";
import "./StyleComponents/StyleComponentKeunggulan.css";
const ComponentKeunggulan = () => {
  return (
    <div>
      <div className="SectionKeunggulan">
        <Row>
          <Col md={12}>
            <motion.div
              variants={FramerMotion("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h4 className="HeadKeunggulan">Why Us?</h4>
            </motion.div>
            <h5 className="HeadBrand">
              Keunggulan Rosidi Sulam Alis & Academy
            </h5>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <div className="DetailKeunggulan">
              <Image className="iconImage" src={iconTeams} />
              <motion.div
                variants={FramerMotion("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>
                  Seluruh Tim Rosidi Sulam Alis adalah para ahli dibidangnya dan
                  memiliki SOP (Standard Operational Procedure).
                </p>
              </motion.div>
            </div>
          </Col>
          <Col md={4}>
            <div className="DetailKeunggulan">
              <Image className="iconImage" src={iconPaint} />
              <motion.div
                variants={FramerMotion("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>
                  Semua alat & bahan berkualitas tinggi. Bahan herbal alami
                  dipadu dengan jarum khusus & steril.
                </p>
              </motion.div>
            </div>
          </Col>
          <Col md={4}>
            <div className="DetailKeunggulan">
              <Image className="iconImage" src={iconDocument} />
              <motion.div
                variants={FramerMotion("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <p>
                  Setelah pelatihan selesai, seluruh siswa akan mendapatkan
                  Sertifikat Diknas Resmi Indonesia.
                </p>
              </motion.div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ComponentKeunggulan;
