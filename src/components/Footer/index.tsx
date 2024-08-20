import React from "react";
import logo from "../../assets/svgs/lka-logo.svg";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import FacebookIcon from "@/assets/icons/Facebook";
import TwitterIcon from "@/assets/icons/Twitter";
import LinkedInIcon from "@/assets/icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="mt-24">
      <Image src={logo} alt="" className="mb-20" />
      <div className="flex  justify-between items-center border-b">
        <div className="flex items-center gap-8">
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
        <div className="border rounded-tl-2xl rounded-tr-2xl p-3 flex items-center gap-8">
          <div className="grid gap-4">
            <p>Would love to donate?</p>
            <div className="flex items-center gap-3 mx-auto bg-[#001F3F] py-2 font-normal px-3 rounded-[100px] text-white ">
              <button className="">Donate Now</button>
              <span className="bg-[#3A5774] p-3 rounded-full">
                <ArrowIcon stroke="#FFFFFF" />
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            <p>Want to collaborate with us?</p>
            <div className="flex items-center gap-3 w-max mx-auto bg-[#001F3F] py-2 font-normal px-3 rounded-[100px] text-white ">
              <button className="">Reach Us</button>
              <EmailIcon />
            </div>
          </div>
          <div className="grid gap-4">
            <p>Follow Our Socials</p>
            <div className="flex items-center gap-3 mx-auto bg-[#001F3F] py-2 font-normal px-3 rounded-[100px] text-white ">
              <button className="">
                <FacebookIcon />
              </button>
              <button className="">
                <TwitterIcon />
              </button>
              <button className="">
                <LinkedInIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#4C4C4D] my-8 w-max mx-auto">
        © 2024 LittleKindles Africa. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;