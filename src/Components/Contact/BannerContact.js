import React from "react";
import TitleBanner from "../TitleBanner";
import "../StyleComponents/BannerStyleGlobal.css"; // gunakan style global

const BannerContact = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Bagian teks */}
        <div className="HeroBannerText">
          <TitleBanner className="TitleBannerContact" tipe="Kontak" />
        </div>

        {/* Bagian gambar */}
        <div className="HeroBannerImage">
          <img
            src={require("../../assets/images/BannerContact.webp")}
            alt="Banner Contact - Rosidi Sulam Alis"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
