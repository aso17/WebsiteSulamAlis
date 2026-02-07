import React from "react";
import MainLayout from "../../layout/MainLayout";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import BannerSulamEyeliner from "../../Components/ComponentServices/ComponentSulamEyeliner/BannerSulamEyeliner";
import ContentSulamEyeliner from "../../Components/ComponentServices/ComponentSulamEyeliner/ContentSulamEyeliner";
import FooterContact from "../../Components/Contact/FooterContact";

const SulamEyeliner = () => {
  return (
    <MainLayout>
      <BannerSulamEyeliner />
      <ContentSulamEyeliner />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <FooterContact />
    </MainLayout>
  );
};

export default SulamEyeliner;
