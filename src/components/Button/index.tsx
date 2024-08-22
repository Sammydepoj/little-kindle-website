"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({ icon, text, className, onClick }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgba(33, 88, 144, 1)",
      }}
      onClick={onClick}
      className={`flex items-center gap-3 bg-[#001F3F] py-4 font-normal px-6 rounded-[100px] text-white cursor-pointer ${className}`}
    >
      <button className="">{text}</button>
      {icon}
    </motion.div>
  );
};

export default CustomButton;
