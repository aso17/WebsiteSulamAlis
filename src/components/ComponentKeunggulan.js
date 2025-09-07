import React from "react";
// import { Row, Col, Image } from "react-bootstrap"; // ❌ Bootstrap dihapus
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import { iconDocument, iconPaint, iconTeams } from "../assets/icons";
// import "./StyleComponents/StyleComponentKeunggulan.css"; // ❌ dikomentari, hanya referensi

const ComponentKeunggulan = () => {
  return (
    <div className="py-12 bg-white SectionKeunggulan">
      {/* Judul */}
      <div className="text-center mb-10">
        <motion.div
          variants={FramerMotion("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <h4 className="text-pink-600 font-semibold text-lg HeadKeunggulan">
            Why Us?
          </h4>
        </motion.div>
        <h5 className="text-2xl font-bold text-gray-800 HeadBrand">
          Keunggulan Rosidi Sulam Alis
        </h5>
      </div>

      {/* Isi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Keunggulan 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-gray-50 DetailKeunggulan">
          <img className="w-16 h-16 mb-4 iconImage" src={iconTeams} alt="icon" />
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <p className="text-gray-600">
              Seluruh Tim Rosidi Sulam Alis adalah para ahli dibidangnya dan
              memiliki SOP (Standard Operational Procedure).
            </p>
          </motion.div>
        </div>

        {/* Keunggulan 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-gray-50 DetailKeunggulan">
          <img className="w-16 h-16 mb-4 iconImage" src={iconPaint} alt="icon" />
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <p className="text-gray-600">
              Semua alat & bahan berkualitas tinggi. Bahan herbal alami dipadu
              dengan jarum khusus & steril.
            </p>
          </motion.div>
        </div>

        {/* Keunggulan 3 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-gray-50 DetailKeunggulan">
          <img
            className="w-16 h-16 mb-4 iconImage"
            src={iconDocument}
            alt="icon"
          />
          <motion.div
            variants={FramerMotion("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <p className="text-gray-600">
              Setelah pelatihan selesai, seluruh siswa akan mendapatkan
              Sertifikat Diknas Resmi Indonesia.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComponentKeunggulan;
