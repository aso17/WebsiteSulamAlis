import Navigationbar from "../../components/Navigationbar";
import BannerAboutMe from "../../components/AboutMe/BannerAboutMe";
import ComponentAboutMe from "../../components/AboutMe/ContentAboutMe";
import ComponentKeunggulan from "../../components/ComponentKeunggulan";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const AboutMe = () => {
  return (
    <div>
      <Navigationbar />
      <BannerAboutMe />
      <ComponentAboutMe />
      <ComponentKeunggulan />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutMe;
