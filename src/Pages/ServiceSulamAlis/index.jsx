import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerSulamAlis from "../../Components/ComponentServices/ComponentSulamAlis/BannerSulamAlis";
import ContentSulamAlis from "../../Components/ComponentServices/ComponentSulamAlis/ContentSulamAlis";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";

const SulamAlis = () => {
  return (
    <MainLayout>
      <BannerSulamAlis />
      <ContentSulamAlis />
      <ComponentFasilitas />
      <FooterContact />
    </MainLayout>
  );
};

export default SulamAlis;
