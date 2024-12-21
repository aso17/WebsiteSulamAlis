import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../../StyleComponents/StyleComponentLaserRemoval.css";
import {
  ImagesLaser1,
  ImagesLaser2,
  ImagesLaser3,
} from "../../../assets/images";
const ComponentLaserRemoval = () => {
  return (
    <div>
      <div className="ContentLaserRemoval">
        <Row className="RowDescLaserRemoval">
          <Col md={10} className="ColDescLaserRemoval">
            <p>
              <b> Laser Removal </b>Perawatan Laser sering digunakan untuk
              meremajakan kulit wajah (mengencangkan, mengecilkan pori atau
              mengurangi garis kerutan halus), mengatasi jerawat meradang,
              menghilangkan flek/melasma, menghilangkan tato, atau mengatasi
              tanda lahir. Laser menghilangkan lapisan kulit mati menggunakan
              sinar.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image
              className="ImgLaserRemoval"
              src={ImagesLaser1}
              alt="imgSulamAlis"
            />
          </Col>
          <Col md={4}>
            <Image
              className="ImgLaserRemoval"
              src={ImagesLaser2}
              alt="imgSulamAlis"
            />
          </Col>
          <Col md={4}>
            <Image
              className="ImgLaserRemoval"
              src={ImagesLaser3}
              alt="imgSulamAlis"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ComponentLaserRemoval;
