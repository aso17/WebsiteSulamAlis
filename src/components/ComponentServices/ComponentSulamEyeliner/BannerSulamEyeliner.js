import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../StyleComponents/StyleBannerSulamEyeliner.css";
const BannerSulamEyeliner = () => {
  return (
    <div className="BannerSulamEyeliner">
      <Row className="RowBannerSulamEyeliner">
        <Col md={12}>
          <h2>Sulam Eyeliner</h2>
          <p>
            Sulam Eyeliner membuat mata menjadi lebih besar namun tetap
            kelihatan indah dan natural.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default BannerSulamEyeliner;
