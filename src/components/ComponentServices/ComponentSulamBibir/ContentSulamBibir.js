import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../../StyleComponents/StyleComponentContentSulamBibir.css";
import {
  ImagesBeforeSulamBibir,
  ImagesAfterSulamBibir,
} from "../../../assets/images";
const ContentSulamBibir = () => {
  return (
    <div>
      <div className="ContentSulamBibir">
        <Row className="RowDescSulamBibir">
          <Col md={8} className="ColDescSulamBibir">
            <p>
              <b>Sulam Bibir</b> Memberikan efek pada bibir agar menjadi lebih
              cerah, natural dan lebih terlihat sehat .
            </p>
          </Col>
        </Row>
        <Row className="RowDescSulamEyeliner2">
          <Col md={6} className="ColDescSulamBibir2">
            <Row>
              <Col className="ColDescSulamBibir3">
                <Image
                  className="ImagesSulamBibir1"
                  src={ImagesBeforeSulamBibir}
                  alt="imgSulamBibir"
                />
                <p className="Caption">Before</p>
              </Col>
              <Col className="ColDescSulamBibir3">
                <Image
                  className="ImagesSulamBibir1"
                  src={ImagesAfterSulamBibir}
                  alt="imgSulamBibir"
                />
                <p className="Caption">After</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="ColDescSulamBibir2">
            <h3>Sulam Bibir</h3>
            Sulam bibir dapat menyesuaikan garis bibir agar simetris dengan
            pemilihan warna sesuai keinginan.
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContentSulamBibir;
