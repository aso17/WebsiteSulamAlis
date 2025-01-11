import Navigationbar from "../../Components/Navigationbar";
import BannerAboutMe from "../../Components/AboutMe/BannerAboutMe";
import ComponentAboutMe from "../../Components/AboutMe/ContentAboutMe";
import ComponentKeunggulan from "../../Components/ComponentKeunggulan";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";
const AboutMe = () => {
  return (
    <div>
      <Navigationbar />
      <BannerAboutMe />
      <ComponentAboutMe />
      <ComponentKeunggulan />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default AboutMe;
