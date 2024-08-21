"use client";
import Image from "next/image";
import logo from "../../assets/svgs/lka-logo.svg";
import Link from "next/link";
import EmailIcon from "@/assets/icons/EmailIcon";
import CustomButton from "../Button";
import React from "react";
import OpenMenuIcon from "@/assets/icons/OpenMenuIcon";
import CloseMenuIcon from "@/assets/icons/CloseMenuIcon";

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
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
          <Link href={"/"} className="text-[#4C4C4D] font-normal">
            Home
          </Link>
          <Link href={"/"} className="text-[#4C4C4D] font-normal">
            About Us
          </Link>
          <Link href={"/"} className="text-[#4C4C4D] font-normal">
            Our Work
          </Link>
          <Link href={"/"} className="text-[#4C4C4D] font-normal">
            Contribute
          </Link>
          <Link href={"/"} className="text-[#4C4C4D] font-normal">
            Join Us
          </Link>
          <Link href={"/"} className="text-[#4C4C4D] font-normal">
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
