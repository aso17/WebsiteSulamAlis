import React from "react";
import TitleBanner from "../../TitleBanner";
import HotlineBanner from "../../HotlineBanner";
import { motion } from "framer-motion";
import FramerMotion from "..//../FramerMotion";
import "../../StyleComponents/StyleBannerSulamAlis.css";

const BannerSulamAlis = () => {
  return (
    <div className="HeroSulamAlis">
      <TitleBanner className={"SulamAlis"} />
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

export default BannerSulamAlis;
