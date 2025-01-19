import { Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import ImgOwner from "../../assets/images/AboutMe/Owner.webp";
import "../StyleComponents/StyleAboutMe.css";
const ContentAboutMe = () => {
  return (
    <div className="AboutMe">
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h3>
          Rosidi Sulam Alis & <span>Academy</span>
        </h3>
      </motion.div>

      <Row className="SectionAboutMe">
        <Col md={6} className="RowSectionAbout">
          <p>
            Terpercaya di Indonesia sejak tahun 2015 khusus bidang kecantikan
            sulam. Rosidi Sulam Alis & Academy telah banyak memiliki alumni
            siswa yang handal dan sukses dibidangnya.
          </p>
          <p>
            Segera datang ke Rosidi Sulam Alis & Academy dan dapatkan penampilan
            baru Anda yang makin cantik, cerah, bercahaya sepanjang hari.
          </p>
          <div className="SectionOwner">
            <motion.div
              variants={FramerMotion("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className="TitleOwner">Founder & Owner</p>
              <p className="NameOwner">Master Rosidi</p>
              <p className="CtaOwner">Konsultasi Gratis</p>
            </motion.div>
          </div>
        </Col>
        <Col md={6}>
          <Image className="ImgOwner" src={ImgOwner} alt="ImgOwner" />
        </Col>
      </Row>
    </div>
  );
};

export default ContentAboutMe;
