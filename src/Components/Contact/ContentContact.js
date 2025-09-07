import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";

const ContentContact = () => {
  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl text-center p-8">
        {/* Judul */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Reservasi & Konsultasi
        </h2>

        {/* Animasi paragraf */}
        <motion.div
          variants={FramerMotion("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="text-gray-600 mb-6 leading-relaxed">
            Untuk informasi layanan, ketersediaan jadwal, atau konsultasi 
            langsung dengan tim kami, silakan hubungi melalui WhatsApp dengan klik tombol di bawah.
          </p>
        </motion.div>

        {/* Tombol CTA */}
        <a
          href="https://wa.me/6281279564211?text=Halo%20Admin%20Rosidi%20Sulam%20Alis%2C%20saya%20ingin%20reservasi."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:scale-105 transition transform"
        >
          Chat via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContentContact;
