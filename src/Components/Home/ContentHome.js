import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import { Row, Col, Image } from "react-bootstrap";
import "../StyleComponents/StyleHome.css";

import {
  ImgHomeHapusTato,
  ImgHomeSulamBibir,
  ImgHomeSulamEyeliner,
  ImgHomeRemoveSulamAlis,
  ImgSulamAlis1,
} from "../../assets/images";

const ContentHome = () => {
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
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image
              className="ImgSulamAlis1Home"
              src={ImgSulamAlis1}
              alt="imgSulamAlis"
            />
          </motion.div>
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
            <h4>Hapus Sulam Alis</h4>
          </motion.div>
          <p>
            Teknik Penghapusan Tinta Pigmen Tidak Sesuai Warna pada Kulit dengan
            Alat & Bahan Khusus di Epidermis
          </p>
        </Col>
        <Col className="ColServiceDescHome">
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image
              className="ImgSulamAlis1Home"
              src={ImgHomeRemoveSulamAlis}
              alt="imgSulamAlis"
            />
          </motion.div>
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
            Teknik Sulam Eyeliner Dapat Mempertegas Garis Eyeliner Sesuai
            Permintaan, Membuat Mata Pasien Terlihat Segar, Bersinar, Dan Lebih
            Besar. Dengan Sulam Eyeliner, Pasien Dapat Memiliki Tampilan Mata
            Yang Lebih Indah Dan Percaya Diri Setiap Hari.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image
              className="ImgSulamEyelinerHome"
              src={ImgHomeSulamEyeliner}
              alt="ImgSulamEyeliner"
            />
          </motion.div>
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
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image
              className="ImgSulamBibirHome"
              src={ImgHomeSulamBibir}
              alt="ImgSulamBibir"
            />
          </motion.div>
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
            <h4>Hapus Tato</h4>
          </motion.div>
          <p>
            Hapus Tato Yang Tidak Diinginkan Dengan Teknologi Laser Terkini!
            Dapatkan Kulit Yang Bersih Dan Bebas Tato Dengan Prosedur Hapus Tato
            Yang Aman. Tato Tidak Lagi Menjadi Masalah Dengan Layanan Hapus Tato
            Yang Profesional.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image
              className="ImgLaserRemovalHome"
              src={ImgHomeHapusTato}
              alt="ImgLaserRemoval"
            />
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentHome;
