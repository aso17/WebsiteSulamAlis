import React from "react";

export default function Logo({ isScrolled, isMenuOpen }) {
  return (
    <a href="/" className="flex items-center group">
      <div
        className={`bg-white p-2 md:px-3 rounded-md flex items-center justify-center 
        transition-all duration-500 border border-gray-100 shadow-md
        ${isScrolled || isMenuOpen ? "scale-90 shadow-sm" : "scale-100"}`}
      >
        <img
          src="/logo.webp"
          alt="Rosidi Sulam Alis Jakarta"
          loading="eager"
          className={`object-contain transition-all duration-500
            ${
              isScrolled || isMenuOpen
                ? "h-9 sm:h-10 md:h-12"
                : "h-11 sm:h-12 md:h-16"
            }
          `}
        />
      </div>
    </a>
  );
}
