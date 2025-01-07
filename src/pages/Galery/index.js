import React from "react";
import Navigationbar from "../../components/Navigationbar";
import BannerGalery from "../../components/Galery/BannerGalery";
import ContentGalery from "../../components/Galery/ContentGalery";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerGalery />
      <ContentGalery />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
