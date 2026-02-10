import Image from "next/image";
import React from "react";
import outreach from "@/assets/images/outreach.png";
import bright from "@/assets/images/bright.webp";

const Outreach = () => {
  return (
    <section className=" w-full bg-[#FCFCFD] border-[4px] border-[#F7F7F8] p-[40px] rounded-[16px] gap-[30px] flex flex-col items-center">
      <div className=" flex flex-col gap-[30px] items-center max-w-[700px]">
        <Image alt="bright" src={bright} className=" " />
        {/* <Image alt="outreach" src={next} /> */}
      </div>
      <div className=" flex flex-col gap-[10px]">
        <h1 className=" font-semibold text-[#1A1A1A] text-[20px]">
          Bright Beginnings
        </h1>
        <p className=" text-[#4C4C4D] text-base font-medium ">
          We sparked a brighter future at St. Raphael’s Nursery and Primary
          School, Okokomaiko! Little Kindles Africa (LKA) visited this vibrant
          Lagos community to replace outdated chalkboards with modern marker
          boards and provide essential stationery kits. In underserved areas,
          the lack of basic tools often dimmed a child’s potential; by equipping
          these classrooms, we removed significant barriers to learning. This
          donation served as a vital step in our mission to provide inclusive
          education across Nigeria. We ensured that every student could
          participate fully, proving that with the right resources, no child is
          left behind.
        </p>
      </div>
    </section>
  );
};

export default Outreach;
