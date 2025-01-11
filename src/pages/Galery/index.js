import React from "react";
import Navigationbar from "../../Components/Navigationbar";
import BannerGalery from "../../Components/Galery/BannerGalery";
import ContentGalery from "../../Components/Galery/ContentGalery";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";
const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerGalery />
      <ContentGalery />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
