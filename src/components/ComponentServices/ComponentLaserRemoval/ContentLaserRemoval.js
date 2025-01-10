import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import ModalComponent from "../../ModalComponent";
import "../../StyleComponents/StyleContentLaserRemoval.css";
import { ImagesLaser1, ImagesLaser2 } from "../../../assets/images";
const ContentLaserRemoval = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="ContentLaserRemoval">
      <h4>Membuat Kulit Menjadi Sempurna.</h4>
      <p>Perawatan Kulit dengan Teknologi terkini</p>
      <Row className="RowDescLaserRemoval">
        <Col md={6} className="ColDescLaserRemoval">
          <p>
            Meremajakan kulit wajah (mengencangkan, mengecilkan pori atau
            mengurangi garis kerutan halus), mengatasi jerawat meradang,
            menghilangkan flek/melasma, menghilangkan tato, atau mengatasi tanda
            lahir. Laser menghilangkan lapisan kulit mati menggunakan sinar.
          </p>

          <p
            className="ProcedureLaserRemoval"
            onClick={() => setModalShow(true)}
          >
            Lihat Procedure
          </p>

          <ModalComponent
            show={modalShow}
            id={`2`}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col md={6} className="ColDescLaserRemoval">
          <div className="RowImgLaserRemoval">
            <Image
              className="ImagesLaserRemoval"
              src={ImagesLaser1}
              alt="imgLaserRemoval"
            />
            <Image
              className="ImagesLaserRemoval"
              src={ImagesLaser2}
              alt="imgLaserRemoval"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentLaserRemoval;
