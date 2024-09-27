import ArrowIcon from "@/assets/icons/ArrowIcon";
import CustomButton from "@/components/Button";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import JoinContribute from "@/components/JoinContribute";
import LeaveMessage from "@/components/LeaveMessage";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <section className="p-2 md:p-5 ">
      <Navbar />
      <div className=" my-14 flex flex-col lg:flex-row  bg-[#F7F7F8] p-2 md:py-8 md:px-11 rounded-2xl max-w-[100svw] mx-auto gap-[100px] md:gap-[160px] w-full border-[6px] border-[#F1F1F3] ">
        <div className=" flex flex-col text-3xl md:text-4xl font-semibold max-w-full  ">
          <p className=" max-w-[315px] md:w-[315px] bg-[#E4E4E4] rounded-[14px] rounded-bl-none rounded-br-none py-[8px] px-[12px]">
            We&apos;re Here to Help
          </p>
          <p className=" bg-[#E4E4E4] rounded-[14px] max-w-[315px] md:w-[315px] p-[8px] rounded-tl-none rounded-tr-none ">
            Get in Touch Today
          </p>
        </div>
        <div className=" flex flex-col gap-[40px] w-full">
          <div>
            <p className=" text-base font-normal text-justify">
              At Little Kindles Africa, we value communication and are always
              available to connect with our supporters, volunteers, and
              partners. Whether you have a question, want to get involved, or
              are interested in partnering with us, We&apos;re here to listen
              and respond.
            </p>
          </div>
          <div className=" flex items-center flex-wrap gap-8 md:w-full justify-between">
            <div>
              <p className=" text-[#4C4C4D] text-base">Email</p>
              <p className=" text-[#1A1A1A] text-base">
                info@littlekindlesafrica.org
              </p>
            </div>
            <div>
              <p className=" text-[#4C4C4D] text-base">Phone Number</p>
              <p className=" text-[#1A1A1A] text-base">+234 (81) 7089 2345</p>
            </div>
          </div>
        </div>
      </div>
      <LeaveMessage />
      <JoinContribute />
      <Donate />
      <Footer />
    </section>
  );
};

export default Page;
