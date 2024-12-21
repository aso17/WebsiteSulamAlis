import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../../StyleComponents/StyleContentSulamAlis.css";
import {
  ImgSulamAlis2,
  ImgSulamAlis3,
  ImgSulamAlis4,
} from "../../../assets/images";
const ContentSulamAlis = () => {
  return (
    <div className="ContentSulamAlis">
      <Row className="RowDescContent">
        <Col md={10} className="ColDescContent">
          <p>
            <b> Sulam alis </b>(Eyebrow) adalah teknik mendepositkan tinta
            pigmen warna ke dalam kulit menggunakan alat bahan khusus di atas
            permukaan kulit (epidermis). Setiap goresan yang dihasilkan
            menciptakan helaian menyerupai rambut–rambut yang realistis. Bentuk
            sulam alis serta pigmen warna setiap pasien dapat disesuaikan dengan
            kondisi dan sesuai keinginan pasien masing–masing.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image
            className="ImgSulamAlis1Content"
            src={ImgSulamAlis2}
            alt="imgSulamAlis"
          />
        </Col>
        <Col md={4}>
          <Image
            className="ImgSulamAlis1Content"
            src={ImgSulamAlis3}
            alt="imgSulamAlis"
          />
        </Col>
        <Col md={4}>
          <Image
            className="ImgSulamAlis1Content"
            src={ImgSulamAlis4}
            alt="imgSulamAlis"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ContentSulamAlis;
