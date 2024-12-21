import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Image } from "react-bootstrap";
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
      <Row className="RowFacility">
        <h2>Facility Rooms</h2>
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
