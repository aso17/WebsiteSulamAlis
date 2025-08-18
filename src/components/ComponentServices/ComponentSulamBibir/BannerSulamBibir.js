import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import "../../StyleComponents/BannerStyleGlobal.css";

const BannerSulamBibir = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Caption kiri */}
        <div className="HeroBannerText">
          <TitleBanner className="TitleBannerGlobal" tipe="SulamBibir" />
        </div>

        {/* Gambar kanan */}
        <div className="HeroBannerImage">
          <img
            src={require("../../../assets/images/Services/BannerSulamBibir.webp")}
            alt="Sulam Bibir - Rosidi Sulam Alis"
          />
          <HotlineBanner />
        </div>
      </div>
    </div>
  );
};

export default BannerSulamBibir;
