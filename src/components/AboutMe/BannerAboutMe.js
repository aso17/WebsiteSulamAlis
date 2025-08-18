import TitleBanner from "../TitleBanner";
import "../StyleComponents/StyleBannerAboutMe.css";

const BannerAboutMe = () => {
  return (
    <div className="HeroAboutMe">
      <div className="HeroContent">
        {/* Teks sebelah kiri */}
        <div className="HeroText">
          <TitleBanner className="TitleBannerAboutme" tipe="HeroAboutMe" />
        </div>

        {/* Gambar sebelah kanan */}
        <div className="HeroImage">
          <img
            src={require("../../assets/images/AboutMe/Teams1.webp")}
            alt="Tentang Kami - Rosidi Sulam Alis"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerAboutMe;
