import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";
// Komponen Gambar Dinamis

const ContentLaserRemoval = () => {
  return (
    <div className="w-full px-6 py-12 bg-white ContentLaserRemoval">
      {/* Title & Subtitle */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-10"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-2">
          Perawatan Laser Removal untuk Kulit Lebih Sehat & Sempurna
        </h4>
        <p className="text-lg text-gray-600">
          Menggunakan Teknologi Laser Modern untuk Hasil Optimal
        </p>
      </motion.div>

      {/* Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 RowDescLaserRemoval">
        {/* Description */}
        <motion.div
          variants={FramerMotion("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center text-gray-700 text-base leading-relaxed ColDescLaserRemoval"
        >
          <p>
            Laser Removal bermanfaat untuk meremajakan kulit wajah: membantu
            mengencangkan kulit, mengecilkan pori-pori, serta mengurangi garis
            halus dan kerutan. Selain itu, teknologi ini efektif mengatasi
            jerawat meradang, menghilangkan flek/melasma, memudarkan tato,
            hingga mengurangi tanda lahir dengan cara mengangkat lapisan kulit
            mati menggunakan energi sinar laser yang aman.
          </p>
        </motion.div>

        {/* Images */}

        <div className="flex justify-center items-start gap-6 ColDescLaserRemoval">
          {/* Kolom kiri (2 gambar) */}
          <div className="flex flex-col gap-4">
            <motion.div
              variants={FramerMotion("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <ResponsiveImage
                baseName="ImagesLaser1"
                alt="Laser Removal Treatment 1"
                className="w-40 md:w-52 rounded-lg shadow-md ImagesLaserRemoval"
              />
            </motion.div>

            <motion.div
              variants={FramerMotion("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <ResponsiveImage
                baseName="ImagesLaser2"
                alt="Laser Removal Treatment 2"
                className="w-40 md:w-52 rounded-lg shadow-md ImagesLaserRemoval"
              />
            </motion.div>
          </div>

          {/* Kolom kanan (1 gambar) */}
          <motion.div
            variants={FramerMotion("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <ResponsiveImage
              baseName="ImagesLaser0"
              alt="Laser Removal Treatment 3"
              className="w-40 md:w-52 rounded-lg shadow-md ImagesLaserRemoval"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ContentLaserRemoval;
