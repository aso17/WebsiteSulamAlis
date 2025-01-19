import React from "react";
import Navigationbar from "../../Components/Navigationbar";
import BannerGalery from "../../Components/Galery/BannerGalery";
import ContentGalery from "../../Components/Galery/ContentGalery";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";
const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerGalery />
      <ContentGalery />
      <ComponentFasilitas />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
