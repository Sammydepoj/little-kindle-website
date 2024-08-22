import ShineMark from "@/assets/icons/ShineMark";
import React from "react";

const Goal = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#FFFFFF] p-3 md:p-6 rounded-2xl w-full  mx-auto flex flex-col gap-[10px]">
      <span className=" flex gap-[10px] items-center">
        <ShineMark/>
        <h5 className="text-[#262626] text-lg font-semibold my-4">{title}</h5>
      </span>
      <p className="text-[#4C4C4D] text-base text-center md:text-justify">
        {description}
      </p>
    </div>
  );
};

export default Goal;
