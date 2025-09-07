import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const services = [
  {
    title: "Sulam Alis",
    description:
      "Teknik mendepositkan tinta pigmen warna ke dalam kulit menggunakan alat bahan khusus di atas permukaan kulit (epidermis).",
    baseName: "ImagesSulamAlis1",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Sulam Alis Natural dan Profesional",
    width: 600,
    height: 400,
  },
  {
    title: "Hapus Sulam Alis",
    description:
      "Teknik penghapusan tinta pigmen yang tidak sesuai warna pada kulit dengan alat & bahan khusus di lapisan epidermis.",
    baseName: "ImgHomeRemoveSulamAlis",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Proses Hapus Sulam Alis Aman",
    width: 600,
    height: 400,
  },
  {
    title: "Sulam Eyeliner",
    description:
      "Sulam eyeliner mempertegas garis mata agar terlihat segar, bersinar, dan lebih besar. Membuat tampilan mata indah & percaya diri setiap hari.",
    baseName: "ImgHomeSulamEyeliner",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Sulam Eyeliner Natural",
    width: 600,
    height: 400,
  },
  {
    title: "Sulam Bibir",
    description:
      "Teknik mendepositkan pigmen warna di lapisan kulit luar agar bibir tampak cerah natural. Bermanfaat untuk membentuk, mempercantik warna, dan memberi kesan bibir lebih penuh, simetris, serta awet muda.",
    baseName: "ImgHomeSulamBibir",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Sulam Bibir Natural dan Simetris",
    width: 600,
    height: 400,
  },
  {
    title: "Hapus Tato",
    description:
      "Hapus tato yang tidak diinginkan dengan teknologi laser terkini. Dapatkan kulit bersih & bebas tato dengan prosedur yang aman & profesional.",
    baseName: "ImgHomeHapusTato",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Hapus Tato dengan Laser Aman",
    width: 600,
    height: 400,
  },
];

const ContentHome = () => {
  return (
    <section className="SectionHome px-6 md:px-20 py-16 bg-gray-50">
      {/* Judul Layanan */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Layanan Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Tim profesional kami dengan dukungan alat modern & bahan khusus siap
          memberikan layanan terbaik untuk Anda.
        </p>
      </motion.div>

      {/* Daftar Layanan */}
      <div className="space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={FramerMotion(index % 2 === 0 ? "up" : "down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className={`flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Teks */}
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Gambar */}
            <div className="md:w-1/2">
              <ResponsiveImage
                baseName={service.baseName}
                alt={service.alt}
                width={service.width}
                height={service.height}
                folder={service.folder}
                priority={false}
                className="rounded-xl shadow-md transform hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContentHome;
