import React from "react";
import TitleBanner from "../TitleBanner";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const BannerAboutMe = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Teks sebelah kiri */}
        <div className="flex-1 text-center md:text-left">
          <TitleBanner tipe="HeroAboutMe" />
        </div>

        {/* Gambar sebelah kanan */}
        <div className="flex-1 flex justify-center">
          <ResponsiveImage
            baseName="Teams1"
            alt="Tentang Kami - Rosidi Sulam Alis"
            width={600}
            height={400}
            folder="../../assets/images/AboutMe/"
            className="rounded-2xl shadow-lg max-w-sm w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerAboutMe;
