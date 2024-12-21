import React from "react";
import { Row, Col } from "react-bootstrap";
import ImagesAboutMe from "./ImagesAboutMe";
import "./StyleComponents/StyleHero.css";

const Hero = () => {
  return (
    <div>
      <Row className="Hero">
        <Col md={12}>
          <ImagesAboutMe />
          <div className="SectionHero">
            <h2 className="Brand">
              Rosidi Sulam Alis & <span>Academy</span>
            </h2>

            <p className="DescHero">
              Terpercaya Menjadi Langganan Sulam Para Artis dan Selebriti
              Ibukota dan Sekitarnya.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
