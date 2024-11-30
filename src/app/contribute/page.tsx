import ArrowIcon from "@/assets/icons/ArrowIcon";
import CustomButton from "@/components/Button";
import Donate from "@/components/Donate";
import FinancialDonation from "@/components/FinancialDonation";
import Footer from "@/components/Footer";
import ItemDonation from "@/components/ItemDonation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import blackGirls from "@/assets/images/blackGirls.png";
import LeaveMessage from "@/components/LeaveMessage";
import DonateMessage from "@/components/DonateMessage";
import JoinContribute from "@/components/JoinContribute";

const financialDonation = [
  {
    topic: "Online Donations",
    subTopic: "Secure and easy online donation platform.",
  },
  {
    topic: "Bank Transfers",
    subTopic: "Direct bank transfer details.",
  },
  {
    topic: "Monthly Giving",
    subTopic: "Set up a recurring donation to provide ongoing support.",
  },
];
const itemDonation = [
  {
    topic: "Books and Stationery",
    subTopic:
      "Equip children with essential learning tools to foster their educational growth.",
  },
  {
    topic: "School Uniforms and Bags",
    subTopic:
      "Provide uniforms and bags to help children attend school confidently and comfortably.",
  },
  {
    topic: "Non-perishable Food Items",
    subTopic: "Set up a recurring donation to provide ongoing support.",
  },
  {
    topic: "Computers and Learning Devices",
    subTopic:
      "Empower digital learning by donating computers and devices to enhance children's education.",
  },
];
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
          {/* <div className=" flex items-center flex-wrap gap-8 md:w-max ">
            <CustomButton
              text="Donate Now"
              icon={
                <span className="bg-[#3A5774] !p-2 rounded-full">
                  <ArrowIcon stroke="#FFFFFF" />
                </span>
              }
              className="!p-2"
            />
          </div> */}
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
        <p className=" bg-[#EBEBEB] max-w-fit text-[#1A1A1A] py-4 px-5 rounded-[10px] font-semibold relative top-[6.5rem]  mx-auto text-center">
          Make All Financial Donations To The Account Below
        </p>
        <div className=" flex flex-col gap-5 bg-[#F1F1F3] py-[5rem] px-[10rem] rounded-2xl justify-center align-middle">
          <div className=" bg-[#FFFFFF] rounded-[14px] flex flex-col justify-center items-center text-center gap-[52px] align-middle p-4 text-[#1A1A1A] py-[66px]">
            <div>
              <p className=" text-[18px] font-semibold">Account Number</p>
              <p className=" text-[22px] font-bold">1015275089</p>
            </div>
            <div>
              <p className=" text-[18px] font-semibold">Bank</p>
              <p className=" text-[22px] font-bold">Zenith Bank</p>
            </div>
            <div>
              <p className=" text-[18px] font-semibold">Account Name</p>
              <p className=" text-[22px] font-bold">Little Kindles Africa</p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="flex bg-[#F7F7F8] w-full rounded-2xl border-[2px] border-[#F1F1F3] justify-evenly p-[28px] gap-5 flex-col md:flex-row">
        <div className="flex flex-col gap-4 border-[1px] border-[#F1F1F3] p-2 rounded-[20px]">
          <div className=" flex justify-center ">
            <p className=" bg-[#EBEBEB] py-4 px-5 rounded-[10px] max-w-[212px] mt-[-3.5rem]  text-[#1A1A1A] font-semibold text-xl">
              Items Donations
            </p>
          </div>
          {itemDonation.map((item, index) => (
            <ItemDonation
              key={index}
              topic={item.topic}
              subTopic={item.subTopic}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4  border-[1px] border-[#F1F1F3] p-2 rounded-[20px] ">
          <div className=" flex justify-center ">
            <p className=" bg-[#EBEBEB] py-4 px-5 rounded-[10px] max-w-[212px] md:mt-[-3.5rem] text-[#1A1A1A] font-semibold text-xl whitespace-nowrap">
              Financial Donations
            </p>
          </div>
          {financialDonation.map((item, index) => (
            <FinancialDonation
              key={index}
              topic={item.topic}
              subTopic={item.subTopic}
            />
          ))}
        </div>
      </div> */}

      {/* <div className="my-20">
        <h2 className="text-[#1A1A1A] my-4 font-semibold text-2xl md:text-4xl mx-auto text-center md:w-max">
          Donate to the Gift of Learning
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          Your generosity fuels education for children in need. By donating, you
          provide the tools and support necessary to create brighter futures.
          Join us in making a difference, one child at a time.
        </p>
      </div> */}
      {/* <div className=" md:flex bg-[#FCFCFD]  w-full mx-auto p-[10px] md:p-[40px] md:gap-20">
        <Image
          alt="girls"
          src={blackGirls}
          className=" w-full max-h-[418px] max-w-[372px] hidden md:block "
        />
        <DonateMessage />
      </div> */}
      <JoinContribute />
      <Donate />
      <Footer />
    </section>
  );
};

export default Contribute;
