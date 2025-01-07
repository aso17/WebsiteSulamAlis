import React from "react";
import "../StyleComponents/StyleBannerGalery.css";
import { Row, Col } from "react-bootstrap";
const BannerGalery = () => {
  return (
    <div>
      <Row className="HeroGalery">
        <Col md={12}>
          <h2 className="DescGalery">Galery</h2>
          <p className="DescGalery">Artis dan Model Indonesia</p>
        </Col>
      </Row>
    </div>
  );
};

export default BannerGalery;
