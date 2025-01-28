import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import { motion } from "framer-motion";
import FramerMotion from "..//../FramerMotion";
import "../../StyleComponents/StyleBannerSulamBibir.css";

const BannerSulamBibir = () => {
  return (
    <div className="HeroSulamBibir">
      <TitleBanner className={"SulamBibir"} />
      <motion.div
        variants={FramerMotion("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.9 }}
      >
        <HotlineBanner />
      </motion.div>
    </div>
  );
};

export default BannerSulamBibir;
