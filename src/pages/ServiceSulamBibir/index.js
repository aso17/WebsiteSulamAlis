import Navigationbar from "../../Components/Navigationbar";
import BannerSulamBibir from "../../Components/ComponentServices/ComponentSulamBibir/BannerSulamBibir";
import ContentSulamBibir from "../../Components/ComponentServices/ComponentSulamBibir/ContentSulamBibir";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";

const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerSulamBibir />
      <ContentSulamBibir />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
