import { Row, Col, Image } from "react-bootstrap";
import ImgOwner from "../../assets/images/AboutMe/Owner.webp";
import "../StyleComponents/StyleAboutMe.css";
const ContentAboutMe = () => {
  return (
    <div className="AboutMe">
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
          <div className="SectionOwner">
            <p className="TitleOwner">Founder & Owner</p>
            <p className="NameOwner">Master Rosidi</p>
            <p className="CtaOwner">Konsultasi Gratis</p>
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
