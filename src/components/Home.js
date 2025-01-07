import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import { Row, Col, Image } from "react-bootstrap";
import "./StyleComponents/StyleHome.css";

import {
  ImgSulamAlis1,
  ImagesSulamEleyenier,
  ImagesSulamBibir1,
  ImagesLaser0,
} from "../assets/images";

const Home = () => {
  return (
    <div className="SectionHome">
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="TitleLayanan">
          <h2>Layanan Kami</h2>
          <p>Teams Yang Profesional & Dukungan Alat Serta Bahan Khusus </p>
        </div>
      </motion.div>

      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4>Sulam Alis</h4>
          </motion.div>
          <p>
            Teknik mendepositkan tinta pigmen warna ke dalam kulit menggunakan
            alat bahan khusus di atas permukaan kulit (epidermis).
          </p>
        </Col>
        <Col className="ColServiceDescHome">
          <Image
            className="ImgSulamAlis1Home"
            src={ImgSulamAlis1}
            alt="imgSulamAlis"
          />
        </Col>
      </Row>

      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4> Sulam Eyeliner</h4>
          </motion.div>
          <p>
            Teknik mempertegas garis eyeliner, sesuai dengan permintaan, sulam
            eyeliner bermanfaat agar mata pasien selalu kelihatan segar,
            bersinar, dan memberikan efek mata kelihatan lebih besar.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          <Image
            className="ImgSulamEyelinerHome"
            src={ImagesSulamEleyenier}
            alt="ImgSulamEyeliner"
          />
        </Col>
      </Row>

      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4>Sulam Bibir</h4>
          </motion.div>

          <p>
            Teknik mendepositkan pigmen warna ke lapisan kulit luar (epidermis)
            menggunakan alat bahan khusus sehingga hasilnya terkesan cerah
            natural. Tindakan sulam bibir bermanfaat untuk merubah bentuk dan
            warna bibir pasien dan memberikan kesan bibir lebih penuh lebih awet
            muda, dan lebih simestris.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          <Image
            className="ImgSulamBibirHome"
            src={ImagesSulamBibir1}
            alt="ImgSulamBibir"
          />
        </Col>
      </Row>

      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4>Laser Removal</h4>
          </motion.div>
          <p>
            Meremajakan kulit wajah (mengencangkan, mengecilkan pori atau
            mengurangi garis kerutan halus), mengatasi jerawat meradang,
            menghilangkan flek/melasma, menghilangkan tato, atau mengatasi tanda
            lahir. Laser menghilangkan lapisan kulit mati menggunakan sinar.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          <Image
            className="ImgLaserRemovalHome"
            src={ImagesLaser0}
            alt="ImgLaserRemoval"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
