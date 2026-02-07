import Navigationbar from "../../Components/Navigationbar";
import BannerAcademy from "../../Components/Academy/BannerAcademy";
import ContectAcademy from "../../Components/Academy/ContectAcademy";
import FooterContact from "../../Components/Contact/FooterContact";
import FooterComponent from "../../Components/FooterComponent";

const index = () => {
  return (
    <div>
      <Navigationbar />
      <BannerAcademy />
      <ContectAcademy />
      <FooterContact />
      <FooterComponent />
    </div>
  );
};

export default index;
