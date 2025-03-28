import Navigationbar from "../../Components/Navigationbar";
import BannerContact from "../../Components/Contact/BannerContact";
import ContentContact from "../../Components/Contact/ContentContact";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";

const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerContact />
      <ContentContact />
      <ComponentKeunggulan />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
