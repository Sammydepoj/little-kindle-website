"use client"
import React, { useState } from "react";
import CustomButton from "../Button";
import CustomInput from "../Input";

const DonateMessage = () => {
  const [donationType, setDonationType] = useState("");

  const handleDonationTypeChange = (type: any) => {
    setDonationType(type);
  };

  return (
    <div className="p-[10px] md:p-[60px] space-y-10 bg-[#F7F7F8] border-[8px] border-[#FCFCFD] rounded-[16px] md:w-full">
      <form
        action=""
        method="post"
        className="border-[8px] border-[#F7F7F8] rounded-xl py-2 md:py-5 px-3 md:px-10 flex flex-col gap-5 md:gap-10 bg-[#FFFFFF]"
      >
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-6">
          <CustomInput
            id="FirstName"
            label="First Name"
            placeholder="Enter first name"
            type="text"
          />
          <CustomInput
            id="LastName"
            label="Last Name"
            placeholder="Enter last name"
            type="text"
          />
        </div>

        <div className="w-full flex flex-wrap lg:flex-nowrap gap-6">
          <CustomInput
            id="Email"
            label="Email"
            placeholder="Enter your Email"
            type="email"
          />
          <CustomInput
            id="Phone"
            label="Phone"
            placeholder="Enter Phone Number"
            type="tel"
          />
        </div>

        <div className="bg-[#FCFCFD] max-w-full border-[1px] border-[#F1F1F3] rounded-[12px] p-[30px] flex flex-col gap-[30px]">
          <p className="text-[#262626] text-base font-semibold">Type Of Donation</p>
          <span className="flex gap-[16px] w-full justify-between">
            {/* Financial Donation Option */}
            <span className="flex gap-2" onClick={() => handleDonationTypeChange("financial")}>
              <input
                type="radio"
                checked={donationType === "financial"}
                onChange={() => handleDonationTypeChange("financial")}
              />
              <p className="text-[#4C4C4D] text-base font-semibold">
                Financial Donations
              </p>
            </span>

            {/* Items Donation Option */}
            <span className="flex gap-2" onClick={() => handleDonationTypeChange("items")}>
              <input
                type="radio"
                checked={donationType === "items"}
                onChange={() => handleDonationTypeChange("items")}
              />
              <p className="text-[#4C4C4D] text-base font-semibold">
                Items Donations
              </p>
            </span>
          </span>
        </div>

        {/* Conditionally Rendered Sections */}
        {donationType === "financial" && (
          <CustomInput
            id="Amount"
            label="Amount"
            placeholder="Enter your Amount"
            type="text"
          />
        )}

        {donationType === "items" && (
          
          <div>
            <div className="flex flex-col gap-[6px] ">
              <p className="text-[#262626] text-base font-semibold">How to Donate Items</p>
              <p className="text-[#4C4C4D] text-base font-medium">
                List items you want to donate and leave an address for our team to arrange a pickup.
              </p><br />
            </div>
            <span>
              <label
                htmlFor="Items"
                className="font-semibold text-[#1A1A1A] text-base px-1"
              >
                Items
              </label>
              <textarea
                id="Items"
                className="bg-[#FCFCFD] p-3 rounded-md w-full outline-none placeholder:text-[#666666] placeholder:text-sm text-sm text-[#666666] resize-none"
                placeholder="Enter list of Items"
                rows={6}
              />
            </span>

            <CustomInput
              id="PickupAddress"
              label="Pickup Address"
              placeholder="Leave an Address for Pickup"
              type="text"
            />
          </div>
        )}

        <div className="flex justify-end w-full">
          <CustomButton text="Donate Now" />
        </div>
      </form>
    </div>
  );
};

export default DonateMessage;
