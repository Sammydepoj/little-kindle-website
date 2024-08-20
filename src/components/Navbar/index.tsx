import Image from "next/image";
import logo from "../../assets/svgs/lka-logo.svg";
import Link from "next/link";
import EmailIcon from "@/assets/icons/EmailIcon";
import CustomButton from "../Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src={logo} alt="" />
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

      <CustomButton
        text="Reach Us"
        icon={<EmailIcon />}
        className="!py-2 !px-3"
      />
    </div>
  );
};

export default Navbar;
