import React from "react";
import Navigationbar from "../../components/Navigationbar";
import BannerSulamAlis from "../../components/ComponentServices/ComponentSulamAlis/BannerSulamAlis";
import ContentSulamAlis from "../../components/ComponentServices/ComponentSulamAlis/ContentSulamAlis";
import ComponentKeunggulan from "../../components/ComponentKeunggulan";
import ComponentFasilitas from "../../components/ComponentFasilitas";

import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerSulamAlis />
      <ContentSulamAlis />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
