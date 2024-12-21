import { Row, Col, Image } from "react-bootstrap";
import ImgOwner from "../assets/images/AboutMe/Owner.webp";
import "./StyleComponents/StyleAboutMe.css";

const ComponentAboutMe = () => {
  return (
    <div className="AboutMe">
      <h2>About Me</h2>
      <Row className="SectionAboutMe">
        <Col md={6} className="RowSectionAbout">
          <h3>
            Rosidi Sulam Alis & <span>Academy</span>
          </h3>
          <p>
            Terpercaya di Indonesia sejak tahun 2015 khusus bidang kecantikan
            sulam. Rosidi Sulam Alis & Academy telah banyak memiliki alumni
            siswa yang handal dan sukses dibidangnya.
          </p>
          <p>
            Segera datang ke Rosidi Sulam Alis & Academy dan dapatkan penampilan
            baru Anda yang makin cantik, cerah, bercahaya sepanjang hari.
          </p>
        </Col>
        <Col md={6}>
          <div className="SectionOwner">
            <Image className="ImgOwner" src={ImgOwner} alt="ImgOwner" />
            <h5 className="NameOwner">Master Rosidi</h5>
            <h5 className="TitleOwner">Founder</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ComponentAboutMe;
