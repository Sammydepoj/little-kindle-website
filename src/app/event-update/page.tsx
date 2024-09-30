import ArrowIcon from "@/assets/icons/ArrowIcon";
import CustomButton from "@/components/Button";
import Navbar from "@/components/Navbar";
import Outreach from "@/components/Outreach";
import React from "react";
import luxury from "@/assets/images/luxury.png";
import bag from "@/assets/images/bag.png";
import UpdateCard from "@/components/UpdateCard";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Updates = [
  {
    image: luxury,
    event: "Luxury For Little Charity Sales",
    details:
      "We are delighted to announce the successful inauguration of a new school building in Greenfield Village. This state-of-the-art facility will provide a conducive learning environment for over 300 children, empowering them with quality education and a brighter future.",
  },
  {
    image: bag,

    event: "Bag Distribution At Ebute Meta",
    details:
      "We are delighted to announce the successful inauguration of a new school building in Greenfield Village. This state-of-the-art facility will provide a conducive learning environment for over 300 children, empowering them with quality education and a brighter future.",
  },
  {
    image: luxury,

    event: "Luxury For Little Charity Sales",
    details:
      "We are delighted to announce the successful inauguration of a new school building in Greenfield Village. This state-of-the-art facility will provide a conducive learning environment for over 300 children, empowering them with quality education and a brighter future.",
  },
  {
    image: bag,

    event: "Bag Distribution At Ebute Meta",
    details:
      "We are delighted to announce the successful inauguration of a new school building in Greenfield Village. This state-of-the-art facility will provide a conducive learning environment for over 300 children, empowering them with quality education and a brighter future.",
  },
];
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
            {/* <CustomButton
              text="Join Us Today"
              icon={<ArrowIcon stroke="#3A5774" />}
              className="!text-[#3A5774] !bg-[#FFFFFF] "
              href="/join-us"
            /> */}
            <CustomButton
              text="Donate Now"
              href="/contribute"
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
      <Outreach />
      <div className="mt-24 mb-8 flex flex-col gap-[50px]">
        <h2 className="text-[#1A1A1A] font-semibold text-2xl md:text-4xl mx-auto text-center md:w-max">
          Latest Updates{" "}
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          Discover our most recent developments and initiatives in our 'Latest
          Updates' section. We keep you in the loop with the latest news,
          events, and progress on our mission, ensuring you're always up-to-date
          with our efforts to make a positive change.
        </p>
        <div className="  max-w-full  grid  items-center gap-8 justify-center  md:grid-cols-2">
          {Updates.map((item, index) => (
            <UpdateCard
              key={index}
              image={item.image}
              event={item.event}
              details={item.details}
            />
          ))}
        </div>
      </div>
        <Donate/>
        <Footer />
    </section>
  );
};

export default Page;
