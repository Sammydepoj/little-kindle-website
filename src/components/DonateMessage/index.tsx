import CustomButton from "../Button";
import CustomInput from "../Input";

const DonateMessage = () => {
  return (
    <div className=" p-[10px] md:p-[60px] space-y-10 bg-[#F7F7F8] border-[8px]  border-[#FCFCFD] rounded-[16px] md:w-full">
      <form
        action=""
        method="post"
        className=" border-[8px] border-[#F7F7F8] rounded-xl py-2 md:py-5 px-3 md:px-10 flex flex-col gap-5 md:gap-10 bg-[#FFFFFF] "
      >
        <div className=" w-full flex flex-wrap lg:flex-nowrap gap-6 ">
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
        <div className=" w-full flex flex-wrap lg:flex-nowrap gap-6 ">
          <CustomInput
            id="Email"
            label="Email"
            placeholder="Enter your Email"
            type="text"
          />
          <CustomInput
            id="Phone"
            label="Phone"
            placeholder="Enter Phone Number"
            type="text"
          />
        </div>
        <div className=" bg-[#FCFCFD] max-w-full border-[1px] border-[#F1F1F3] rounded-[12px] p-[30px] flex flex-col gap-[30px]">
          <p className=" text-[#262626] text-base font-semibold">
            Type Of Donation
          </p>
          <span className=" flex gap-[16px] w-full justify-between">
            <span className=" flex gap-2 ">
              <input type="radio" />
              <p className=" text-[#4C4C4D] text-base font-semibold">
                Financial Donations
              </p>
            </span>
            <span className=" flex gap-2">
              <input type="radio" />
              <p className=" text-[#4C4C4D] text-base font-semibold">
                Items Donations
              </p>
            </span>
          </span>
        </div>
        <CustomInput
          id="Amount"
          label="Amount"
          placeholder="Enter your Amount"
          type="text"
        />
        <span>
          <label
            htmlFor="Message"
            className="font-semibold text-[#1A1A1A] text-base px-1"
          >
            Message*
          </label>
          <textarea
            className="bg-[#FCFCFD] p-3 rounded-md w-full  outline-none placeholder:text-[#666666] placeholder:text-sm text-sm text-[#666666] resize-none"
            placeholder="Enter your Message here.."
            rows={6}
          />
        </span>
        <div className="flex justify-end w-full">
          <CustomButton text="Donate Now" />
        </div>
      </form>
    </div>
  );
};

export default DonateMessage;
