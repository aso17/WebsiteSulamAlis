import React from "react";
import "./StyleComponents/StyleTitleBanner.css";

const TitleBanner = (props) => {
  //   console.log(props.className);
  let TitleBanner;
  let TitleBannerDesc;
  switch (props.className) {
    case `TitleBannerAboutme`:
      // code block
      TitleBanner = `ABOUT ME`;
      TitleBannerDesc = "Creative Industry In The Field Of Beauty";
      break;
    case `TitleBannerGalery`:
      // code block
      TitleBanner = `GALERY`;
      TitleBannerDesc = "Featuring Artists And Indonesian Models";
      break;
    case `TitleBannerContact`:
      // code block
      TitleBanner = `CONTACT`;
      TitleBannerDesc = "Get a Free Consultation";
      break;
    case `SulamAlis`:
      // code block
      TitleBanner = `SULAM ALIS`;
      TitleBannerDesc = "The Best Match For Your Needs";
      break;
    case `SulamBibir`:
      // code block
      TitleBanner = `SULAM BIBIR`;
      TitleBannerDesc = "Lips That Match Your Desired Shade";
      break;
    case `SulamEyeliner`:
      // code block
      TitleBanner = `SULAM EYELINER`;
      TitleBannerDesc = "Eyes Enhanced To Look Naturaly Beautiful";
      break;
    default:
      // code block
      TitleBanner = `LASER REMOVAL`;
      TitleBannerDesc = "Advanced Skin Care Treatments";
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
