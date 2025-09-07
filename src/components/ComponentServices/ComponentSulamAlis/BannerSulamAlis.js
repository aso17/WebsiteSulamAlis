import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";
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
          <ResponsiveImage
            baseName="BannerSulamAlis"
            alt="Sulam Alis - Rosidi Sulam Alis"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <HotlineBanner />
        </div>
      </div>
    </div>
  );
};

export default BannerSulamAlis;
