import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

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

  const navBackground =
    isMenuOpen || isScrolled
      ? "bg-white shadow-md py-3 md:py-4"
      : "bg-transparent py-5 md:py-7";

  const iconColor = isMenuOpen
    ? "text-primary"
    : isScrolled
      ? "text-primary"
      : "text-accent";

  const dynamicGhostText = isScrolled ? "text-primary/80" : "text-accent";

  return (
    <nav
      className={`fixed w-full z-[9999] transition-all duration-500 ease-in-out ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center relative z-[10000]">
        {/* LOGO SECTION MENGGUNAKAN IMG */}
        <a href="/" className="flex items-center group">
          <div
            className={`p-1 bg-white rounded-lg shadow-sm transition-all duration-500 ${
              isScrolled || isMenuOpen ? "scale-90" : "scale-100"
            }`}
          >
            <img
              src="/logo.webp"
              alt="Rosidi Sulam Alis Logo"
              className={`transition-all duration-500 object-contain ${
                isScrolled || isMenuOpen ? "h-10 md:h-12" : "h-14 md:h-16"
              }`}
            />
          </div>
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

          {/* Dropdown Services Desktop */}
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

          <button className="bg-gradient-to-r from-accent via-accent to-accent-hover text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20 hover:brightness-110 transition-all">
            Book Now
          </button>
        </div>
        {/* MOBILE TOGGLE BUTTON */}
        <button
          className={`lg:hidden p-2 transition-all duration-300 relative z-[10001] ${iconColor}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 ease-in-out z-[9998] ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-10 gap-5 overflow-y-auto bg-white">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-[13px] font-bold text-primary border-b border-surface pb-4 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

          <div className="border-b border-surface pb-4">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full text-[13px] font-bold text-primary uppercase tracking-widest"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-accent" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${isMobileServicesOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-accent/20">
                {services.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-[12px] text-primary/60 font-medium py-1"
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
              className="text-[13px] font-bold text-primary border-b border-surface pb-4 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={closeMenu}
            className="mt-6 bg-accent text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-accent/20 active:scale-95 transition-all"
          >
            Book Appointment
          </button>

          <p className="text-center text-[9px] text-primary/40 uppercase tracking-[0.3em] mt-auto pb-10">
            © {new Date().getFullYear()} Sulam Alis Rosidi
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
