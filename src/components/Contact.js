import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./StyleComponents/StyleContact.css";
import {
  iconPhone,
  iconEmail,
  iconaddress,
  iconinstagram,
  iconfacebook,
  icontiktok,
  iconLinkedIn,
} from "../assets/icons";
const Contact = () => {
  return (
    <div className="SectionContact">
      <Row className="RowContact">
        <h3>Hubungi Kami</h3>
        <Col md={4} className="ColContact">
          <h5>Telp & Whatsapp</h5>
          <p>
            <Image src={iconPhone} alt="iconPhone" className="imgIconContact" />
            +62-812-795-642-11
          </p>
          <p>
            <Image src={iconPhone} alt="icoPhone" className="imgIconContact" />
            +62-812-186-617-05
          </p>
          <h5>Email</h5>
          <p>
            <Image src={iconEmail} alt="iconEmail" className="imgIconContact" />
            Rosidisulamalis@gmail.com
          </p>
          <h5>Address</h5>
          <p>
            <Image
              src={iconaddress}
              alt="iconaddress"
              className="imgIconContact"
            />
            Ruko Citypark No. 21 Blok J20 Cengkareng-Jakarta Barat
          </p>
        </Col>
        <Col md={4} className="ColContact">
          <h5>Media Sosial</h5>

          <p>
            <a href="#">
              <Image
                src={iconinstagram}
                alt="iconInstagram"
                className="imgIconContact"
              />
            </a>
            Instagram
          </p>
          <p>
            <a href="#">
              <Image
                src={iconfacebook}
                alt="iconFacebook"
                className="imgIconContact"
              />
            </a>
            Facebook
          </p>
          <p>
            <a href="#">
              <Image
                src={icontiktok}
                alt="iconTiktok"
                className="imgIconContact"
              />
            </a>
            Tiktok
          </p>
          <p>
            <a href="#">
              <Image
                src={iconLinkedIn}
                alt="iconLinkedIn"
                className="imgIconContact"
              />
            </a>
            LinkedIn
          </p>
        </Col>
        <Col md={4} className="ColContact">
          <h5>Jam Operational</h5>

          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minggu</td>
                <td>:</td>
                <td>09.00-20.00</td>
              </tr>
              <tr>
                <td>Senin</td>
                <td>:</td>
                <td>Tutup</td>
              </tr>
              <tr>
                <td>Selasa</td>
                <td>:</td>
                <td>09.00-20.00</td>
              </tr>
              <tr>
                <td>Rabu</td>
                <td>:</td>
                <td>09.00-20.00</td>
              </tr>
              <tr>
                <td>Kamis</td>
                <td>:</td>
                <td>09.00-20.00</td>
              </tr>
              <tr>
                <td>Jum'at</td>
                <td>:</td>
                <td>09.00-20.00</td>
              </tr>
              <tr>
                <td>Sabtu</td>
                <td>:</td>
                <td>09.00-20.00</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
