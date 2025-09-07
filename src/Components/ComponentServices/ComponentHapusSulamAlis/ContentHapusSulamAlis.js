import React from "react";
import { motion } from "framer-motion";
import FramerMotion from "../../FramerMotion";
// import ModalComponent from "../../ModalComponent"; // Kalau mau dipakai modal, bisa dipakai
import ResponsiveImage from "../../../assets/images/ResponsiveImage";

const ContentSulamAlis = () => {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="w-full px-6 py-12 ContentSulamAlis max-w-6xl mx-auto">
            {/* Judul Section */}
            <motion.div
                variants={FramerMotion("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    Kembalikan Keaslian Alis Anda dengan Teknik Modern
                </h4>
            </motion.div>

            <p className="text-gray-600 text-lg mb-10">
                Hapus sulam alis lama dengan bahan premium yang aman untuk kulit,
                kembalikan alis natural sesuai karakter wajah Anda.
            </p>

            {/* Bagian Deskripsi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-gray-600 text-lg mb-10">
                        Dengan peralatan khusus dan bahan premium, pigmen sulam alis lama
                        dihapus secara hati-hati. Proses ini minim rasa sakit, tidak
                        meninggalkan bekas, dan membuat alis terlihat lebih natural. Bentuk
                        alis pun dapat dikembalikan sesuai karakter wajah Anda.
                    </p>

                    <motion.div
                        variants={FramerMotion("right", 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        {/* <button
              onClick={() => setModalShow(true)}
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:opacity-90 transition font-medium"
            >
              Lihat Prosedur
            </button> */}
                    </motion.div>

                    {/* <ModalComponent
            show={modalShow}
            id={`1`}
            onHide={() => setModalShow(false)}
          /> */}
                </div>

                {/* Bagian Gambar Kiri */}
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        variants={FramerMotion("up", 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <ResponsiveImage
                            baseName="ImagesSulamAlis3"
                            alt="Hasil sulam alis natural"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </motion.div>

                    <div className="flex flex-col gap-4">
                        <motion.div
                            variants={FramerMotion("up", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <ResponsiveImage
                                baseName="ImagesSulamAlis2"
                                alt="Proses sulam alis"
                                className="rounded-lg shadow-md w-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={FramerMotion("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <ResponsiveImage
                                baseName="ImagesSulamAlis4"
                                alt="Teknik sulam alis"
                                className="rounded-lg shadow-md w-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bagian Model */}
            <div className="mt-16">
                <motion.div
                    variants={FramerMotion("right", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h5 className="text-xl font-semibold text-gray-900 mb-8">
                        Hasil Nyata – Kepuasan Klien Adalah Prioritas Kami
                    </h5>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["Model0", "Model1", "Model2", "Model3"].map((baseName, i) => (
                        <motion.div
                            key={i}
                            variants={FramerMotion("up", 0.1 * (i + 1))}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <ResponsiveImage
                                baseName={baseName}
                                alt={`Model Sulam Alis ${i + 1}`}
                                className="rounded-lg shadow-lg w-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentSulamAlis;
