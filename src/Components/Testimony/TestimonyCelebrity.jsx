import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion"; // Menggunakan helper animasi Anda
import { Quote } from "lucide-react"; // Menambah visual kutipan
import ResponsiveImage from "../../assets/images/ResponsiveImage";

const celebrityTests = [
  {
    name: "Ghea Youbi",
    role: "Singer & DJ",
    baseName: "ImgBannerHome3",
    quote:
      "Hasilnya natural banget, pengerjaannya juga profesional. Puas banget sama hasilnya!",
  },
  {
    name: "Fuji", // Koreksi nama
    role: "Public Figure",
    baseName: "ImgBannerHome2",
    quote:
      "Studio sulam paling terpercaya di Jakarta. Suka banget sama bentuk alisnya!",
  },
];

const TestimonyCelebrity = () => {
  return (
    <section className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
              Trusted By
            </span>
            <h2 className="text-4xl font-serif italic text-primary mt-2">
              Celebrity Testimonials
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {celebrityTests.map((testi, i) => (
            <motion.div
              key={i}
              variants={FramerMotion("up", 0.3 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center border border-primary/5 relative"
            >
              {/* Icon Quote Dekoratif */}
              <Quote className="absolute top-8 right-8 text-accent/10 w-12 h-12 rotate-180 group-hover:text-accent/20 transition-colors" />

              {/* Foto Profile dengan Border Mewah */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg relative z-10">
                <ResponsiveImage
                  baseName={testi.baseName}
                  alt={testi.name}
                  width={200}
                  height={200}
                  folder="../../assets/images/OptimizeImage/"
                  // object-top atau center tergantung komposisi asli fotonya
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="relative z-10 text-center md:text-left">
                <p className="text-primary/70 italic mb-6 leading-relaxed font-serif text-lg">
                  "{testi.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-primary text-xl tracking-tight">
                    {testi.name}
                  </h4>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                    <div className="h-[1px] w-4 bg-accent" />
                    <p className="text-accent text-xs font-bold uppercase tracking-widest">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonyCelebrity;
