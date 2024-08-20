import React from "react";
import HeroImage from "../../assets/images/HeroImg.png";
import Image from "next/image";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import CountHolder from "../CountHolder";
import ShiningLightIcon from "@/assets/icons/ShinningLight";
import blackBoy from "../../assets/images/blackBoy.png";
import blackGirls from "../../assets/images/blackGirls.png";

import ShineMark from "@/assets/icons/ShineMark";
import Card from "../Card";
import Donate from "../Donate";
import CustomButton from "../Button";
const countData = [
  {
    text: "Children reached in Lagos, Oyo, and Ogun States through our dedicated efforts. We are committed to making education accessible and impactful for every child in these communities.",
    count: "3000+",
  },
  {
    text: "Renovated schools and distributed essential resources including educational materials, clothes, food, books, and school bags.",
    count: "15+",
  },
  {
    text: "Dedicated volunteers ready to support education. Our volunteers are the backbone of our mission to empower children through education.",
    count: "30+",
  },
];

const Hero = () => {
  return (
    <div className="my-4">
      <Image alt="" src={HeroImage} className="-z-30" />
      <div className="bg-[#F7F7F8] py-8 px-11 rounded-2xl max-w-[980px] mx-auto mt-[-6rem] z-[10000] relative">
        <h1 className="text-[#1A1A1A] font-semibold text-5xl text-center ">
          Igniting the Spark of Education for Africa's Children
        </h1>
        <p className="text-base text-[#4C4C4D] font-normal text-center my-8">
          Empowering underserved children in Africa through education. Since
          2014, Little Kindles Africa has reached over 3,000 children in Lagos,
          Oyo, and Ogun States. Join us in our mission to provide essential
          educational resources and support. Together, we can create a brighter
          future for every child.
        </p>
        <div className="mx-auto flex items-center gap-8 w-max">
          <CustomButton
            text="Learn More"
            icon={<ArrowIcon stroke="#3A5774" />}
            className="!text-[#3A5774] !bg-[#FFFFFF]"
          />
          <CustomButton
            text="Donate Now"
            icon={
              <span className="bg-[#3A5774] p-2 rounded-full">
                <ArrowIcon stroke="#FFFFFF" />
              </span>
            }
            className="!p-2"
          />
        </div>
      </div>
      <div className="my-20">
        <h2 className="text-[#1A1A1A] my-4 font-semibold text-4xl mx-auto w-max">
          Make a Difference Through Education
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          We believe every child deserves quality education. By renovating
          schools and distributing educational materials and resources, we
          create safe learning environments and provide essential tools for
          success.
        </p>
      </div>
      <div className=" max-w-[95%] mx-auto w-full my-16 flex items-center justify-between flex-wrap">
        {countData.map((item, index) => (
          <CountHolder key={index} count={item.count} text={item.text} />
        ))}
      </div>
      <div className="my-12">
        <h2 className="text-[#1A1A1A] my-4 font-semibold text-4xl mx-auto w-max">
          Cherishing Every Child's Potential
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          At Little Kindles Africa, we believe that every child is unique and
          deserving of the opportunity to shine. Our mantra, "Every child is
          special," drives our commitment to providing tailored support and
          resources to empower each child's educational journey.
        </p>
      </div>
      <div className="flex items-center gap-3 bg-[#F1F1F3] w-max mx-auto py-2 font-normal px-3 rounded-[100px] text-white ">
        <ShiningLightIcon />

        <p className="text-[#1A1A1A] font-semibold">Every Child is Special</p>
      </div>
      <div className="flex gap-6 my-8">
        <Image src={blackBoy} alt="image of a an african black boy" />
        <div className="bg-[#F1F1F3] p-6 rounded-2xl grid">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3">
              <ShineMark />
              <h4 className="text-[#1A1A1A] font-semibold text-3xl">Vision</h4>
            </span>

            <CustomButton
              text="Learn More"
              icon={<ArrowIcon stroke="#3A5774" />}
              className="!bg-[#FFFFFF] !text-[#3A5774]"
            />
          </div>
          <p className="bg-[#FFFFFF] mx-auto p-6 rounded-2xl text-base font-normal">
            Little Kindles Africa envisions an Africa where every child has
            access to basic education. We strive to create an inclusive
            educational landscape where no child is left behind due to
            socio-economic barriers. By advocating for equal educational
            opportunities and providing essential resources, we aim to ensure
            that every child can attend school and receive a quality education.
          </p>
        </div>
      </div>
      <div className="flex gap-6 my-8">
        <div className="bg-[#F1F1F3] p-6 rounded-2xl grid">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3">
              <ShineMark />
              <h4 className="text-[#1A1A1A] font-semibold text-3xl">Mission</h4>
            </span>
            <CustomButton
              text="Learn More"
              icon={<ArrowIcon stroke="#3A5774" />}
              className="!bg-[#FFFFFF] !text-[#3A5774]"
            />
          </div>
          <p className="bg-[#FFFFFF] mx-auto p-6 rounded-2xl text-base font-normal">
            To support the education of 50,000 underserved children by 2030,
            Little Kindles Africa focuses on providing essential resources such
            as books, uniforms, and school supplies. We renovate and equip
            schools to create safe learning environments and collaborate with
            local communities, governments, and NGOs to address educational
            needs.
          </p>
        </div>
        <Image src={blackGirls} alt="image of some african girls" />
      </div>
      <div className="my-20">
        <h2 className="text-[#1A1A1A] my-4 font-semibold text-4xl mx-auto w-max">
          Transform Lives by Volunteering{" "}
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          Join our passionate team of volunteers at Little Kindles Africa and
          make a tangible impact on the lives of underserved children. Your
          dedication can help us bring quality education to those who need it
          most.
        </p>
      </div>
      <div className="flex items-center gap-6 flex-wrap mx-auto  ">
        <Card
          title="Meaningful Impact"
          description="Use your unique skillset to make a difference in children's lives. Your contributions will directly benefit educational programs and empower underserved children."
        />
        <Card
          title="Community Engagement"
          description="Join a supportive and passionate community dedicated to education and work with like-minded individuals to empower underserved children and achieve our shared goals."
        />
        <Card
          title="Skill Development"
          description="Volunteering with Little Kindles Africa offers opportunities to enhance your growth by gaining experience in education, program management, and outreaches. "
        />
      </div>

      <CustomButton
        text="Join Us Today"
        icon={
          <span className="bg-[#3A5774] p-3 rounded-full">
            <ArrowIcon stroke="#FFFFFF" />
          </span>
        }
        className="!bg-[#F1F1F3] !text-[#3A5774] mx-auto !my-8 w-max !px-3 !py-2"
      />
      <Donate />
    </div>
  );
};

export default Hero;