import { motion } from "framer-motion";
import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import FramerMotion from "../../FramerMotion";
import "../../StyleComponents/BannerStyleGlobal.css"; // pakai style global

const BannerLaserRemoval = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Bagian teks */}
        <div className="HeroBannerText">
          <TitleBanner className="TitleBannerLaserRemoval" tipe="LaserRemoval" />
        </div>

        {/* Bagian gambar */}
        <div className="HeroBannerImage">
          <img
            src={require("../../../assets/images/Services/BannerSulamRemoval.webp")}
            alt="Laser Removal - Rosidi Sulam Alis"
          />


          {/* Hotline pakai animasi */}
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

export default BannerLaserRemoval;
