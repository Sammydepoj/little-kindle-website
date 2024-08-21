import React from "react";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#F1F1F3] p-3 md:p-8 rounded-2xl w-full max-w-[380px] mx-auto">
      <h5 className="text-[#262626] text-lg font-semibold my-4">{title}</h5>
      <p className="text-[#4C4C4D] text-base text-center md:text-justify">
        {description}
      </p>
    </div>
  );
};

export default Card;
