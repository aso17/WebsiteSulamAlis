import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";
// import "../../../StyleComponents/BannerStyleGlobal.css";

const BannerSulamAlis = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Caption kiri */}
        <div className="HeroBannerText">
          <TitleBanner className="TitleBannerGlobal" tipe="HapusSulamAlis" />
        </div>

        {/* Gambar kanan */}
        <div className="HeroBannerImage relative">
          <ResponsiveImage
            baseName="BannerHapusSulamAlis"
            alt="Sulam Alis - Rosidi Sulam Alis"
            folder="../../../assets/images/OptimizeImage/"
            width={1200}
            height={600}
            className="rounded-xl"
            priority={true}
          />
          <HotlineBanner />
        </div>
      </div>
    </div>
  );
};

export default BannerSulamAlis;
