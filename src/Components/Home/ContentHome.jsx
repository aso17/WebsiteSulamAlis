import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import ResponsiveImage from "../../assets/images/ResponsiveImage";
import { ArrowRight } from "lucide-react"; // Menambah icon untuk CTA

const services = [
  {
    title: "Sulam Alis",
    tagline: "Natural Hairline Design",
    description:
      "Teknik mendepositkan tinta pigmen warna ke dalam kulit menggunakan alat bahan khusus di atas permukaan kulit (epidermis) untuk hasil alami.",
    baseName: "ImagesSulamAlis1",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Sulam Alis Natural dan Profesional",
  },
  {
    title: "Hapus Sulam Alis",
    tagline: "Professional Removal",
    description:
      "Teknik penghapusan tinta pigmen yang tidak sesuai warna pada kulit dengan teknologi terbaru yang aman untuk lapisan epidermis Anda.",
    baseName: "ImgHomeRemoveSulamAlis",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Proses Hapus Sulam Alis Aman",
  },
  {
    title: "Sulam Eyeliner",
    tagline: "Define Your Eyes",
    description:
      "Mempertegas garis mata agar terlihat segar dan lebih besar. Membuat tampilan mata indah & percaya diri setiap hari tanpa make-up berlebih.",
    baseName: "ImgHomeSulamEyeliner",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Sulam Eyeliner Natural",
  },
  {
    title: "Sulam Bibir",
    tagline: "Luscious Color Tint",
    description:
      "Memberikan warna cerah natural, membentuk bibir agar lebih penuh, simetris, dan memberikan kesan awet muda secara instan.",
    baseName: "ImgHomeSulamBibir",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Sulam Bibir Natural dan Simetris",
  },
  {
    title: "Hapus Tato",
    tagline: "Laser Tattoo Removal",
    description:
      "Hapus tato yang tidak diinginkan dengan teknologi laser terkini. Prosedur aman dan profesional untuk kulit bersih kembali.",
    baseName: "ImgHomeHapusTato",
    folder: "../../assets/images/OptimizeImage/",
    alt: "Hapus Tato dengan Laser Aman",
  },
];

const ContentHome = () => {
  return (
    <section className="relative overflow-hidden bg-surface px-8 md:px-20 lg:px-32 py-24 md:py-32">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      {/* SECTION HEADER */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20 text-center relative z-10"
      >
        <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
          Eksklusif Treatment
        </span>
        <h2 className="text-4xl md:text-5xl font-serif italic text-primary mb-6">
          Layanan Unggulan Kami
        </h2>
        <div className="w-20 h-[2px] bg-accent mx-auto mb-6" />
        <p className="text-primary/70 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
          Kombinasi teknik modern dan sentuhan artistik untuk menonjolkan
          kecantikan alami Anda dengan standar sterilisasi tinggi.
        </p>
      </motion.div>

      {/* SERVICES LIST */}
      <div className="space-y-24 md:space-y-40 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={FramerMotion(index % 2 === 0 ? "left" : "right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT CONTENT */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <span className="text-accent font-sans font-bold text-[10px] tracking-widest uppercase">
                  {service.tagline}
                </span>
                <h4 className="text-3xl md:text-4xl font-serif text-primary leading-tight">
                  {service.title}
                </h4>
              </div>

              <p className="text-primary/70 font-sans text-sm md:text-base leading-relaxed font-light">
                {service.description}
              </p>

              <div className="pt-4">
                <a
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.2em] group hover:text-accent transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <span className="w-8 h-[1px] bg-primary group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* IMAGE CONTENT */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                {/* Frame Decoration */}
                <div
                  className={`absolute -inset-4 border border-accent/20 rounded-2xl -z-10 transition-transform duration-500 group-hover:scale-105 ${
                    index % 2 === 0
                      ? "translate-x-2 translate-y-2"
                      : "-translate-x-2 translate-y-2"
                  }`}
                />

                <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 bg-white">
                  <ResponsiveImage
                    baseName={service.baseName}
                    alt={service.alt}
                    width={800}
                    height={600}
                    folder={service.folder}
                    className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContentHome;
