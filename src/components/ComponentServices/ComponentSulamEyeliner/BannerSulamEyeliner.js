import { motion } from "framer-motion";
import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import FramerMotion from "../../FramerMotion";
import "../../StyleComponents/BannerStyleGlobal.css"; // gunakan style global biar seragam

const BannerSulamEyeliner = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Teks di kiri */}
        <div className="HeroBannerText">
          <TitleBanner className={"SulamEyeliner"} tipe="SulamEyeliner" />
        </div>

        {/* Gambar di kanan */}
        <div className="HeroBannerImage">
          <img
            src={require("../../../assets/images/Services/BannerSulamEyeliner.webp")}
            alt="Sulam Eyeliner - Rosidi Sulam Alis"
          />

          {/* Hotline animasi */}
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.9 }}
          >
            <HotlineBanner />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerSulamEyeliner;
