import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import ModalComponent from "../../ModalComponent";
import "../../StyleComponents/StyleContentSulamBibir.css";
import {
  ImagesBeforeSulamBibir,
  ImagesAfterSulamBibir,
} from "../../../assets/images";
const ContentSulamBibir = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="ContentSulamBibir">
      <h4>Membuat Bentuk Bibir Menjadi Sempurna.</h4>
      <p>Memberikan Efek Pada Bibir Menjadi Lebih Cerah & Natural</p>
      <Row className="RowDescSulamBibir">
        <Col md={6} className="ColDescSulamBibir">
          <p>
            Sulam bibir dapat menyesuaikan garis bibir agar simetris dengan
            pemilihan warna sesuai keinginan.
          </p>

          <p className="ProcedureSulamBibir" onClick={() => setModalShow(true)}>
            Lihat Procedure
          </p>

          <ModalComponent
            show={modalShow}
            id={`2`}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col md={6} className="ColDescSulamBibir">
          <div className="RowImgSulamBibir">
            <Image
              className="ImagesSulamBibir"
              src={ImagesBeforeSulamBibir}
              alt="imgSulamBibir"
            />
            <Image
              className="ImagesSulamBibir"
              src={ImagesAfterSulamBibir}
              alt="imgSulamBibir"
            />
          </div>
          <div className="RowCaption">
            <div className="Caption">
              <p>Before</p>
            </div>
            <div className="Caption">
              <p>After</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentSulamBibir;
