import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerHome from "../../Components/Home/BannerHome";
import BestServices from "../../Components/BestServices";
import ContentHome from "../../Components/Home/ContentHome";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";

const Home = () => {
  return (
    <MainLayout>
      <BannerHome />
      <BestServices />
      <ContentHome />
      <ComponentFasilitas />
      <FooterContact />
    </MainLayout>
  );
};

export default Home;
