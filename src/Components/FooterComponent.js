import { Row, Col, Image } from "react-bootstrap";
import { iconwhatsapp } from "../assets/icons";
import "./StyleComponents/StyleFooter.css";

const FooterComponent = () => {
  return (
    <div>
      {/* Footer Biasa */}
      <Row className="Footer">
        <Col md={12}>
          <p>Copyright &copy; 2024 Rosidi Sulam Alis & Academy</p>
        </Col>
      </Row>

      {/* Tombol WhatsApp Mengambang */}
      <a
        href="https://wa.me/6281279564211?text=%20Halo?%20Admin%20Rosidi%20Sulam%20Alis"
        className="iconwhatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
      >
        <Image
          src={iconwhatsapp}
          className="imgWhatsapp"
          alt="WhatsApp Icon"
        />
      </a>
    </div>
  );
};

export default FooterComponent;
