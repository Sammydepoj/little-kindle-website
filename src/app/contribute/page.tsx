import ArrowIcon from "@/assets/icons/ArrowIcon";
import CustomButton from "@/components/Button";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Contribute = () => {
  return (
    <section className="p-2 md:p-5">
      <Navbar />
      <div className=" my-14 flex flex-col lg:flex-row  md:grid md:grid-cols-[30%_1fr] bg-[#F7F7F8] p-2 md:py-16 md:px-11 rounded-2xl max-w-[100svw] mx-auto gap-8  w-full border-[6px] border-[#F1F1F3] ">
        <div className=" flex flex-col text-3xl md:text-4xl font-semibold max-w-full ">
          <p className=" max-w-[403px] bg-[#E4E4E4] rounded-t-[14px] w-full py-[8px] px-[12px]">
            Make a Difference With
          </p>
          <p className=" bg-[#E4E4E4] rounded-[14px] max-w-[430px] w-full p-[8px] rounded-tl-none ">
            Your Contribution Today
          </p>
        </div>
        <div className=" flex flex-col gap-[40px]">
          <div>
            <p className=" text-base font-normal text-justify">
              Your contributions can change lives. At Little Kindles Africa, we
              believe that every child deserves access to quality education, and
              your support can help us achieve this goal. There are many ways to
              get involved, whether through financial donations, in-kind
              contributions, or volunteering your time and skills. Together, we
              can create a brighter future for Africa’s underserved children.
            </p>
          </div>
          <div className=" flex items-center flex-wrap gap-8 md:w-max ">
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
      <div className="my-20">
        <h2 className="text-[#1A1A1A] my-4 font-semibold text-2xl md:text-4xl mx-auto text-center md:w-max">
          Support Education, Transform Lives
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          Contribute to Little Kindles Africa through financial donations or
          item contributions. Every act of generosity helps provide quality
          education and essential resources to underserved children, creating a
          brighter future for all.
        </p>
      </div>

      {/* //////////////////////////////// DONATION FEATURES //////////////////// */}
      <div className="my-20">
        <h2 className="text-[#1A1A1A] my-4 font-semibold text-2xl md:text-4xl mx-auto text-center md:w-max">
          Donate to the Gift of Learning
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          Your generosity fuels education for children in need. By donating, you
          provide the tools and support necessary to create brighter futures.
          Join us in making a difference, one child at a time.
        </p>
      </div>
      {/* //////////////////////////////// DONATION CARD //////////////////// */}

      <Donate />
      <Footer />
    </section>
  );
};

export default Contribute;
