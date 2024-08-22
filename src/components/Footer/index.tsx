import React from "react";
import logo from "../../assets/svgs/lka-logo.svg";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import FacebookIcon from "@/assets/icons/Facebook";
import TwitterIcon from "@/assets/icons/Twitter";
import InstagramIcon from "@/assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="mt-24">
      <Image src={logo} alt="" className="md:mb-20" />
      <div className="flex  justify-between items-center flex-wrap gap-4 border-b">
        <div className="flex items-center flex-wrap gap-8">
          <Link href={"/"} className="text-[#4C4C4D] font-normal">
            Home
          </Link>
          <Link href="/about-us" className="text-[#4C4C4D] font-normal">
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
        <div className="border rounded-tl-2xl rounded-tr-2xl p-3 flex flex-wrap justify-center items-center gap-8">
          <div className="grid place-items-center gap-4">
            <p>Would love to donate?</p>
            <div className="flex items-center gap-3 mx-auto bg-[#001F3F] py-2 font-normal px-3 rounded-[100px] text-white ">
              <button className="">Donate Now</button>
              <span className="bg-[#3A5774] p-3 rounded-full">
                <ArrowIcon stroke="#FFFFFF" />
              </span>
            </div>
          </div>
          <div className="grid place-items-center gap-4">
            <p>Want to collaborate with us?</p>
            <a
              href="mailto:littlekindlesafrica@gmail.com"
              className="flex items-center gap-3 w-max mx-auto bg-[#001F3F] py-2 font-normal px-3 rounded-[100px] text-white"
            >
              <button className="">Reach Us</button>
              <EmailIcon />
            </a>
          </div>
          <div className="grid place-items-center gap-4">
            <p>Follow Our Socials</p>
            <div className="flex items-center gap-3 mx-auto bg-[#001F3F] py-2 font-normal px-3 rounded-[100px] text-white ">
              <Link href={""} className="">
                <FacebookIcon />
              </Link>
              <Link
                href={"https://x.com/littlekindles?s=21"}
                target="_blank"
                className=""
              >
                <TwitterIcon />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/littlekindlesafrica?igsh=eGJneGg3NmtybjRn&utm_source=qr"
                }
                target="_blank"
                className=""
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#4C4C4D] my-8 text-center mx-auto">
        © 2024 LittleKindles Africa. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
