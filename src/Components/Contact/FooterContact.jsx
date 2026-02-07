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

const FooterContact = () => {
  const contactData = [
    { icon: iconPhone, text: "+62-812-795-642-11", link: "tel:+6281279564211" },
    { icon: iconPhone, text: "+62-812-186-617-05", link: "tel:+6281218661705" },
    {
      icon: iconEmail,
      text: "Rosidisulamalis@gmail.com",
      link: "mailto:Rosidisulamalis@gmail.com",
    },
  ];

  return (
    // DIUBAH DARI <footer> MENJADI <section>
    <section className="relative bg-surface py-20 px-8 md:px-20 lg:px-32 border-t border-primary/5 overflow-hidden">
      {/* DECORATION */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <motion.div
        variants={FramerMotion("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-24 text-center relative z-10"
      >
        <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
          Get in Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight">
          Hubungi Kami
        </h2>
        <div className="w-16 h-[1px] bg-accent/40 mx-auto mt-8 mb-6" />
      </motion.div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 relative z-10">
        {/* KOLOM 1: KONTAK */}
        <motion.div
          variants={FramerMotion("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="inline-block">
            <h4 className="font-serif italic text-2xl text-primary">
              Informasi Kontak
            </h4>
            <div className="w-full h-[1px] bg-accent/20 mt-2" />
          </div>

          <div className="space-y-6">
            {contactData.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="flex items-center gap-5 group cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-primary/5 group-hover:bg-accent transition-all duration-300">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:invert transition-all"
                  />
                </div>
                <span className="text-primary/80 font-light text-sm tracking-wide group-hover:text-primary">
                  {item.text}
                </span>
              </a>
            ))}

            <div className="flex items-start gap-5 group pt-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-primary/5 shrink-0">
                <img
                  src={iconaddress}
                  alt="iconAddress"
                  className="w-4 h-4 opacity-60"
                />
              </div>
              <span className="text-primary/80 font-light text-sm leading-relaxed">
                Ruko Citypark No. 21 Blok J20 <br />
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1 block">
                  Cengkareng, Jakarta Barat
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* KOLOM 2: MEDIA SOSIAL */}
        <motion.div
          variants={FramerMotion("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="inline-block">
            <h4 className="font-serif italic text-2xl text-primary">
              Media Sosial
            </h4>
            <div className="w-full h-[1px] bg-accent/20 mt-2" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              {
                icon: iconinstagram,
                name: "Instagram",
                handle: "@rosidisulamalisjakarta",
                url: "https://www.instagram.com/rosidisulamalisjakarta",
              },
              {
                icon: iconfacebook,
                name: "Facebook",
                handle: "Rosidi Sulam Alis",
                url: "https://www.facebook.com/rosidisulamalisjakarta",
              },
              {
                icon: icontiktok,
                name: "TikTok",
                handle: "@rosidisulamalisjakarta",
                url: "https://www.tiktok.com/@rosidisulamalisjakarta",
              },
              {
                icon: iconYoutube,
                name: "YouTube",
                handle: "Rosidi Sulam Alis",
                url: "https://youtu.be/6x8iVx0UsIw",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/40 border border-primary/5 hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary/40 uppercase font-bold tracking-tighter">
                      {social.name}
                    </span>
                    <span className="text-primary/80 group-hover:text-accent font-light text-xs transition-colors">
                      {social.handle}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* KOLOM 3: JAM OPERASIONAL */}
        <motion.div
          variants={FramerMotion("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="inline-block">
            <h4 className="font-serif italic text-2xl text-primary">
              Jam Layanan
            </h4>
            <div className="w-full h-[1px] bg-accent/20 mt-2" />
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-primary/5 shadow-sm">
            <table className="w-full text-sm font-sans">
              <tbody className="divide-y divide-primary/5">
                {[
                  { day: "Minggu", time: "09.00 - 20.00" },
                  { day: "Senin", time: "Tutup", isClosed: true },
                  { day: "Selasa", time: "09.00 - 20.00" },
                  { day: "Rabu", time: "09.00 - 20.00" },
                  { day: "Kamis", time: "09.00 - 20.00" },
                  { day: "Jum'at", time: "09.00 - 20.00" },
                  { day: "Sabtu", time: "09.00 - 20.00" },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3.5 text-primary/60 font-medium">
                      {item.day}
                    </td>
                    <td
                      className={`py-3.5 text-right font-light ${item.isClosed ? "text-accent font-bold tracking-widest uppercase text-[10px]" : "text-primary/80"}`}
                    >
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterContact;
