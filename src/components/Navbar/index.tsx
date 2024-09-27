"use client";
import Image from "next/image";
import logo from "../../assets/svgs/lka-logo.svg";
import Link from "next/link";
import EmailIcon from "@/assets/icons/EmailIcon";
import CustomButton from "../Button";
import React from "react";
import OpenMenuIcon from "@/assets/icons/OpenMenuIcon";
import CloseMenuIcon from "@/assets/icons/CloseMenuIcon";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-[0.7fr_2fr] relative">
      <Image src={logo} alt="" />

      <div
        className={` items-center justify-evenly  ${
          open
            ? "flex flex-col absolute top-20 right-1 z-[100] bg-white px-12 py-5 rounded-md"
            : "bg-transparent hidden lg:flex-row lg:flex lg:justify-between"
        }`}
      >
        <div className="flex items-center gap-8 flex-col lg:flex-row mb-8 lg:mb-0">
          <Link
            href={"/"}
            className={`text-[#4C4C4D] font-normal ${
              pathname === "/" &&
              "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
            }`}
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className={`text-[#4C4C4D] font-normal ${
              pathname === "/about-us" &&
              "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
            }`}
          >
            About Us
          </Link>
          <Link
            href={"/our-work"}
            className={`text-[#4C4C4D] font-normal ${
              pathname === "/our-work" &&
              "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
            }`}
          >
            Our Work
          </Link>
          <Link
            href={"/contribute"}
            className={`text-[#4C4C4D] font-normal ${
              pathname === "/contribute" &&
              "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
            }`}
          >
            Contribute
          </Link>
          <Link
            href={""}
            className={`text-[#4C4C4D] font-normal ${
              pathname === "/join-us" &&
              "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
            }`}
          >
            Join Us
          </Link>
          <Link
            href={""}
            className={`text-[#4C4C4D] font-normal ${
              pathname === "/event-updates" &&
              "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
            }`}
          >
            Event Updates
          </Link>
        </div>
        <CustomButton
          text="Reach Us"
          icon={<EmailIcon />}
          className="!py-2 !px-3 !ml-auto"
        />
      </div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="place-self-end my-auto lg:hidden"
      >
        {open ? <CloseMenuIcon /> : <OpenMenuIcon />}
      </button>
    </div>
  );
};

export default Navbar;
