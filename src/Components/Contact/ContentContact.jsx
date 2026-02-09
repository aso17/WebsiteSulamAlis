import React from "react";
import { motion } from "framer-motion";
import { MapPin, Instagram, MessageCircle, Clock } from "lucide-react";
import FramerMotion from "../FramerMotion";

const ContentContact = () => {
  return (
    <div className="w-full py-24 px-8 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={FramerMotion("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full bg-white border border-accent/10 rounded-[3rem] shadow-2xl shadow-primary/5 text-center p-10 md:p-20"
        >
          {/* Subtitle */}
          <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase block mb-6">
            Contact & Reservation
          </span>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif italic text-primary mb-8">
            Start Your <span className="text-accent">Transformation</span>
          </h2>

          <p className="text-primary/60 text-base md:text-lg font-light mb-12 max-w-lg mx-auto leading-relaxed">
            Konsultasikan kebutuhan kecantikan Anda secara privat dengan tim
            ahli kami. Kami siap memberikan layanan prioritas untuk reservasi
            Anda.
          </p>

          {/* Main CTA Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://wa.me/6281279564211?text=Halo%20Admin%20Rosidi%20Sulam%20Alis%2C%20saya%20ingin%20reservasi."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-5 overflow-hidden rounded-full bg-primary text-white transition-all duration-500 shadow-2xl shadow-primary/30"
            >
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-bold tracking-[0.2em] text-xs uppercase">
                Book via WhatsApp
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </motion.div>

          {/* Grid Info Tambahan (Agar Tidak Kosong) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-accent/10">
            {/* Lokasi */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-4">
                <MapPin size={18} />
              </div>
              <h5 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                Our Studio
              </h5>
              <p className="text-primary/50 text-[11px] leading-relaxed">
                Cengkareng, Jakarta Barat
                <br />
                Indonesia
              </p>
            </div>

            {/* Jam Operasional */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-4">
                <Clock size={18} />
              </div>
              <h5 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                Working Hours
              </h5>
              <p className="text-primary/50 text-[11px] leading-relaxed">
                Mon — Sat: 09:00 - 18:00
                <br />
                Sunday: Closed
              </p>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-4">
                <Instagram size={18} />
              </div>
              <h5 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                Follow Us
              </h5>
              <p className="text-primary/50 text-[11px] leading-relaxed italic">
                @rosidisulamalisjakarta
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentContact;
