import { motion } from "framer-motion";

const konfigurasiJudul = {
  HeroAboutMe: {
    judul: "TENTANG KAMI",
    deskripsi:
      "Komitmen kami adalah menggabungkan seni dan ilmu dalam memberikan solusi kecantikan yang personal dan modern.",
  },
  Galeri: {
    judul: "GALERI",
    deskripsi: "Koleksi karya terbaik dan hasil perawatan eksklusif.",
  },
  Kontak: {
    judul: "KONTAK",
    deskripsi: "Hubungi kami untuk konsultasi dan reservasi layanan.",
  },
  SulamAlis: {
    judul: "SULAM ALIS",
    deskripsi: "Alis indah, natural, dan presisi sesuai karakter wajah Anda.",
  },
  HapusSulamAlis: {
    judul: "HAPUS SULAM ALIS",
    deskripsi:
      "Penghapusan sulam alis dengan teknik modern, minim rasa sakit, dan hasil yang alami.",
  },
  SulamBibir: {
    judul: "SULAM BIBIR",
    deskripsi: "Warna bibir segar dan tahan lama untuk penampilan elegan.",
  },
  SulamEyeliner: {
    judul: "SULAM EYELINER",
    deskripsi: "Tampilan mata lebih tegas dan mempesona setiap saat.",
  },
  LaserRemoval: {
    judul: "LASER REMOVAL",
    deskripsi: "Teknologi modern untuk perawatan kulit yang aman dan efektif.",
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

const TitleBanner = ({ tipe, className = "" }) => {
  const { judul, deskripsi } = konfigurasiJudul[tipe] || konfigurasiJudul.LaserRemoval;

  return (
    <div className={`space-y-6 text-center md:text-left ${className}`}>
      {/* Judul */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easing }}
      >
        {judul}
        <motion.div
          className="absolute left-0 bottom-[-8px] h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: easing, delay: 0.3 }}
        />
      </motion.h2>

      {/* Deskripsi */}
      <motion.p
        className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: easing, delay: 0.5 }}
      >
        {deskripsi}
      </motion.p>
    </div>
  );
};

export default TitleBanner;
