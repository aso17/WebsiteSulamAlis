import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerContact from "../../Components/Contact/BannerContact";
import ContentContact from "../../Components/Contact/ContentContact";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import FooterContact from "../../Components/Contact/FooterContact";

const Contact = () => {
  return (
    <MainLayout>
      <BannerContact />
      <ContentContact />
      <ComponentKeunggulan />
      <FooterContact />
    </MainLayout>
  );
};

export default Contact;
