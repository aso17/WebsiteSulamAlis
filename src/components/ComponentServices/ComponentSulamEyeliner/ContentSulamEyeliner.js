import React, { useState } from "react";
import ModalComponent from "../../ModalComponent";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
import ResponsiveImage from "../../../assets/images/ResponsiveImage"; // ✅ gunakan image dinamis

const ContentSulamEyeliner = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="w-full px-6 py-10">
      {/* Heading */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-8"
      >
        <h4 className="text-2xl font-bold text-gray-800">
          Membuat Bentuk Mata Menjadi Sempurna
        </h4>
        <p className="text-gray-600">
          Combination Sulam Eyeliner & Sulam Alis membuat lebih terlihat soft
          &amp; natural.
        </p>
      </motion.div>

      {/* Content Row */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <p className="mb-4 text-gray-700">
            Tindakan mempertegas garis eyeliner bagian atas dan bawah. Sulam
            eyeliner bermanfaat agar mata terlihat selalu segar, bersinar, dan
            memberikan efek percaya diri sepanjang hari.
          </p>

          <motion.div
            variants={FramerMotion("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <button
              onClick={() => setModalShow(true)}
              className="px-5 py-2 rounded-lg shadow text-white text-sm 
                bg-gradient-to-r from-pink-500 via-red-400 to-pink-600 
                hover:opacity-90 transition"
            >
              Lihat Procedure
            </button>
          </motion.div>

          <ModalComponent
            show={modalShow}
            id={`3`}
            onHide={() => setModalShow(false)}
          />
        </div>

        {/* Right Side */}
        <div>
          {/* Images Row */}
          <div className="flex gap-4 mb-4">
            <ResponsiveImage
              baseName="ImagesBeforeSulamEyeliner"
              alt="Before Sulam Eyeliner"
              className="w-1/2 rounded-lg shadow object-cover"
            />
            <ResponsiveImage
              baseName="ImagesSulamEyeliner1"
              alt="After Sulam Eyeliner"
              className="w-1/2 rounded-lg shadow object-cover"
            />
          </div>

          {/* Captions */}
          <div className="flex justify-between text-center text-gray-600">
            <motion.div
              variants={FramerMotion("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="w-1/2"
            >
              <p className="font-semibold">Before</p>
            </motion.div>

            <motion.div
              variants={FramerMotion("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="w-1/2"
            >
              <p className="font-semibold">After</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSulamEyeliner;
