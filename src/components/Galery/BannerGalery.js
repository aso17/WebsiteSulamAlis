import React from "react";
import TitleBanner from "../TitleBanner";
import ResponsiveImage from "../../assets/images/ResponsiveImage";
import "../StyleComponents/BannerStyleGlobal.css"; // gunakan style global

const BannerGalery = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Teks Judul */}
        <div className="HeroBannerText">
          <TitleBanner className="TitleBannerGalery" tipe="Galeri" />
        </div>

        {/* Gambar Galeri */}
        <div className="HeroBannerImage">
          <ResponsiveImage
            baseName="Teams2"
            alt="Galeri - Rosidi Sulam Alis"
            className="w-full h-auto object-cover"
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerGalery;
