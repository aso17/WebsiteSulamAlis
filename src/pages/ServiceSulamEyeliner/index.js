import React from "react";
import Navigationbar from "../../components/Navigationbar";
import ComponentKeunggulan from "../../components/ComponentKeunggulan";
import ComponentFasilitas from "../../components/ComponentFasilitas";
import BannerSulamEyeliner from "../../components/ComponentServices/ComponentSulamEyeliner/BannerSulamEyeliner";
import ContentSulamEyeliner from "../../components/ComponentServices/ComponentSulamEyeliner/ContentSulamEyeliner";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerSulamEyeliner />
      <ContentSulamEyeliner />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
