import React from "react";
import { motion } from "framer-motion";
import ModalComponent from "../../ModalComponent";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const ContentSulamBibir = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="w-full px-8 py-20 max-w-7xl mx-auto bg-white">
      {/* HEADING - Dibuat rata kiri agar lebih modern */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 border-l-4 border-accent pl-6"
      >
        <h4 className="text-3xl md:text-4xl font-serif italic text-primary mb-4">
          Membentuk Bibir <span className="text-accent">Indah & Sempurna</span>
        </h4>
        <p className="text-primary/60 text-lg max-w-2xl font-light">
          Memberikan sentuhan warna alami agar bibir lebih cerah, segar, dan
          menawan setiap saat tanpa perlu lipstik berlebih.
        </p>
      </motion.div>

      {/* CONTENT ROW */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - DESKRIPSI */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary/70 leading-relaxed text-lg font-light">
              Teknik sulam bibir kami membantu menyempurnakan garis bibir agar
              tampak lebih simetris dan bervolume secara natural.
            </p>
            <p className="text-primary/60 leading-relaxed text-sm">
              Kami menggunakan pigmen organik berkualitas tinggi yang aman dan
              mampu mengoreksi warna bibir yang gelap atau pucat. Pilihan warna
              dapat disesuaikan sepenuhnya dengan skin tone dan preferensi Anda
              untuk hasil yang paling harmonis.
            </p>
          </div>

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
            id={`2`}
            onHide={() => setModalShow(false)}
          />
        </div>

        {/* RIGHT SIDE - BEFORE/AFTER GALLERY */}
        <div className="relative group">
          {/* Efek Bingkai Belakang */}
          <div className="absolute -inset-4 border border-accent/10 rounded-[2.5rem] pointer-events-none group-hover:scale-105 transition-transform duration-700" />

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl shadow-lg border border-primary/5">
                <ResponsiveImage
                  baseName="ImagesBeforeSulamBibir"
                  alt="Before Sulam Bibir"
                  className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary/40 font-bold text-center">
                Initial Condition
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              {" "}
              {/* Offset sedikit agar tidak kaku */}
              <div className="overflow-hidden rounded-3xl shadow-xl border border-accent/20">
                <ResponsiveImage
                  baseName="ImagesAfterSulamBibir"
                  alt="After Sulam Bibir"
                  className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold text-center">
                Final Result
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSulamBibir;
