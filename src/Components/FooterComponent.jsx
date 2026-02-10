import React from "react";
import { motion } from "framer-motion";
import { iconwhatsapp } from "../assets/icons";

const FooterComponent = () => {
  return (
    <>
      {/* Mini Bottom Footer */}
      <footer className="bg-surface text-primary/40 py-10 px-6 border-t border-primary/5 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* Logo atau Nama Brand */}
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans font-bold text-primary/80">
            © {new Date().getFullYear()} Sulam Alis Rosidi & Academy
          </p>

          {/* Divider kecil yang elegan */}
          <div className="w-10 h-[1px] bg-accent/20" />

          {/* Deskripsi Tambahan / Slogan */}
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-50 font-light">
            Professional Semi-Permanent Makeup • Jakarta, Indonesia
          </p>

          {/* SUPPORT BY - ASO17 */}
          <div className="mt-4 pt-4 border-t border-primary/5 w-full max-w-[200px]">
            <p className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase opacity-40 font-medium">
              Developed by{" "}
              <a
                href="https://aso17.github.io/myportfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 font-bold hover:text-accent transition-colors duration-300"
              >
                ASO17
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6281279564211?text=Halo%20Admin%20Rosidi%20Sulam%20Alis"
        className="fixed bottom-6 right-6 z-[99] group"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Efek Glow Hijau Soft */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse" />

        {/* Tooltip Eksklusif */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md text-primary text-[9px] font-bold px-5 py-2.5 rounded-full shadow-2xl border border-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap uppercase tracking-[0.2em]">
            Tanya Admin
          </div>
        </div>

        <img
          src={iconwhatsapp}
          className="relative w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_10px_20px_rgba(37,211,102,0.3)]"
          alt="WhatsApp Icon"
        />
      </motion.a>
    </>
  );
};

export default FooterComponent;
