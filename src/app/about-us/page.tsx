import ArrowIcon from "@/assets/icons/ArrowIcon";
import ShiningLightIcon from "@/assets/icons/ShinningLight";
import CustomButton from "@/components/Button";
import CardWithImage from "@/components/CardWithImage";
import Navbar from "@/components/Navbar";
import React from "react";
import blackboy from "@/assets/images/blackBoy.png";
import blackGirls from "@/assets/images/blackGirls.png";
import HeroCard from "@/components/HeroCard";
import aboutImg from "@/assets/images/aboutImg.png";
import Goal from "@/components/Goal";
import ShineMark from "@/assets/icons/ShineMark";
import TeamCard from "@/components/TeamCard";
import oyin from "../../assets/images/oyin.png";
import faith from "../../assets/images/faith.png";
import anica from "../../assets/images/anica.png";
import grace from "../../assets/images/grace.png";
import ibiloye from "../../assets/images/ibiloye.png";
import mary from "../../assets/images/mary.png";
import ogun from "../../assets/images/ogun.png";
import oluwatoyin from "../../assets/images/oluwatoyin.png";
import samuel from "../../assets/images/samuel.png";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const teamData = [
  {
    image: oyin,
    name: "Oyin Asaaju",
    title: "Founder, Little Kindles Africa",
    location: "Lagos, Nigeria",
  },
  {
    image: ibiloye,
    name: "Ibiloye Toluwanimi",
    title: "Head Of Finance",
    location: "Massachusetts, USA",
  },
  {
    image: anica,
    name: "Anica",
    title: "Volunteer, Programs Department",
    location: "Lagos, Nigeria",
  },
  {
    image: oyin,
    name: "Oyin Asaaju",
    title: "Founder, Little Kindles Africa",
    location: "Lagos, Nigeria",
  },
  {
    image: ibiloye,
    name: "Ibiloye Toluwanimi",
    title: "Head Of Finance",
    location: "Massachusetts, USA",
  },
  {
    image: anica,
    name: "Anica",
    title: "Volunteer, Programs Department",
    location: "Lagos, Nigeria",
  },
  {
    image: oyin,
    name: "Oyin Asaaju",
    title: "Founder, Little Kindles Africa",
    location: "Lagos, Nigeria",
  },
  {
    image: ibiloye,
    name: "Ibiloye Toluwanimi",
    title: "Head Of Finance",
    location: "Massachusetts, USA",
  },
  {
    image: anica,
    name: "Anica",
    title: "Volunteer, Programs Department",
    location: "Lagos, Nigeria",
  },
  {
    image: oyin,
    name: "Oyin Asaaju",
    title: "Founder, Little Kindles Africa",
    location: "Lagos, Nigeria",
  },
  {
    image: ibiloye,
    name: "Ibiloye Toluwanimi",
    title: "Head Of Finance",
    location: "Massachusetts, USA",
  },
  {
    image: anica,
    name: "Anica",
    title: "Volunteer, Programs Department",
    location: "Lagos, Nigeria",
  },
];
const Page = () => {
  return (
    <section className="p-2 md:p-5">
      <Navbar />
      <div className=" my-14 flex flex-col lg:flex-row  bg-[#F7F7F8] p-2 md:py-8 md:px-11 rounded-2xl max-w-[100svw] mx-auto gap-[100px] md:gap-[160px] w-full border-[6px] border-[#F1F1F3] ">
        <div className=" flex flex-col text-3xl md:text-4xl font-semibold max-w-full ">
          <p className=" max-w-[120px] bg-[#E4E4E4] rounded-t-[14px] py-[8px] px-[12px]">
            About
          </p>
          <p className=" bg-[#E4E4E4] rounded-[14px] max-w-[316px] md:w-[316px] p-[8px] rounded-tl-none ">
            Little Kindles Africa
          </p>
        </div>
        <div className=" flex flex-col gap-[40px]">
          <div>
            <p className=" text-base font-normal text-justify">
              Little Kindles Africa (LKA) is a registered Non-Governmental
              Organization (NGO) under the Corporate Affairs Commission of
              Nigeria. Established on October 1, 2014, LKA is dedicated to
              supporting the basic education of underserved children in Africa.
              Our mission is to provide every form of support that promotes
              education in Africa, reaching over 3,000 children across Lagos,
              Oyo, and Ogun States. Through our outreach programs, including
              school renovations and the distribution of educational materials,
              clothes, food, books, and school bags, we aim to create lasting
              change in the communities we serve. Since our inception, Little
              Kindles Africa has been on a mission to transform the educational
              landscape for underserved children. We started with a simple goal:
              to ensure that every child has access to basic education. Over the
              years, we have grown from a small group of passionate individuals
              to a robust organization with over 30 volunteers worldwide. Our
              journey is marked by numerous outreach programs, including school
              renovations, distribution of educational materials, and providing
              essential resources like clothes, food, books, and school bags
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
      <section>
        <div className="mt-24 mb-8">
          <h2 className="text-[#1A1A1A]  font-semibold text-2xl md:text-4xl mx-auto text-center md:w-max">
            Cherishing Every Child&apos;s Potential
          </h2>
          <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
            At Little Kindles Africa, we believe that every child is unique and
            deserving of the opportunity to shine. Our mantra, &quot;Every child
            is special,&quot; drives our commitment to providing tailored
            support and resources to empower each child&apos;s educational
            journey.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-[#F1F1F3] w-max mx-auto py-2 font-normal px-3 rounded-[100px] text-white ">
          <ShiningLightIcon />

          <p className="text-[#1A1A1A] font-semibold">Every Child is Special</p>
        </div>
        <CardWithImage
          title="Vision"
          description=" Little Kindles Africa envisions an Africa where every child has access to basic education.
           We strive to create an inclusive educational landscape where no child is left behind due to socio-economic barriers.
            By advocating for equal educational opportunities and providing essential resources, we aim to ensure that every
             child can attend school and receive a quality education. Our vision is to foster an environment where children 
             can grow, learn, and thrive, ultimately contributing to the development and progress of their communities and
              the continent as a whole. We believe that education is the key to unlocking Africa's full potential."
          image={blackboy}
          imageAlt="image of a an african black boy"
          showLearnMore={false}
        />

        <CardWithImage
          title="Mission"
          description="To support the education of 50,000 underserved children by 2030, Little Kindles Africa focuses on 
          providing essential resources such as books, uniforms, and school supplies. We renovate and equip schools to
           create safe learning environments and collaborate with local communities, governments, and NGOs to address educational needs.
            Our dedicated volunteers conduct outreach programs that foster a love for learning. By empowering children with knowledge and skills
            , we aim to break the cycle of poverty and build a brighter future for themselves and their communities, positively impacting 50,000 children by 2030."
          image={blackGirls}
          imageAlt="image of some african girls"
          showLearnMore={false}
          reverse
        />
      </section>
      <div className=" flex flex-col gap-[60px] my-24 ">
        <div className=" ">
          <HeroCard
            image={aboutImg}
            cardTitle=" Goals and Objectives"
            cardDescription="  Our primary goal is to ensure that every child in Africa has access to quality education. To achieve this, we have defined these objectives"
            showButtons={false}
          />
        </div>
        <div className=" flex flex-col gap-5 bg-[#F1F1F3] p-[40px] rounded-2xl">
          <Goal
            title="Expand Reach"
            description="Our goal is to increase the number of children we support to 50,000 by 2030.
           To achieve this, we plan to extend our programs to more regions across Africa, ensuring 
           that underserved communities receive the educational support they need. By partnering with local schools,
            community leaders, and other NGOs, we aim to identify and reach children who lack access to basic education. 
            Our outreach programs will be tailored to address the unique challenges of each community, providing targeted 
            support that makes a real difference in the lives of these children."
          />

          <Goal
            title="Improve Infrastructure"
            description="To renovate and equip schools to create conducive learning environments. By upgrading facilities and
           providing necessary resources, we ensure that children can learn in safe, well-equipped spaces that foster
           academic success and personal growth."
          />
          <Goal
            title="Provide Resources"
            description="We aim to continue the distribution of educational materials, uniforms, and essential supplies to students.
           Ensuring children have the tools they need to succeed academically, we are set to remove education barriers and support
            their journey towards a brighter future."
          />
          <Goal
            title="Empower Communities"
            description="We plan to engage with local communities to promote the importance of education and encourage active participation.
           By involving parents, teachers, and community leaders, we aim to build a supportive network that values and prioritizes children's education."
          />
        </div>
      </div>
      <div className="my-12 flex flex-col gap-6">
        <h2 className="text-[#1A1A1A] my-4 font-semibold text-2xl md:text-4xl mx-auto text-center md:w-max">
          Meet Our Team
        </h2>
        <p className="text-[#4C4C4D] text-base  max-w-[980px] mx-auto text-center">
          Meet the passionate individuals behind Little Kindles Africa. Our team
          comprises dedicated volunteers, team leads, and a board of directors,
          all working tirelessly to support our mission. Together, we bring
          diverse skills and expertise to drive our initiatives forward.
        </p>
        <div className="  max-w-full  flex  items-center gap-8 justify-between flex-wrap">
          {teamData.map((item, index) => (
            <TeamCard
              key={index}
              name={item.name}
              title={item.title}
              location={item.location}
              image={item.image}
            />
          ))}
          <div></div>
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
      </div>
      <Donate />
      <Footer />
    </section>
  );
};

export default Page;
