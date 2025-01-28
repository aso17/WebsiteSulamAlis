import React from "react";
import "./StyleComponents/StyleTitleBanner.css";

const TitleBanner = (props) => {
  //   console.log(props.className);
  let TitleBanner;
  let TitleBannerDesc;
  switch (props.className) {
    case `SulamAlis`:
      // code block
      TitleBanner = `SULAM ALIS`;
      TitleBannerDesc = "Sulam Alis Terbaik Susuai Dengan Keinginan";
      break;
    case `SulamBibir`:
      // code block
      TitleBanner = `SULAM BIBIR`;
      TitleBannerDesc = "Bibir Indah Dengan Warna Yang Diinginkan";
      break;
    case `SulamEyeliner`:
      // code block
      TitleBanner = `SULAM EYELINER`;
      TitleBannerDesc = "Mata menjadi Terlihat Indah & Natural";
      break;
    default:
      // code block
      TitleBanner = `LASER REMOVAL`;
      TitleBannerDesc = "Hapus Tattoo Permanent, Mengencangkan Kulit dll";
  }
  return (
    <>
      <div className="TitleBanner">
        <h2>{TitleBanner}</h2>
      </div>
      <div className="TitleBannerDesc">
        <p>{TitleBannerDesc}</p>
      </div>
    </>
  );
};

export default TitleBanner;
