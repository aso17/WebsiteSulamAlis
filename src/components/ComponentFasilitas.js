import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import {
  AssistantRoom,
  WaitingRoom,
  VipRoom,
  FrontOffice,
  LaserRoom,
} from "../assets/images";
import "./StyleComponents/StyleFasilitas.css";
const ComponentFasilitas = () => {
  return (
    <div className="SectionFascility">
      <motion.div
        variants={FramerMotion("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="TitleFacility">
          <h2>Facility Rooms</h2>
          <p>Kenyamanan Pelanggan Paling Utama</p>
        </div>
      </motion.div>

      <Row className="RowFacility">
        <Col md={8}>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <h3 className="captionFacility">Assistant Room</h3>
              </Carousel.Caption>
              <Image
                src={AssistantRoom}
                alt="ImgFacility"
                className="ImgFacility"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3 className="captionFacility">Waiting Room</h3>
              </Carousel.Caption>
              <Image
                src={WaitingRoom}
                alt="ImgFacility"
                className="ImgFacility"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3 className="captionFacility">VIP Room</h3>
              </Carousel.Caption>
              <Image src={VipRoom} alt="ImgFacility" className="ImgFacility" />
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3 className="captionFacility"> Front Office</h3>
              </Carousel.Caption>
              <Image
                src={FrontOffice}
                alt="ImgFacility"
                className="ImgFacility"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3 className="captionFacility">Laser Room</h3>
              </Carousel.Caption>
              <Image
                src={LaserRoom}
                alt="ImgFacility"
                className="ImgFacility"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default ComponentFasilitas;
