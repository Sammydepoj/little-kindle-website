import React from "react";

type Props = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({ icon, text, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 bg-[#001F3F] py-4 font-normal px-6 rounded-[100px] text-white cursor-pointer ${className}`}
    >
      <button className="">{text}</button>
      {icon}
    </div>
  );
};

export default CustomButton;
