import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";

import {
  iconPhone,
  iconEmail,
  iconaddress,
  iconinstagram,
  iconfacebook,
  icontiktok,
  iconYoutube,
} from "../../assets/icons";

const FooterContactContact = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 border-t border-gray-200">
      {/* Title Section */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Konsultasi & informasi layanan tersedia melalui kontak dan media sosial resmi kami
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-700">
        {/* Kontak */}
        <motion.div
          variants={FramerMotion("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-5"
        >
          <h4 className="font-semibold text-xl text-gray-900 mb-3">Kontak</h4>

          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <img src={iconPhone} alt="iconPhone" className="w-5 h-5" />
              +62-812-795-642-11
            </p>
            <p className="flex items-center gap-2">
              <img src={iconPhone} alt="iconPhone" className="w-5 h-5" />
              +62-812-186-617-05
            </p>
            <p className="flex items-center gap-2">
              <img src={iconEmail} alt="iconEmail" className="w-5 h-5" />
              Rosidisulamalis@gmail.com
            </p>
            <p className="flex items-start gap-2">
              <img src={iconaddress} alt="iconAddress" className="w-5 h-5 mt-1" />
              Ruko Citypark No. 21 Blok J20 <br /> Cengkareng, Jakarta Barat
            </p>
          </div>
        </motion.div>

        {/* Media Sosial */}
        <motion.div
          variants={FramerMotion("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-5"
        >
          <h5 className="font-semibold text-xl text-gray-900 mb-3">Media Sosial</h5>

          <div className="space-y-3">
            <a
              href="https://www.instagram.com/rosidisulamalisjakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-600 transition"
            >
              <img src={iconinstagram} alt="Instagram" className="w-5 h-5" />
              @rosidisulamalisjakarta
            </a>
            <a
              href="https://www.facebook.com/rosidisulamalisjakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <img src={iconfacebook} alt="Facebook" className="w-5 h-5" />
              Rosidi Sulam Alis Jakarta
            </a>
            <a
              href="https://www.tiktok.com/@rosidisulamalisjakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <img src={icontiktok} alt="Tiktok" className="w-5 h-5" />
              @rosidisulamalisjakarta
            </a>
            <a
              href="https://youtu.be/6x8iVx0UsIw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-600 transition"
            >
              <img src={iconYoutube} alt="YouTube" className="w-5 h-5" />
              Rosidi Sulam Alis Jakarta
            </a>
          </div>
        </motion.div>

        {/* Jam Operasional */}
        <motion.div
          variants={FramerMotion("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h5 className="font-semibold text-xl text-gray-900 mb-3">Jam Operasional</h5>
          <table className="w-full text-sm md:text-base">
            <tbody>
              <tr><td>Minggu</td><td className="px-2">:</td><td>09.00 - 20.00</td></tr>
              <tr><td>Senin</td><td className="px-2">:</td><td className="text-red-500">Tutup</td></tr>
              <tr><td>Selasa</td><td className="px-2">:</td><td>09.00 - 20.00</td></tr>
              <tr><td>Rabu</td><td className="px-2">:</td><td>09.00 - 20.00</td></tr>
              <tr><td>Kamis</td><td className="px-2">:</td><td>09.00 - 20.00</td></tr>
              <tr><td>Jum'at</td><td className="px-2">:</td><td>09.00 - 20.00</td></tr>
              <tr><td>Sabtu</td><td className="px-2">:</td><td>09.00 - 20.00</td></tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default FooterContactContact;
