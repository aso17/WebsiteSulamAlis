import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/rosidisulamalis-aboutme" },
    { name: "Gallery", href: "/rosidisulamalis-galery" },
    { name: "Contact", href: "/rosidisulamalis-contact" },
  ];

  const services = [
    { name: "Sulam Alis", href: "/layanan-sulam-alis" },
    { name: "Hapus Sulam Alis", href: "/layanan-remove-sulamalis" },
    { name: "Sulam Bibir", href: "/layanan-sulam-bibir" },
    { name: "Sulam Eyeliner", href: "/layanan-sulam-eyeliner" },
    { name: "Hapus Tato", href: "/layanan-laser-removal" },
  ];

  // Logic Warna: Putih diganti ke text-accent (Gold)
  const dynamicText = isScrolled ? "text-primary" : "text-accent";
  const dynamicBorder = isScrolled ? "border-primary/10" : "border-accent/40";
  const dynamicGhostText = isScrolled ? "text-primary/80" : "text-accent";

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-4"
          : "bg-transparent py-5 md:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* LOGO SECTION */}
        <a href="/" className="flex items-center gap-2 md:gap-4 group">
          <Logo isScrolled={isScrolled} />
          <div
            className={`flex flex-col border-l ${dynamicBorder} pl-2 md:pl-4 transition-colors duration-500`}
          ></div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[12px] uppercase tracking-widest font-bold ${dynamicGhostText} hover:text-accent transition-all duration-500`}
            >
              {link.name}
            </a>
          ))}

          {/* Dropdown Services */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 text-[12px] uppercase tracking-widest font-bold ${dynamicGhostText} group-hover:text-accent transition-all duration-500`}
            >
              Services <ChevronDown size={14} />
            </button>
            <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 border border-primary/5">
              {services.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-[12px] text-primary/70 hover:bg-surface hover:text-accent rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[12px] uppercase tracking-widest font-bold ${dynamicGhostText} hover:text-accent transition-all duration-500`}
            >
              {link.name}
            </a>
          ))}

          {/* Button tetap gold sesuai config */}
          <button className="bg-gradient-to-r from-accent via-accent to-accent-hover text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-accent/20">
            Book Now
          </button>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className={`lg:hidden p-1 ${dynamicText} z-[110] transition-colors duration-500`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={26} className="text-primary" />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-10 gap-5 overflow-y-auto">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-[11px] font-bold text-primary border-b border-surface pb-4 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Services */}
          <div className="border-b border-surface pb-4">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full text-[11px] font-bold text-primary uppercase tracking-widest"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isMobileServicesOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isMobileServicesOpen
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-accent/20">
                {services.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-[12px] text-primary/60 font-medium py-1 hover:text-accent"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-[11px] font-bold text-primary border-b border-surface pb-4 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={closeMenu}
            className="mt-6 bg-gradient-to-r from-accent via-accent to-accent-hover text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(197,163,88,0.2)] active:scale-95 transition-all"
          >
            Book Appointment
          </button>

          <p className="text-center text-[8px] text-primary/40 uppercase tracking-[0.3em] mt-auto pb-10">
            © {new Date().getFullYear()} Sulam Alis Rosidi
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
