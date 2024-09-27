import Image from "next/image";
import React from "react";

const UpdateCard = ({
  image,
  event,
  details,
}: {
  event: string;
  details: string;
  image: any;
}) => {
  return (
    <div className="bg-[#F7F7F8] p-3 md:p-8 rounded-2xl flex items-center max-w-[620px] flex-wrap mx-auto ">
      <Image src={image} alt="" />
      <div>
        <h5 className="text-[#262626] text-base font-semibold my-4">{event}</h5>
        <p className="text-[#4C4C4D] text-sm font-normal text-center md:text-justify">
          {details}
        </p>
      </div>
    </div>
  );
};

export default UpdateCard;
