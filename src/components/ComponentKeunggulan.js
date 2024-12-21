import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { iconDocument, iconPaint, iconTeams } from "../assets/icons";
import "./StyleComponents/StyleComponentKeunggulan.css";
const ComponentKeunggulan = () => {
  return (
    <div>
      <div className="SectionKeunggulan">
        <Row>
          <Col md={12}>
            <h4 className="HeadKeunggulan">Why Us?</h4>
            <h5 className="HeadBrand">
              Keunggulan Rosidi Sulam Alis & Academy
            </h5>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <div className="DetailKeunggulan">
              <Image className="iconImage" src={iconTeams} />
              <p>
                Seluruh Tim Rosidi Sulam Alis adalah para ahli dibidangnya dan
                memiliki SOP (Standard Operational Procedure).
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="DetailKeunggulan">
              <Image className="iconImage" src={iconPaint} />
              <p>
                Semua alat & bahan berkualitas tinggi. Bahan herbal alami dipadu
                dengan jarum khusus & steril.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="DetailKeunggulan">
              <Image className="iconImage" src={iconDocument} />
              <p>
                Setelah pelatihan selesai, seluruh siswa akan mendapatkan
                Sertifikat Diknas Resmi Indonesia.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ComponentKeunggulan;
