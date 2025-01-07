import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import ModalComponent from "../../ModalComponent";
import "../../StyleComponents/StyleContentSulamEyeliner.css";
import {
  ImagesBeforeSulamEyeliner,
  ImagesSulamEleyener1,
} from "../../../assets/images";
const ContentSulamEyeliner = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="ContentSulamEyeliner">
      <h4>Membuat Bentuk Mata Menjadi Sempurna.</h4>
      <p>
        Combination Sulam Eyeliner Sulam Alis membuat lebih terlihat soft dan
        natural.
      </p>
      <Row className="RowDescSulamEyeliner">
        <Col md={6} className="ColDescSulamEyeliner">
          <p>
            Tindakan mempertegas garis eyeliner bagian atas dan bawah. Sulam
            eyeliner bermanfaat agar mata terlihat selalu segar, bersinar, dan
            memberikan efek percaya diri sepanjang hari.
          </p>
          <h5 className="Procedure" onClick={() => setModalShow(true)}>
            Lihat Procedure
          </h5>

          <ModalComponent
            show={modalShow}
            id={`2`}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col md={6} className="ColImgSulamEyeliner">
          <div className="RowImgSulamEyeliner">
            <Image
              className="ImagesSulamEyeliner"
              src={ImagesBeforeSulamEyeliner}
              alt="imgSulamEyeliner"
            />
            {/* <p className="Caption">Before</p> */}
            <Image
              className="ImagesSulamEyeliner"
              src={ImagesSulamEleyener1}
              alt="imgSulamEyeliner"
            />
            {/* <p className="Caption">After</p> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentSulamEyeliner;
