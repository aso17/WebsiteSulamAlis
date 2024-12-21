import Navigationbar from "../../components/Navigationbar";
import BannerSulamBibir from "../../components/ComponentServices/ComponentSulamBibir/BannerSulamBibir";
import ContentSulamBibir from "../../components/ComponentServices/ComponentSulamBibir/ContentSulamBibir";
import ComponentKeunggulan from "../../components/ComponentKeunggulan";
import ComponentFasilitas from "../../components/ComponentFasilitas";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerSulamBibir />
      <ContentSulamBibir />
      <ComponentKeunggulan />
      <ComponentFasilitas />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
