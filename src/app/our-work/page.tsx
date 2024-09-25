import Navbar from "@/components/Navbar";
import React from "react";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import CustomButton from "@/components/Button";
import CardWithImage from "@/components/CardWithImage";
import supply from "@/assets/images/supply.png";
import feeding from "@/assets/images/feeding.png";
import volunteer from "@/assets/images/volunteer.png";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
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
              Little Kindles Africa (LKA) is a registered Non-Governmental
              Organization (NGO) under the Corporate Affairs Commission of
              Nigeria. Established on October 1, 2014, LKA is dedicated to At
              Little Kindles Africa, our work is driven by a commitment to
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
      <div className=" ">
        <CardWithImage
          title="School Supplies"
          subtitle="Equipping Students for Success"
          description=" We distribute essential educational materials, including books, uniforms, 
          school bags, and stationery, to children in need. These resources are crucial for 
          academic success, helping students to fully engage with their studies and achieve
           their potential. By providing these materials, we remove financial barriers and 
           support families who might otherwise struggle to afford them"
          image={supply}
          imageAlt="image of guys supplying "
          showLearnMore={false}
        />
        <CardWithImage
          title="Feeding Programs"
          subtitle="Nourishing Minds and Bodies"
          description="Our feeding programs ensure that children receive 
          utritious meals, essential for their physical and cognitive development. 
          We work with local communities to identify and address food insecurity, providing
           regular meals that help students stay focused and energized throughout the school day."
          image={feeding}
          imageAlt="feeding"
          showLearnMore={false}
          reverse
        />
        <CardWithImage
          title="Volunteer Programs"
          subtitle="Harnessing the Power of Volunteerism"
          description=" Our dedicated volunteers are the backbone of Little Kindles Africa. They bring diverse skills and expertise to our initiatives, from teaching and mentoring to organizing events and fundraising. By volunteering with us, individuals can make a meaningful impact on children's lives, while also gaining valuable experience and personal growth."
          image={volunteer}
          imageAlt="image of guys volunteering "
          showLearnMore={false}
        />
        <CardWithImage
          title="Volunteer Programs"
          subtitle="Harnessing the Power of Volunteerism"
          description=" Our dedicated volunteers are the backbone of Little Kindles Africa. They bring diverse skills and expertise to our initiatives, from teaching and mentoring to organizing events and fundraising. By volunteering with us, individuals can make a meaningful impact on children's lives, while also gaining valuable experience and personal growth."
          image={volunteer}
          imageAlt="image of guys volunteering "
          showLearnMore={false}
          reverse
        />
        <Donate />
        <Footer />
      </div>
    </section>
  );
};

export default Page;
