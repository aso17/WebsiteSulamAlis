import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import { Row, Col, Image } from "react-bootstrap";
import "../StyleComponents/StyleContact.css";
import {
  iconPhone,
  iconEmail,
  iconaddress,
  iconinstagram,
  iconfacebook,
  icontiktok,
  iconYoutube,
} from "../../assets/icons";
const FooterContactContact = () => {
  return (
    <div className="SectionContact">
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="TitleContact">
          <h2>Hubungi Kami</h2>

          <p>Bisa Konsultasi & Kunjungi Media Sosial Kami</p>
        </div>
      </motion.div>
      <Row className="RowContact">
        <Col md={4} className="ColContact">
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h5>Telp & Whatsapp</h5>
            <p>
              <Image
                src={iconPhone}
                alt="iconPhone"
                className="imgIconContact"
              />
              +62-812-795-642-11
            </p>
            <p>
              <Image
                src={iconPhone}
                alt="icoPhone"
                className="imgIconContact"
              />
              +62-812-186-617-05
            </p>

            <h5>
              <Image
                src={iconEmail}
                alt="iconEmail"
                className="imgIconContact"
              />
              Email
            </h5>
            <p>Rosidisulamalis@gmail.com</p>
            <h5>
              <Image
                src={iconaddress}
                alt="iconaddress"
                className="imgIconContact"
              />
              Address
            </h5>
            <p>Ruko Citypark No. 21 Blok J20 Cengkareng-Jakarta Barat</p>
          </motion.div>
        </Col>
        <Col md={4} className="ColContact">
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <h5>Media Sosial</h5>

            <p className="LinkMediaSosial">
              <a
                href={`https://www.instagram.com/rosidisulamalisjakarta?igsh=cmNuZXY1MG9kOTQ=`}
              >
                <Image
                  src={iconinstagram}
                  alt="iconInstagram"
                  className="imgIconContact"
                />
                rosidisulamalisjakarta
              </a>
            </p>
            <p className="LinkMediaSosial">
              <a
                href={`https://www.instagram.com/rosidisulamalisjakarta?igsh=cmNuZXY1MG9kOTQ=`}
              >
                <Image
                  src={iconfacebook}
                  alt="iconFacebook"
                  className="imgIconContact"
                />
                rosidisulamalisjakarta
              </a>
            </p>
            <p className="LinkMediaSosial">
              <a
                href={`https://www.instagram.com/rosidisulamalisjakarta?igsh=cmNuZXY1MG9kOTQ=`}
              >
                <Image
                  src={icontiktok}
                  alt="iconTiktok"
                  className="imgIconContact"
                />
                rosidisulamalisjakarta
              </a>
            </p>
            <p className="LinkMediaSosial">
              <a href={`https://youtu.be/6x8iVx0UsIw?si=qApaTCBC5--eD28n`}>
                <Image
                  src={iconYoutube}
                  alt="iconYoutube"
                  className="imgIconContact"
                />
                Rosidi Sulamalis Jakarta
              </a>
            </p>
          </motion.div>
        </Col>
        <Col md={4} className="ColContact">
          <motion.div
            variants={FramerMotion("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
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
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default FooterContactContact;
