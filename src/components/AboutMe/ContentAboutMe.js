import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const ContentAboutMe = () => {
  return (
    <div className="py-14 px-6 max-w-6xl mx-auto">
      {/* Judul */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl font-extrabold relative inline-block text-gray-800">
          Rosidi Sulam Alis & <span className="text-pink-600">Academy</span>
          {/* underline animasi */}
          <motion.div
            className="absolute left-0 bottom-[-6px] h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </h3>
      </motion.div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Terpercaya di Indonesia sejak tahun 2015 dalam bidang kecantikan sulam.{" "}
            <span className="font-semibold">Rosidi Sulam Alis & Academy</span> telah melahirkan banyak alumni yang handal dan sukses di bidangnya.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Segera kunjungi{" "}
            <span className="font-semibold">Rosidi Sulam Alis & Academy</span> dan temukan penampilan baru Anda yang semakin cantik, cerah, dan bercahaya sepanjang hari.
          </p>

          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white border border-gray-200 p-5 rounded-xl shadow-md"
          >
            <p className="font-semibold text-gray-700">Founder & Owner</p>
            <p className="text-2xl font-bold text-gray-900">Master Rosidi</p>
            <p className="text-pink-600 font-medium">Konsultasi Gratis</p>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          variants={FramerMotion("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center"
        >
          <ResponsiveImage
            baseName="Owner"
            alt="Founder Rosidi"
            width={600}
            height={400}
            folder="../../assets/images/OptimizeImage/"
            className="rounded-2xl shadow-lg max-w-sm w-full hover:scale-105 transition-transform duration-500"
            priority={false}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContentAboutMe;
