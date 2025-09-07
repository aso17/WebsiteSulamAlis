import Navigationbar from "../../Components/Navigationbar";
import BannerHapusSulamAlis from "../../Components/ComponentServices/ComponentHapusSulamAlis/BannerHapusSulamAlis";
import ContentSulamBibir from "../../Components/ComponentServices/ComponentHapusSulamAlis/ContentHapusSulamAlis";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";

const ServiceRemoveSulamAlis = () => {
  return (
    <div className="SectionHomeRoot">
      <Navigationbar />
      <BannerHapusSulamAlis />
      <ContentSulamBibir />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default ServiceRemoveSulamAlis;
