import React from "react";
import "../../StyleComponents/StyleBannerLaserRemoval.css";
import { Row, Col } from "react-bootstrap";

const BannerLaserRemoval = () => {
  return (
    <div>
      <Row className="HeroLaserRemoval">
        <Col md={12}>
          <h2 className="DescLaserRemoval">Laser Removal</h2>
          <p className="DescLaserRemoval">
            Menghapus tattoo permanent, mengencangkan kulit, mengecilkan pori
            dan garis kerutan halus
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default BannerLaserRemoval;
