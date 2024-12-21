import Navigationbar from "../../components/Navigationbar";
import BannerLaserRemoval from "../../components/ComponentServices/ComponentLaserRemoval/BannerLaserRemoval";
import ComponentLaserRemoval from "../../components/ComponentServices/ComponentLaserRemoval/ComponentLaserRemoval";
import ComponentKeunggulan from "../../components/ComponentKeunggulan";
import ComponentFasilitas from "../../components/ComponentFasilitas";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerLaserRemoval />
      <ComponentLaserRemoval />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
