import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import ModalComponent from "../../ModalComponent";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const ContentSulamAlis = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
          Sulam Alis Natural dengan{" "}
          <span className="text-accent">Teknik Modern</span>
        </h4>
        <div className="w-20 h-[1px] bg-accent/30" />
      </motion.div>

      {/* GRID DESKRIPSI & GALLERY UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="text-primary/70 text-lg leading-relaxed font-light">
            Ditangani langsung oleh profesional, menggunakan bahan premium yang
            aman dan alami untuk hasil yang tahan lama dan terlihat natural.
          </p>
          <p className="text-primary/60 leading-relaxed">
            Proses sulam alis dilakukan dengan mendepositkan pigmen warna ke
            dalam lapisan epidermis kulit menggunakan peralatan khusus. Setiap
            goresan dirancang menyerupai helaian rambut asli, menghasilkan
            tampilan alis yang rapi, natural, dan sesuai karakter wajah.
          </p>

          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pt-4"
          >
            <button
              onClick={() => setModalShow(true)}
              className="group relative px-8 py-3 overflow-hidden rounded-full bg-primary text-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              <span className="relative z-10 font-medium tracking-widest text-xs uppercase">
                Lihat Prosedur
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

          <ModalComponent
            show={modalShow}
            id={`1`}
            onHide={() => setModalShow(false)}
          />
        </div>

        {/* MASONRY-STYLE IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <ResponsiveImage
              baseName="ImagesSulamAlis3"
              alt="Hasil sulam alis natural"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              variants={FramerMotion("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <ResponsiveImage
                baseName="ImagesSulamAlis2"
                alt="Proses sulam alis"
                className="w-full object-cover hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>

            <motion.div
              variants={FramerMotion("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <ResponsiveImage
                baseName="ImagesSulamAlis4"
                alt="Teknik sulam alis"
                className="w-full object-cover hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* HASIL NYATA / MODEL SECTION */}
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
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={FramerMotion("up", 0.1 * (i + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <ResponsiveImage
                baseName={`Model${i}`}
                alt={`Model Sulam Alis ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay halus saat hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSulamAlis;
