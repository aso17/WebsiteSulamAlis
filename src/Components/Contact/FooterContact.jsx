import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../FramerMotion";
import {
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import ResponsiveImage from "../../assets/images/ResponsiveImage";

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
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@rosidisulamalisjakarta",
      color: "#E1306C",
      icon: iconinstagram,
      url: "https://www.instagram.com/rosidisulamalisjakarta",
      usePhoto: true, // Gunakan foto profil owner
    },
    {
      name: "Facebook",
      handle: "Rosidi Sulam Alis Jakarta",
      color: "#1877F2",
      icon: iconfacebook,
      url: "https://www.facebook.com/rosidisulamalisjakarta",
      usePhoto: true, // Gunakan foto profil owner
    },
    {
      name: "TikTok",
      handle: "@rosidisulamalis",
      color: "#000000",
      icon: icontiktok,
      url: "https://www.tiktok.com/@rosidisulamalisjakarta",
      usePhoto: true, // Gunakan foto profil owner
    },
    {
      name: "YouTube",
      handle: "Rosidi Sulam Alis",
      color: "#FF0000",
      icon: iconYoutube,
      url: "https://youtu.be/6x8iVx0UsIw",
      usePhoto: false, // Sesuai permintaan: YouTube pakai icon brand saja
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-primary/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
          {/* KOLOM 1: KONTAK */}
          <motion.div
            variants={FramerMotion("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-10 text-center lg:text-left">
              <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
                Contact
              </span>
              <h2 className="text-4xl font-serif italic text-primary mt-2">
                Hubungi Kami
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  icon: <Phone size={20} />,
                  label: "WhatsApp",
                  val: "+62 812 7956 4211",
                  href: "https://wa.me/6281279564211",
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  val: "Rosidisulamalis@gmail.com",
                  href: "mailto:Rosidisulamalis@gmail.com",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Studio",
                  val: "Cengkareng, Jakarta Barat",
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-5 p-5 rounded-3xl bg-surface/30 border border-primary/5 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-primary/40 tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-primary/80">
                      {item.val}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* KOLOM 2: MEDIA SOSIAL */}
          <motion.div
            variants={FramerMotion("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-10 text-center lg:text-left">
              <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
                Follow Us
              </span>
              <h2 className="text-4xl font-serif italic text-primary mt-2">
                Media Sosial
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {socialMedia.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 pl-3 pr-6 rounded-full bg-white border border-primary/5 shadow-sm hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-slate-50 flex items-center justify-center">
                        {social.usePhoto ? (
                          <ResponsiveImage
                            baseName="Owner"
                            alt={`Profile ${social.name}`}
                            width={100}
                            height={100}
                            folder="../../assets/images/OptimizeImage/"
                            // object-top memastikan kepala owner tidak terpotong
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <img
                            src={social.icon}
                            className="w-6 h-6 object-contain"
                            alt={social.name}
                          />
                        )}
                      </div>
                      {/* Logo brand kecil di pojok foto (hanya muncul jika pakai foto) */}
                      {social.usePhoto && (
                        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-slate-50">
                          <img
                            src={social.icon}
                            className="w-3.5 h-3.5"
                            alt="brand-icon"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-black uppercase tracking-tighter"
                        style={{ color: social.color }}
                      >
                        {social.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-primary/70 font-medium">
                          {social.handle}
                        </span>
                        <BadgeCheck
                          size={14}
                          className="text-[#0095F6] fill-[#0095F6] stroke-white"
                        />
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-primary/20 group-hover:text-accent group-hover:translate-x-1 transition-all"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* KOLOM 3: JAM LAYANAN */}
          <motion.div
            variants={FramerMotion("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-10 text-center lg:text-left">
              <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
                Open Hours
              </span>
              <h2 className="text-4xl font-serif italic text-primary mt-2">
                Jam Layanan
              </h2>
            </div>
            <div className="bg-primary p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <Clock className="absolute -right-6 -top-6 text-white/5 w-40 h-40 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
              <div className="relative z-10">
                <div className="space-y-6">
                  {[
                    { d: "Minggu", t: "09.00 - 20.00", s: "open" },
                    { d: "Senin", t: "OFF / TUTUP", s: "closed" },
                    { d: "Selasa - Sabtu", t: "09.00 - 20.00", s: "open" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                        {item.d}
                      </span>
                      <span
                        className={`text-sm font-serif italic ${item.s === "closed" ? "text-accent" : "text-white"}`}
                      >
                        {item.t}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-4 bg-accent hover:bg-white text-white hover:text-primary rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 shadow-lg shadow-accent/20">
                  Reservasi Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;
