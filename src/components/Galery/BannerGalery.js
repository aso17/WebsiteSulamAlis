import React from "react";
import TitleBanner from "../TitleBanner";
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
          <img
            src={require("../../assets/images/AboutMe/Teams2.webp")}
            alt="Galeri - Rosidi Sulam Alis"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerGalery;
