// import "../Components/StyleComponents/StyleModalComponent.css"; // ✅ CSS lama dibiarkan dikomentari

import { motion } from "framer-motion";
import ResponsiveImage from "../assets/images/ResponsiveImage"; // ✅ Responsive image component

const ModalComponent = ({ id, show, onHide }) => {
  let modalHeading;
  let imageName;

  switch (id) {
    case `1`:
      modalHeading = `Procedure Sulam Alis`;
      imageName = "ProcedureSulamAlis";
      break;
    case `2`:
      modalHeading = `Procedure Sulam Bibir`;
      imageName = "ProcedureSulamBibir";
      break;
    default:
      modalHeading = `Procedure Sulam Eyeliner`;
      imageName = "ProcedureSulamEyeliner";
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onHide}
      />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-white rounded-2xl shadow-lg w-full max-w-2xl z-10 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">{modalHeading}</h2>
          <button
            onClick={onHide}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex justify-center">
          <ResponsiveImage
            baseName={imageName}
            alt={modalHeading}
            className="rounded-md max-h-[70vh] object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ModalComponent;
