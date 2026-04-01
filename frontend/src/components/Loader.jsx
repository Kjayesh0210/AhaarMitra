import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/AhaarMitraLogo.svg"; // ✅ adjust path if needed

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="relative flex flex-col items-center">

        {/* LOGO IMAGE */}
        <motion.img
          src={logo}
          alt="AhaarMitra Logo"
          className="w-[280px] md:w-[400px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* SHIMMER SWEEP */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 1.0,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ mixBlendMode: "overlay" }}
        />

        {/* UNDERLINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-[3px] mt-4 origin-left w-full"
          style={{ backgroundColor: "#ff8c1a" }}
        />

      </motion.div>
    </motion.div>
  );
};

export default Loader;