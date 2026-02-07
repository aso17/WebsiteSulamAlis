import React from "react";
import MainLayout from "../../layout/MainLayout";
import BannerHapusSulamAlis from "../../Components/ComponentServices/ComponentHapusSulamAlis/BannerHapusSulamAlis";
import ContentHapusSulamAlis from "../../Components/ComponentServices/ComponentHapusSulamAlis/ContentHapusSulamAlis";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import FooterContact from "../../Components/Contact/FooterContact";

const ServiceRemoveSulamAlis = () => {
  return (
    <MainLayout>
      <BannerHapusSulamAlis />
      <ContentHapusSulamAlis />
      <ComponentKeunggulan />
      <FooterContact />
    </MainLayout>
  );
};

export default ServiceRemoveSulamAlis;
