import Image from "next/image";
import React from "react";
import outreach from "@/assets/images/outreach.png";
import next from "@/assets/images/next.png";

const Outreach = () => {
  return (
    <section className=" w-full bg-[#FCFCFD] border-[4px] border-[#F7F7F8] p-[40px] rounded-[16px] gap-[30px] flex flex-col items-center">
      <div className=" flex flex-col gap-[30px] items-center">
        <Image alt="outreach" src={outreach} className=" " />
        <Image alt="outreach" src={next} />
      </div>
      <div className=" flex flex-col gap-[10px]">
        <h1 className=" font-semibold text-[#1A1A1A] text-[20px]">
          Ebutte Meta Outreach
        </h1>
        <p className=" text-[#4C4C4D] text-base font-medium ">
          Join us for a memorable Charity Gala Night to raise funds for our
          Education Support program. Enjoy an evening of entertainment,
          auctions, and inspiring stories of transformed lives.
        </p>
      </div>
    </section>
  );
};

export default Outreach;
