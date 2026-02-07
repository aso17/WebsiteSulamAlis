import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerGalery from "../../Components/Galery/BannerGalery";
import ContentGalery from "../../Components/Galery/ContentGalery";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";

const Galery = () => {
  return (
    <MainLayout>
      <BannerGalery />
      <ContentGalery />
      <ComponentFasilitas />
      <FooterContact />
    </MainLayout>
  );
};

export default Galery;
