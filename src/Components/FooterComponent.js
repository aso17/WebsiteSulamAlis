import { Row, Col, Image } from "react-bootstrap";
import { iconwhatsapp } from "../assets/icons";
import "./StyleComponents/StyleFooter.css";
const FooterComponent = () => {
  return (
    <div>
      <Row className="Footer">
        <Col md={12}>
          <p> Copyright &copy;2024 Rosidi Sulam Alis & Academy</p>
          <a
            href="https://wa.me/6281279564211?text=%20Halo?%20Admin%20Rosidi%20Sulam%20Alis"
            className="iconwhatsapp"
          >
            <Image
              src={iconwhatsapp}
              className="imgWhatsapp"
              alt="iconwhatsapp"
            />{" "}
            Chat Whatsapp
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default FooterComponent;
