import Navigationbar from "../../Components/Navigationbar";
import BannerHome from "../../Components/Home/BannerHome";
import BestServices from "../../Components/BestServices";
import ContentHome from "../../Components/Home/ContentHome";
import ComponentFasilitas from "../../Components/ComponentFasilitas";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";

const Home = () => {
  return (
    <div className="SectionHomeRoot">
      <Navigationbar />
      <BannerHome />
      <BestServices />
      <ContentHome />
      <ComponentFasilitas />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default Home;
