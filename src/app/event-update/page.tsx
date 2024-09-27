import ArrowIcon from "@/assets/icons/ArrowIcon";
import CustomButton from "@/components/Button";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <section className="p-2 md:p-5">
      <Navbar />
      <div className=" my-14 flex flex-col lg:flex-row  bg-[#F7F7F8] p-2 md:py-8 md:px-11 rounded-2xl max-w-[100svw] mx-auto gap-[100px] md:gap-[160px] w-full border-[6px] border-[#F1F1F3] ">
        <div className=" flex flex-col text-3xl md:text-4xl font-semibold max-w-full ">
          <p className=" max-w-[400px] md:w-[400px] bg-[#E4E4E4] rounded-[14px] rounded-bl-none py-[8px] px-[12px]">
            Transforming Education
          </p>
          <p className=" bg-[#E4E4E4] rounded-[14px] max-w-[339px] md:w-[339px] p-[8px] rounded-tl-none rounded-tr-none ">
            Empowering Futures
          </p>
        </div>
        <div className=" flex flex-col gap-[40px]">
          <div>
            <p className=" text-base font-normal text-justify">
              At Little Kindles Africa, our work is driven by a commitment to
              transform the educational landscape for underserved children. We
              believe that every child deserves access to quality education, and
              we strive to remove barriers and create opportunities for learning
              and growth. Our initiatives are designed to address the unique
              challenges faced by children in various communities, ensuring they
              have the support and resources they need to succeed.
            </p>
          </div>
          <div className=" flex items-center flex-wrap gap-8 md:w-max ">
            <CustomButton
              text="Join Us Today"
              icon={<ArrowIcon stroke="#3A5774" />}
              className="!text-[#3A5774] !bg-[#FFFFFF] "
              href="/join-us"
            />
            <CustomButton
              text="Donate Now"
              icon={
                <span className="bg-[#3A5774] !p-2 rounded-full">
                  <ArrowIcon stroke="#FFFFFF" />
                </span>
              }
              className="!p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
