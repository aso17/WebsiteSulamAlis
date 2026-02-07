import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const ContentAboutMe = () => {
  return (
    <div className="py-20 px-8 max-w-7xl mx-auto border-b border-primary/5">
      {/* JUDUL SECTION */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h3 className="text-3xl md:text-4xl font-serif italic text-primary relative inline-block">
          Rosidi Sulam Alis & <span className="text-accent">Academy</span>
          {/* Underline Emas yang Elegan */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] h-[1px] bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </h3>
      </motion.div>

      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT CONTENT (KIRI) */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <p className="text-primary/70 leading-relaxed font-light text-base md:text-lg">
              Terpercaya di Indonesia sejak tahun{" "}
              <span className="text-primary font-semibold">2015</span> dalam
              bidang kecantikan semi-permanen.
              <span className="text-primary font-medium italic">
                {" "}
                Rosidi Sulam Alis & Academy
              </span>{" "}
              bukan sekadar studio kecantikan, namun juga pusat edukasi yang
              telah melahirkan ribuan alumni handal dan sukses di industri
              kecantikan.
            </p>
            <p className="text-primary/70 leading-relaxed font-light text-base md:text-lg">
              Kami percaya bahwa kecantikan adalah investasi. Temukan
              kepercayaan diri baru Anda melalui sentuhan profesional kami yang
              mengutamakan keamanan, kebersihan, dan estetika modern.
            </p>
          </div>

          {/* Kartu Founder yang di-upgrade */}
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative group p-8 rounded-2xl bg-white border border-primary/5 shadow-xl shadow-primary/5 overflow-hidden"
          >
            {/* Dekorasi Background Kartu */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />

            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">
                Founder & Owner
              </p>
              <h4 className="text-3xl font-serif italic text-primary mb-1">
                Master Rosidi
              </h4>
              <p className="text-primary/40 text-xs tracking-widest uppercase mb-4">
                International Certified Artist
              </p>
              <div className="w-8 h-[1px] bg-accent/30 mb-4" />
              <p className="text-accent font-bold text-xs uppercase tracking-[0.2em]">
                Konsultasi Gratis Sekarang
              </p>
            </div>
          </motion.div>
        </div>

        {/* IMAGE CONTENT (KANAN) */}
        <motion.div
          variants={FramerMotion("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Dekorasi Bingkai di belakang gambar */}
            <div className="absolute top-4 right-4 inset-0 border border-accent/20 rounded-3xl -z-10" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ResponsiveImage
                baseName="Owner"
                alt="Founder Rosidi"
                width={600}
                height={800}
                folder="../../assets/images/OptimizeImage/"
                className="w-full h-auto object-cover max-w-sm transition-transform duration-1000 hover:scale-110"
                priority={false}
              />

              {/* Overlay Glassmorphism tipis */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentAboutMe;
