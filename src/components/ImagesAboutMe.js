import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import { Receptionist, Teams1, Teams2 } from "../assets/images";
const ImagesAboutMe = () => {
  return (
    <Carousel data-bs-theme="" className="CarouselImg">
      <Carousel.Item>
        <Image src={Receptionist} alt="Teams" className="ImgTeams" />
        <Carousel.Caption>{/* <h3>First slide label</h3> */}</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Teams1} alt="Teams" className="ImgTeams1" />
        <Carousel.Caption>{/* <h3>Second slide label</h3> */}</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Teams2} alt="Teams" className="ImgTeams2" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImagesAboutMe;
