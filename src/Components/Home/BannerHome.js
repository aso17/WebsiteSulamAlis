import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import { ImgBannerHome, ImgBannerHome2 } from "../../assets/images";
import "../StyleComponents/StyleHeroHome.css";
const BannerHome = () => {
  const [index, setIndex] = useState(0);

  if (index === 1) {
    let elemnetCaption = document.querySelectorAll("#Captionid");
    elemnetCaption.forEach((e, i) => {
      e.classList.add(`Caption-AnimationHero${i}`);
    });
  }
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="SectionHeroHome">
      <Carousel
        className="CarouselImg"
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={7000}
      >
        <Carousel.Item>
          <Image
            src={ImgBannerHome2}
            layout="responsive"
            alt="Teams"
            className="ImgTeams"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={ImgBannerHome}
            layout="responsive"
            alt="Teams"
            className="ImgTeams"
          />
          <Carousel.Caption>
            <div className="Caption0" id="Captionid">
              <h2 className="CaptionText0">ENSURE THAT YOU</h2>
            </div>
            <div className="Caption1" id="Captionid">
              <h2 className="CaptionText1">EXPERIENCE OUR BEST SERVICE</h2>
            </div>

            <div className="Caption2" id="Captionid">
              <p className="CaptionText2">
                With Modern Facilities & Up-to-date Trends
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className="SectionBrand">
        <Col md={12} className="ColSectionBrand">
          <h2 className="Brand">
            Rosidi Sulam Alis & <span>Academy</span>
          </h2>
          <div className="DescBrand">
            <motion.div
              variants={FramerMotion("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <p>
                Terpercaya Menjadi Langganan Sulam Para Artis dan Selebriti
                Ibukota dan Sekitarnya.
              </p>
            </motion.div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BannerHome;
