import React from "react";
import "../../StyleComponents/StyleBannerSulamAlis.css";
import { Row, Col } from "react-bootstrap";
const BannerSulamAlis = () => {
  return (
    <div>
      <Row className="HeroSulamAlis">
        <Col md={12}>
          <h2 className="DescHeroSulamAlis">Sulam Alis</h2>
          <p className="DescHeroSulamAlis">
            Sulam Alis dengan Teknik yang membuat seluruh alis terlihat lebih
            natural dengan menggunakan mesin.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default BannerSulamAlis;
