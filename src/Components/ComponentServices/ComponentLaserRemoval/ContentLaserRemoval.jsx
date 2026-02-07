import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const ContentLaserRemoval = () => {
  return (
    <div className="w-full px-8 py-20 max-w-7xl mx-auto bg-white">
      {/* TITLE & SUBTITLE */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h4 className="text-3xl md:text-4xl font-serif italic text-primary mb-4">
          Perawatan Laser untuk Kulit{" "}
          <span className="text-accent">Sehat & Sempurna</span>
        </h4>
        <div className="w-20 h-[1px] bg-accent/30 mx-auto mb-6" />
        <p className="text-primary/60 text-lg font-light max-w-2xl mx-auto">
          Menggunakan Teknologi Laser Modern untuk transformasi kulit yang
          optimal dan aman.
        </p>
      </motion.div>

      {/* CONTENT ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* DESCRIPTION SIDE */}
        <motion.div
          variants={FramerMotion("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-primary/70 leading-relaxed"
        >
          <p className="text-lg font-light">
            Laser Removal bermanfaat untuk meremajakan kulit wajah secara
            menyeluruh. Teknologi ini bekerja dengan mengirimkan energi sinar
            laser yang presisi untuk merangsang regenerasi kulit alami Anda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <ul className="space-y-2 text-sm border-l border-accent/20 pl-4">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" />{" "}
                Mengencangkan Kulit
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> Mengecilkan
                Pori-pori
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> Mengurangi
                Garis Halus
              </li>
            </ul>
            <ul className="space-y-2 text-sm border-l border-accent/20 pl-4">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> Mengatasi
                Flek & Tato
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> Terapi
                Jerawat Meradang
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> Memudarkan
                Tanda Lahir
              </li>
            </ul>
          </div>
        </motion.div>

        {/* IMAGES SIDE - Menggunakan layout asimetris yang elegan */}
        <div className="flex justify-center items-center gap-4">
          {/* Kolom kiri (2 gambar kecil) */}
          <div className="flex flex-col gap-4 mt-8">
            <motion.div
              variants={FramerMotion("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl border border-primary/5 hover:scale-105 transition-transform duration-700"
            >
              <ResponsiveImage
                baseName="ImagesLaser1"
                alt="Laser Removal Treatment 1"
                className="w-40 md:w-52 h-52 md:h-64 object-cover"
              />
            </motion.div>

            <motion.div
              variants={FramerMotion("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl border border-primary/5 hover:scale-105 transition-transform duration-700"
            >
              <ResponsiveImage
                baseName="ImagesLaser2"
                alt="Laser Removal Treatment 2"
                className="w-40 md:w-52 h-52 md:h-64 object-cover"
              />
            </motion.div>
          </div>

          {/* Kolom kanan (1 gambar besar/utama) */}
          <motion.div
            variants={FramerMotion("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-accent/10 hover:scale-105 transition-transform duration-700"
          >
            <ResponsiveImage
              baseName="ImagesLaser0"
              alt="Laser Removal Treatment Main"
              className="w-48 md:w-64 h-[28rem] md:h-[36rem] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentLaserRemoval;
