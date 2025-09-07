import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import ResponsiveImage from "../../../assets/images/ResponsiveImage"; // Komponen gambar dinamis
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
          <ResponsiveImage
            baseName="BannerSulamBibir"
            alt="Sulam Bibir - Rosidi Sulam Alis"
            className="w-full h-auto object-cover rounded-lg"
          />
          <HotlineBanner />
        </div>
      </div>
    </div>
  );
};

export default BannerSulamBibir;
