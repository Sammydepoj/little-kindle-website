import React from "react";
import CustomButton from "../Button";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import ShineMark from "@/assets/icons/ShineMark";
import Image from "next/image";

type Props = {
  image: any;
  title: string;
  description: string;
  learnMoreAction?: () => void;
  showLearnMore: boolean;
  imageAlt: string;
  reverse?: boolean;
  subtitle?: string;
};
const CardWithImage = ({
  description,
  image,
  showLearnMore,
  learnMoreAction,
  title,
  imageAlt,
  reverse,
  subtitle,
}: Props) => {
  return (
    <div
      className={`flex gap-6 my-8 flex-wrap md:flex-nowrap w-full justify-center ${
        reverse && "flex-row-reverse"
      }`}
    >
      <Image src={image} alt={imageAlt} />
      <div
        className="bg-[#F1F1F3] p-2 md:p-6 rounded-2xl grid"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="flex items-center justify-between flex-wrap gap-4 my-4">
          <span className="flex items-center gap-3">
            <ShineMark />
            <h4 className="text-[#1A1A1A] font-semibold text-2xl md:text-3xl">
              {title}
            </h4>
          </span>

          {showLearnMore && (
            <CustomButton
              text="Learn More"
              icon={<ArrowIcon stroke="#3A5774" />}
              className="!bg-[#FFFFFF] !text-[#3A5774]"
              onClick={learnMoreAction}
            />
          )}
        </div>
        <p className=" text-lg font-semibold">{subtitle}</p>
        <p className="bg-[#FFFFFF] mx-auto p-2 md:p-6 rounded-2xl text-base font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardWithImage;
