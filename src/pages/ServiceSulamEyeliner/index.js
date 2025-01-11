import React from "react";
import Navigationbar from "../../Components/Navigationbar";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import BannerSulamEyeliner from "../../Components/ComponentServices/ComponentSulamEyeliner/BannerSulamEyeliner";
import ContentSulamEyeliner from "../../Components/ComponentServices/ComponentSulamEyeliner/ContentSulamEyeliner";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";
const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerSulamEyeliner />
      <ContentSulamEyeliner />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
