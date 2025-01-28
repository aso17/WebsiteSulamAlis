import { motion } from "framer-motion";
import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import FramerMotion from "..//../FramerMotion";
import "../../StyleComponents/StyleBannerSulamEyeliner.css";

const BannerSulamEyeliner = () => {
  return (
    <div className="HeroSulamEyeLiner">
      <TitleBanner className={"SulamEyeliner"} />
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

export default BannerSulamEyeliner;
