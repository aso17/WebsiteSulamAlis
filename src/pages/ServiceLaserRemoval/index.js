import Navigationbar from "../../components/Navigationbar";
import BannerLaserRemoval from "../../components/ComponentServices/ComponentLaserRemoval/BannerLaserRemoval";
import ContentLaserRemoval from "../../components/ComponentServices/ComponentLaserRemoval/ContentLaserRemoval";
import ComponentKeunggulan from "../../components/ComponentKeunggulan";
import ComponentFasilitas from "../../components/ComponentFasilitas";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerLaserRemoval />
      <ContentLaserRemoval />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
