import React from "react";

const FinancialDonation = ({
  topic,
  subTopic,
}: {
  topic: string;
  subTopic: string;
}) => {
  return (
    <div className=" flex flex-col bg-[#FFFFFF] rounded-[14px] p-[24px] border-[1px] border-[#F1F1F3]  gap-[10px]">
      <h1 className=" text-[#1A1A1A] font-semibold text-lg">{topic}</h1>
      <p className=" text-[##4C4C4D] font-normal text-base">{subTopic}</p>
    </div>
  );
};

export default FinancialDonation;
