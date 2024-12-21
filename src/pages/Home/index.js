import Navigationbar from "../../components/Navigationbar";
import Hero from "../../components/Hero";
import ComponentHome from "../../components/Home";
import ComponentFasilitas from "../../components/ComponentFasilitas";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navigationbar />
      <Hero />
      <ComponentHome />
      <ComponentFasilitas />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
