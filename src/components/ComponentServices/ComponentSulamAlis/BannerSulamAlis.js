import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import "../../StyleComponents/BannerStyleGlobal.css";

const BannerSulamAlis = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Caption kiri */}
        <div className="HeroBannerText">
          <TitleBanner className="TitleBannerGlobal" tipe="SulamAlis" />
        </div>

        {/* Gambar kanan */}
        <div className="HeroBannerImage">
          <img
            src={require("../../../assets/images/Services/BannerSulamAlis.webp")}
            alt="Sulam Alis - Rosidi Sulam Alis"
          />
          <HotlineBanner />
        </div>
      </div>
    </div>
  );
};

export default BannerSulamAlis;
