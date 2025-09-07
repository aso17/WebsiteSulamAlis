import { iconwhatsapp } from "../assets/icons";

const FooterComponent = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white text-gray-700 border-t border-gray-200 py-6 px-4 text-center shadow-sm">
        <p className="text-sm md:text-base font-light tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900">
            Rosidi Sulam Alis & Academy
          </span>
          . Semua hak cipta dilindungi.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281279564211?text=Halo%20Admin%20Rosidi%20Sulam%20Alis"
        className="fixed bottom-16 right-5 z-50 transition-transform transform hover:scale-110 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
      >
        <img
          src={iconwhatsapp}
          className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg"
          alt="WhatsApp Icon"
        />
      </a>

    </>
  );
};

export default FooterComponent;
