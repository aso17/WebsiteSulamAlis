import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerSulamBibir from "../../Components/ComponentServices/ComponentSulamBibir/BannerSulamBibir";
import ContentSulamBibir from "../../Components/ComponentServices/ComponentSulamBibir/ContentSulamBibir";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";

const SulamBibir = () => {
  return (
    <MainLayout>
      <BannerSulamBibir />
      <ContentSulamBibir />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <FooterContact />
    </MainLayout>
  );
};

export default SulamBibir;
