import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./StyleComponents/StyleHome.css";

import {
  ImgSulamAlis1,
  ImagesSulamEleyenier,
  ImagesSulamBibir1,
  ImagesLaser0,
} from "../assets/images";

const Home = () => {
  return (
    <div className="SectionHome">
      <h3>Layanan Kami</h3>
      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <h4>Sulam Alis</h4>
          <p>
            <b> Sulam alis </b>(Eyebrow) adalah teknik mendepositkan tinta
            pigmen warna ke dalam kulit menggunakan alat bahan khusus di atas
            permukaan kulit (epidermis). Setiap goresan yang dihasilkan
            menciptakan helaian menyerupai rambut–rambut yang realistis. Bentuk
            sulam alis serta pigmen warna setiap pasien dapat disesuaikan dengan
            kondisi dan sesuai keinginan pasien masing–masing.
          </p>
        </Col>
        <Col className="ColServiceDescHome">
          <Image
            className="ImgSulamAlis1Home"
            src={ImgSulamAlis1}
            alt="imgSulamAlis"
          />
        </Col>
      </Row>
      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <h4> Sulam Eyeliner</h4>
          <p>
            <b>Sulam Eyeliner</b> adalah tindakan mempertegas garis eyeliner
            bagian atas dan garis eyeliner bagian bawah. Tindakan sulam eyeliner
            disesuaikan dengan kebutuhan pasien, sebagian pasien hanya
            menginginkan sulam eyeliner di bagian atas, sebagian pasien hanya
            menginginkan sulam eyeliner di bagian bawah, sebagian ada juga yang
            menginginkan sulam eyeliner di bagian atas dan bawah. Tindakan sulam
            eyeliner bermanfaat agar mata pasien selalu kelihatan segar,
            bersinar, dan memberikan efek mata kelihatan lebih besar.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          <Image
            className="ImgSulamEyelinerHome"
            src={ImagesSulamEleyenier}
            alt="ImgSulamEyeliner"
          />
        </Col>
      </Row>
      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <h4>Sulam Bibir</h4>
          <p>
            <b> Sulam Bibir</b> adalah teknik mendepositkan pigmen warna ke
            lapisan kulit luar (epidermis) menggunakan alat bahan khusus
            sehingga hasilnya terkesan cerah natural. Tindakan sulam bibir
            bermanfaat untuk merubah bentuk dan warna bibir pasien dan
            memberikan kesan bibir lebih penuh lebih awet muda, dan lebih
            simestris.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          {/* <AnimatedOnScroll animationIn="bounceInRight"> */}
          <Image
            className="ImgSulamBibirHome"
            src={ImagesSulamBibir1}
            alt="ImgSulamBibir"
          />
          {/* </AnimatedOnScroll> */}
        </Col>
      </Row>
      <Row className="SectionServiceHome">
        <Col md={6} className="ColServiceDescHome">
          <h4>Laser Removal</h4>

          <p>
            <b> Laser Removal</b> Adalah perawatan Laser sering digunakan untuk
            meremajakan kulit wajah (mengencangkan, mengecilkan pori atau
            mengurangi garis kerutan halus), mengatasi jerawat meradang,
            menghilangkan flek/melasma, menghilangkan tato, atau mengatasi tanda
            lahir. Laser menghilangkan lapisan kulit mati menggunakan sinar.
          </p>
        </Col>
        <Col md={6} className="ColServiceDescHome">
          <Image
            className="ImgLaserRemovalHome"
            src={ImagesLaser0}
            alt="ImgLaserRemoval"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
