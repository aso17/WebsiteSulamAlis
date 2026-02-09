import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerHome from "../../Components/Home/BannerHome";
import BestServices from "../../Components/BestServices";
import ContentHome from "../../Components/Home/ContentHome";
import TestimonyCelebrity from "../../Components/Testimony/TestimonyCelebrity";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";

const Home = () => {
  return (
    <MainLayout>
      <BannerHome />
      <BestServices />
      <ContentHome />
      <ComponentFasilitas />
      <TestimonyCelebrity />
      <FooterContact />
    </MainLayout>
  );
};

export default Home;
