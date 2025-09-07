// ContentSulamBibir.jsx
import React from "react";
import { motion } from "framer-motion";
import ModalComponent from "../../ModalComponent";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const ContentSulamBibir = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="w-full px-6 py-12 bg-white">
      {/* Heading */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-10"
      >
        <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Membentuk Bibir Indah & Sempurna
        </h4>
        <p className="text-gray-600 text-lg">
          Memberikan sentuhan warna alami agar bibir lebih cerah, segar, dan
          menawan.
        </p>
      </motion.div>

      {/* Content Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Teknik sulam bibir membantu menyempurnakan garis bibir agar tampak
            lebih simetris, dengan pilihan warna yang dapat disesuaikan sesuai
            karakter dan keinginan Anda.
          </p>

          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <button
              onClick={() => setModalShow(true)}
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 
                         text-white px-6 py-2 rounded-lg shadow-md 
                         hover:opacity-90 transition font-medium"
            >
              Lihat Prosedur
            </button>
          </motion.div>

          {/* Modal */}
          <ModalComponent
            show={modalShow}
            id={`2`}
            onHide={() => setModalShow(false)}
          />
        </div>

        {/* Right Side */}
        <div>
          {/* Images Row */}
          <div className="flex flex-row gap-4 mb-2 justify-center">
            <div className="flex flex-col items-center w-1/2 max-w-[180px] md:max-w-[240px]">
              <ResponsiveImage
                baseName="ImagesBeforeSulamBibir"
                alt="Before Sulam Bibir"
                className="rounded-xl shadow-lg object-cover"
              />
              <motion.p
                variants={FramerMotion("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="mt-2 text-gray-600 font-semibold text-center"
              >
                Before
              </motion.p>
            </div>

            <div className="flex flex-col items-center w-1/2 max-w-[180px] md:max-w-[240px]">
              <ResponsiveImage
                baseName="ImagesAfterSulamBibir"
                alt="After Sulam Bibir"
                className="rounded-xl shadow-lg object-cover"
              />
              <motion.p
                variants={FramerMotion("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="mt-2 text-gray-600 font-semibold text-center"
              >
                After
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSulamBibir;
