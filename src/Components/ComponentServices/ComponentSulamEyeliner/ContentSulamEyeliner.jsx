import React, { useState } from "react";
import ModalComponent from "../../ModalComponent";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const ContentSulamEyeliner = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="w-full px-8 py-20 max-w-7xl mx-auto bg-white">
      {/* HEADING SECTION */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 border-l-4 border-accent pl-6"
      >
        <h4 className="text-3xl md:text-4xl font-serif italic text-primary mb-4">
          Membuat Bentuk Mata Menjadi{" "}
          <span className="text-accent">Sempurna</span>
        </h4>
        <p className="text-primary/60 text-lg max-w-2xl font-light">
          Kombinasi Sulam Eyeliner & Sulam Alis menciptakan tampilan wajah yang
          lebih hidup, tegas, namun tetap terlihat lembut dan natural.
        </p>
      </motion.div>

      {/* CONTENT ROW */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - DESKRIPSI */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary/70 leading-relaxed text-lg font-light">
              Tindakan mempertegas garis mata bagian atas dan bawah untuk
              memberikan efek mata yang lebih besar dan bersinar.
            </p>
            <p className="text-primary/60 leading-relaxed text-sm">
              Sulam eyeliner sangat bermanfaat bagi Anda yang ingin tampil segar
              sepanjang hari tanpa repot mengaplikasikan riasan mata. Dengan
              teknik presisi tinggi, kami memberikan garis yang halus dan
              natural, meningkatkan rasa percaya diri Anda dari bangun tidur
              hingga beraktivitas kembali.
            </p>
          </div>

          {/* BUTTON MODERN */}
          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <button
              onClick={() => setModalShow(true)}
              className="group relative px-8 py-3 overflow-hidden rounded-full bg-primary text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <span className="relative z-10 font-medium tracking-widest text-xs uppercase">
                Lihat Prosedur
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

          <ModalComponent
            show={modalShow}
            id={`3`}
            onHide={() => setModalShow(false)}
          />
        </div>

        {/* RIGHT SIDE - PORTFOLIO MATA (BEFORE/AFTER) */}
        <div className="relative group">
          <div className="absolute -inset-4 border border-accent/10 rounded-[2rem] pointer-events-none group-hover:scale-105 transition-transform duration-700" />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-primary/5">
                <ResponsiveImage
                  baseName="ImagesBeforeSulamEyeliner"
                  alt="Before Sulam Eyeliner"
                  className="w-full aspect-video object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary/40 font-bold text-center italic">
                Initial Eye
              </p>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-xl border border-accent/20">
                <ResponsiveImage
                  baseName="ImagesSulamEyeliner1"
                  alt="After Sulam Eyeliner"
                  className="w-full aspect-video object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold text-center italic">
                Defined Result
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HASIL NYATA / MODEL SECTION - Menjaga konsistensi antar halaman */}
      <div className="mt-32">
        <motion.div
          variants={FramerMotion("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h5 className="text-2xl md:text-3xl font-serif italic text-primary mb-4">
            Look Inspiration –{" "}
            <span className="text-accent">Eyeliner Perfection</span>
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
                alt={`Hasil Eyeliner Model ${i + 1}`}
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

export default ContentSulamEyeliner;
