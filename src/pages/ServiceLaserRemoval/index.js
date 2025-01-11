import Navigationbar from "../../Components/Navigationbar";
import BannerLaserRemoval from "../../Components/ComponentServices/ComponentLaserRemoval/BannerLaserRemoval";
import ContentLaserRemoval from "../../Components/ComponentServices/ComponentLaserRemoval/ContentLaserRemoval";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";

const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerLaserRemoval />
      <ContentLaserRemoval />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
