import React from "react";
import Navigationbar from "../../Components/Navigationbar";
import BannerSulamAlis from "../../Components/ComponentServices/ComponentSulamAlis/BannerSulamAlis";
import ContentSulamAlis from "../../Components/ComponentServices/ComponentSulamAlis/ContentSulamAlis";
import ComponentFasilitas from "../../Components/ComponentFasilitas";

import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";
const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerSulamAlis />
      <ContentSulamAlis />
      <ComponentFasilitas />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
