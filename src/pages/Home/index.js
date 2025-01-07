import Navigationbar from "../../components/Navigationbar";
import HeroHome from "../../components/HeroHome";
import BestServices from "../../components/BestServices";
import ComponentHome from "../../components/Home";
import ComponentFasilitas from "../../components/ComponentFasilitas";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="SectionHomeRoot">
      <Navigationbar />
      <HeroHome />
      <BestServices />
      <ComponentHome />
      <ComponentFasilitas />
      <Contact />*
      <Footer />
    </div>
  );
};

export default Home;
