import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
import { iconDocument, iconPaint, iconTeams } from "../assets/icons";

const ComponentKeunggulan = () => {
  const dataKeunggulan = [
    {
      icon: iconTeams,
      title: "Tim Profesional",
      desc: "Seluruh tim kami adalah ahli bersertifikat yang bekerja dengan SOP ketat untuk menjamin kepuasan Anda.",
    },
    {
      icon: iconPaint,
      title: "Bahan Premium",
      desc: "Menggunakan bahan herbal alami dan jarum steril berkualitas tinggi yang aman untuk kulit sensitif.",
    },
    {
      icon: iconDocument,
      title: "Sertifikat Resmi",
      desc: "Lulusan Academy kami mendapatkan Sertifikat Diknas Resmi yang diakui secara nasional di Indonesia.",
    },
  ];

  return (
    <section className="py-24 bg-surface px-8 md:px-20 relative overflow-hidden">
      {/* Dekorasi halus di background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* JUDUL */}
      <div className="text-center mb-20">
        <motion.div
          variants={FramerMotion("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3"
        >
          <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-primary">
            Keunggulan Rosidi Sulam Alis
          </h2>
          <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-6" />
        </motion.div>
      </div>

      {/* GRID KARTU KEUNGGULAN */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {dataKeunggulan.map((item, idx) => (
          <motion.div
            key={idx}
            variants={FramerMotion("up", 0.2 + idx * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative p-10 rounded-[2.5rem] bg-white border border-primary/5 shadow-xl shadow-primary/[0.02] hover:shadow-accent/10 transition-all duration-500 overflow-hidden"
          >
            {/* Efek Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Lingkaran Ikon */}
              <div className="w-20 h-20 mb-8 rounded-full bg-surface flex items-center justify-center border border-primary/5 group-hover:border-accent/20 group-hover:bg-white transition-all duration-500 shadow-inner">
                <img
                  className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  src={item.icon}
                  alt={item.title}
                />
              </div>

              <h4 className="text-lg font-serif italic text-primary mb-4">
                {item.title}
              </h4>

              <p className="text-primary/60 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Aksen garis kecil di bawah saat hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-hover:w-1/3 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComponentKeunggulan;
