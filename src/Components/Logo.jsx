import React from "react";

const Logo = ({ isScrolled }) => {
  const textColor = isScrolled ? "text-black" : "text-black";

  return (
    <div className="flex flex-col items-center text-center leading-none select-none">
      {/* R & S Bertumpuk */}
      <div className="relative flex items-center justify-center mb-1">
        {/* R */}
        <span
          className={`font-logo font-black text-red-600 drop-shadow-md transform -translate-y-[4px] transition-all duration-300 ${
            isScrolled
              ? "text-[26px] md:text-[30px]"
              : "text-[30px] md:text-[36px]"
          }`}
        >
          R
        </span>

        {/* S */}
        <span
          className={`absolute font-logo font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] transform -translate-y-[4px] transition-all duration-300 ${
            isScrolled
              ? "text-[20px] md:text-[24px]"
              : "text-[24px] md:text-[28px]"
          }`}
        >
          S
        </span>
      </div>

      {/* SULAM ALIS ROSIDI */}
      <span
        className={`font-extrabold tracking-widest transition-all duration-300 ${textColor} ${
          isScrolled ? "text-[8px] md:text-[9px]" : "text-[9px] md:text-[10px]"
        }`}
      >
        SULAM ALIS ROSIDI
      </span>

      {/* & */}
      <span className="text-red-600 text-[10px] md:text-[12px] font-black leading-none my-0.5">
        &
      </span>

      {/* ACADEMY – DISAMAKAN STYLE */}
      <span
        className={`font-extrabold tracking-widest transition-all duration-300 ${textColor} ${
          isScrolled ? "text-[8px] md:text-[9px]" : "text-[9px] md:text-[10px]"
        }`}
      >
        ACADEMY
      </span>
    </div>
  );
};

export default Logo;
