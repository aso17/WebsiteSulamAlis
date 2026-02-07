import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerLaserRemoval from "../../Components/ComponentServices/ComponentLaserRemoval/BannerLaserRemoval";
import ContentLaserRemoval from "../../Components/ComponentServices/ComponentLaserRemoval/ContentLaserRemoval";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";

const LaserRemoval = () => {
  return (
    <MainLayout>
      <BannerLaserRemoval />
      <ContentLaserRemoval />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <FooterContact />
    </MainLayout>
  );
};

export default LaserRemoval;
