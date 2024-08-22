import React from "react";
import CustomButton from "../Button";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import Image from "next/image";

type Props = {
  image: any;
  cardTitle: string;
  cardDescription: string;
  showButtons: boolean;
  learnMoreAction?: () => void;
  donateNowAction?: () => void;
  imageAlt?: string;
};

const HeroCard = ({
  cardDescription,
  cardTitle,
  image,
  showButtons,
  donateNowAction,
  learnMoreAction,
  imageAlt,
}: Props) => {
  return (
    <div>
      <Image alt={imageAlt ?? ""} src={image} className="-z-30 mx-auto" />
      <div className="bg-[#F7F7F8] p-2 md:py-8 md:px-11 rounded-2xl max-w-[980px] mx-auto mt-[-2%]  sm:mt-[-5%] z-[90] relative">
        <h1 className="text-[#1A1A1A] font-semibold text-2xl sm:text-3xl md:text-5xl text-center ">
          {cardTitle}
        </h1>
        <p className="text-base text-[#4C4C4D] font-normal text-center my-3 md:my-8">
          {cardDescription}
        </p>
        {showButtons && (
          <div className="mx-auto flex items-center flex-wrap gap-8 md:w-max">
            <CustomButton
              text="Learn More"
              icon={<ArrowIcon stroke="#3A5774" />}
              className="!text-[#3A5774] !bg-[#FFFFFF]"
              onClick={learnMoreAction}
            />
            <CustomButton
              text="Donate Now"
              icon={
                <span className="bg-[#3A5774] p-2 rounded-full">
                  <ArrowIcon stroke="#FFFFFF" />
                </span>
              }
              className="!p-2"
              onClick={donateNowAction}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroCard;
