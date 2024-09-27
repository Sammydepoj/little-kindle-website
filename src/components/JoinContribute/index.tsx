import React from "react";
import CustomButton from "../Button";
import ArrowIcon from "@/assets/icons/ArrowIcon";

const JoinContribute = () => {
  return (
    <section className="my-4 flex gap-[40px] w-full">
      {/* <div className=" flex flex-col gap-[24px] bg-[#FCFCFD] p-[40px] border-[4px] border-[#F7F7F8] rounded-2xl ">
        <h1 className=" text-xl font-semibold">Join Our Team</h1>

        <p>
          Want to make a difference by volunteering with us? We&apos;re always
          looking for passionate individuals who share our vision. Please visit
          our Join Us page for more information and to fill out an application.{" "}
        </p>
        <CustomButton
          text="Join Us"
          icon={
            <span className="bg-[#3A5774] p-3 rounded-full">
              <ArrowIcon stroke="#FFFFFF" />
            </span>
          }
          className="!bg-[#001F3F] !text-[#fff] mx-auto w-max !px-3 !py-2 !place-self-end"
        />
      </div> */}
      <div className=" flex flex-col gap-[24px] bg-[#FCFCFD] p-[40px] border-[4px] border-[#F7F7F8] rounded-2xl mx-auto">
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
