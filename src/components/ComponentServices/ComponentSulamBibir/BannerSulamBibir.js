import React from "react";
import "../../StyleComponents/StyleBannerSulamBibir.css";
import { Row, Col } from "react-bootstrap";

const BannerSulamBibir = () => {
  return (
    <div>
      <Row className="HeroSulamBibir">
        <Col md={12}>
          <h2 className="DescHeroSulamBibir">Sulam Bibir</h2>
          <p className="DescHeroSulamBibir">
            Menerapkan Seni membentuk bibir menjadi terlihat alami & merah
            merona sesuai dengan warna yang diinginkan.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default BannerSulamBibir;
