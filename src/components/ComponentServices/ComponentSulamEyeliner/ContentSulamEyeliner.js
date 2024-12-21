import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../../StyleComponents/StyleContentSulamEyeliner.css";
import {
  ImagesBeforeSulamEyeliner,
  ImagesSulamEleyener1,
} from "../../../assets/images";
const ContentSulamEyeliner = () => {
  return (
    <div className="ContentSulamEyeliner">
      <Row className="RowDescSulamEyeliner">
        <Col md={8} className="ColDescSulamEyeliner">
          <p>
            <b>Sulam Eyeliner</b> adalah tindakan mempertegas garis eyeliner
            bagian atas dan bawah. Sulam eyeliner bermanfaat agar mata terlihat
            selalu segar, bersinar, dan memberikan efek percaya diri sepanjang
            hari.
          </p>
        </Col>
      </Row>
      <Row className="RowDescSulamEyeliner2">
        <Col md={6} className="ColDescSulamEyeliner2">
          <Row>
            <Col>
              <Image
                className="ImagesSulamEleyener1"
                src={ImagesBeforeSulamEyeliner}
                alt="imgSulamEyeliner"
              />
              <p className="Caption">Before</p>
            </Col>
            <Col>
              <Image
                className="ImagesSulamEleyener1"
                src={ImagesSulamEleyener1}
                alt="imgSulamEyeliner"
              />
              <p className="Caption">After</p>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="ColDescSulamEyeliner2">
          <h3>Sulam Eyeliner Natural</h3>
          Combination Sulam Eyeliner Sulam Alis membuat lebih terlihat soft dan
          natural.
        </Col>
      </Row>
    </div>
  );
};

export default ContentSulamEyeliner;
