import React from "react";
import CustomButton from "../Button";
import ArrowIcon from "@/assets/icons/ArrowIcon";

const JoinContribute = () => {
  return (
    <section className="my-4 flex gap-[40px]">
      
      <div className=" flex flex-col gap-[24px] bg-[#FCFCFD] p-[40px] border-[4px] border-[#F7F7F8] rounded-2xl w-full text-center">
        <h1 className=" text-xl font-semibold">Contribution Information</h1>
        <p>
          If you&apos;re an organization or a person interested in contributing
          to Little Kindles Africa, We&apos;d love to hear from you, visit our
          Contribute page to make a donation or learn more about our various
          giving options.
        </p>
        <CustomButton
          text="Contribute"
          href="/contribute"
          icon={
            <span className="bg-[#3A5774] p-3 rounded-full">
              <ArrowIcon stroke="#FFFFFF" />
            </span>
          }
          className="!bg-[#001F3F] !text-[#fff] mx-auto w-max !px-3 !py-2 !place-self-end"
        />
      </div>
    </section>
  );
};

export default JoinContribute;
