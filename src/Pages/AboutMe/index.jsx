import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerAboutMe from "../../Components/AboutMe/BannerAboutMe";
import ComponentAboutMe from "../../Components/AboutMe/ContentAboutMe";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import FooterContact from "../../Components/Contact/FooterContact";

const AboutMe = () => {
  return (
    <MainLayout>
      <BannerAboutMe />
      <ComponentAboutMe />
      <ComponentKeunggulan />
      <FooterContact />
    </MainLayout>
  );
};

export default AboutMe;
