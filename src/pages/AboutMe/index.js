import Navigationbar from "../../components/Navigationbar";
import ComponentAboutMe from "../../components/AboutMe";
import ComponentKeunggulan from "../../components/ComponentKeunggulan";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const AboutMe = () => {
  return (
    <div>
      <Navigationbar />
      <ComponentAboutMe />
      <ComponentKeunggulan />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutMe;
