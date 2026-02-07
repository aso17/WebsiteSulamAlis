import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const ContentHapusSulam = () => {
  return (
    <div className="w-full px-8 py-20 max-w-7xl mx-auto">
      {/* JUDUL SECTION */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12"
      >
        <h4 className="text-3xl md:text-4xl font-serif italic text-primary mb-4">
          Kembalikan Keaslian Alis Anda dengan{" "}
          <span className="text-accent">Teknik Modern</span>
        </h4>
        <div className="w-20 h-[1px] bg-accent/30" />
      </motion.div>

      {/* GRID DESKRIPSI & GALLERY UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="text-primary/70 text-lg leading-relaxed font-light">
            Hapus sulam alis lama dengan teknologi modern yang aman untuk kulit,
            kembalikan rasa percaya diri dengan tampilan alis yang natural
            kembali.
          </p>
          <p className="text-primary/60 leading-relaxed">
            Dengan peralatan khusus dan teknik laser modern, pigmen sulam alis
            lama dihapus secara hati-hati. Proses ini dirancang untuk memecah
            pigmen tanpa merusak jaringan kulit di sekitarnya, menghasilkan
            pembersihan yang efektif, minim rasa sakit, dan tidak meninggalkan
            bekas luka yang mengganggu.
          </p>

          <div className="pt-6 grid grid-cols-2 gap-4 border-t border-primary/5">
            <div>
              <p className="text-accent font-serif italic text-xl">Safe</p>
              <p className="text-[10px] uppercase tracking-widest text-primary/50">
                Minim Iritasi
              </p>
            </div>
            <div>
              <p className="text-accent font-serif italic text-xl">Clean</p>
              <p className="text-[10px] uppercase tracking-widest text-primary/50">
                Hasil Maksimal
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE GRID - Menggunakan pola yang sama dengan Sulam Alis agar seragam */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <ResponsiveImage
              baseName="ImagesSulamAlis3"
              alt="Proses laser removal"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              variants={FramerMotion("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden shadow-xl"
            >
              <ResponsiveImage
                baseName="ImagesSulamAlis2"
                alt="Detail penghapusan sulam"
                className="w-full object-cover hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>

            <motion.div
              variants={FramerMotion("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden shadow-xl"
            >
              <ResponsiveImage
                baseName="ImagesSulamAlis4"
                alt="Teknik modern removal"
                className="w-full object-cover hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* HASIL NYATA SECTION */}
      <div className="mt-32">
        <motion.div
          variants={FramerMotion("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h5 className="text-2xl md:text-3xl font-serif italic text-primary mb-4">
            Hasil Nyata – <span className="text-accent">Kepuasan Klien</span>{" "}
            Adalah Prioritas Kami
          </h5>
          <div className="w-24 h-[1px] bg-accent/20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Model0", "Model1", "Model2", "Model3"].map((baseName, i) => (
            <motion.div
              key={i}
              variants={FramerMotion("up", 0.1 * (i + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <ResponsiveImage
                baseName={baseName}
                alt={`Hasil Hapus Sulam ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentHapusSulam;
