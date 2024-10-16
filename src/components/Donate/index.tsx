import ArrowIcon from "@/assets/icons/ArrowIcon";
import React from "react";
import CustomButton from "../Button";

const Donate = () => {
  return (
    <div className="rounded-2xl bg-[#215890] p-3 md:p-8 md:py-16 mx-auto ">
      <h4 className="text-center text-[#1A1A1A] mx-auto font-semibold text-2xl md:text-4xl max-w-[800px]">
        Donate Now to Elevate Children&apos;s Lives in Need
      </h4>
      <p className="text-[#EBEBEB] mx-auto my-6 text-center font-normal max-w-[800px]">
        Your generosity can change lives by providing essential resources like
        books, uniforms, and renovated classrooms to underserved children.
        Together, we can ensure every child has the opportunity to succeed and
        thrive.
      </p>
      <div className="bg-[#A4B2BF] md:rounded-[100px] flex items-center justify-between gap-4 md:gap-0 w-full  flex-col md:flex-row mx-auto max-w-[750px] rounded-xl px-4 py-2">
        <p className="text-[#1A1A1A] text-center text-base">
          Click here to donate now and help level up the lives of children in
          need.
        </p>

        <CustomButton
          text="Donate Now"
          icon={
            <span className="bg-[#3A5774] p-3 rounded-full">
              <ArrowIcon stroke="#FFFFFF" />
            </span>
          }
          href="/contribute"
          className="!bg-[#001F3F] !text-[#fff]  w-max !px-3 !py-2 "
        />
      </div>
    </div>
  );
};

export default Donate;
