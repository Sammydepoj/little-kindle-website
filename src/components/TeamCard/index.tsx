import React from "react";



const TeamCard = ({
    image,
  name,
  title,
  location
}: {
  name: string;
  title: string;
  location: string;
  image: any;

}) => {
  return (
    <div className="bg-[#F7F7F8] p-3 md:p-8 rounded-2xl w-full max-w-[300px] mx-auto flex flex-col items-center h-[235px]">
        <img src={image} alt="" />
      <h5 className="text-[#262626] text-base font-semibold my-4">{name}</h5>
      <p className="text-[#4C4C4D] text-sm font-normal text-center md:text-justify">
        {title}
      </p>
      <p className="text-[#4C4C4D] text-sm font-semibold text-center md:text-justify">
        {location}
      </p>
    </div>
  );
};

export default TeamCard;
