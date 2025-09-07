import { motion } from "framer-motion";
import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";
// Komponen dinamis
import "../../StyleComponents/BannerStyleGlobal.css";

const BannerLaserRemoval = () => {
  return (
    <div className="HeroBanner">
      <div className="HeroBannerContent">
        {/* Bagian teks kiri */}
        <div className="HeroBannerText">
          <TitleBanner className="TitleBannerLaserRemoval" tipe="LaserRemoval" />
        </div>

        {/* Gambar kanan + hotline */}
        <div className="HeroBannerImage relative">
          <ResponsiveImage
            baseName="BannerSulamRemoval"
            alt="Laser Removal - Rosidi Sulam Alis"
            className="w-full h-auto object-cover"
          />

          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.9 }}
            className="absolute bottom-4 right-4"
          >
          </motion.div>
          <HotlineBanner />
        </div>
      </div>
    </div>
  );
};

export default BannerLaserRemoval;
