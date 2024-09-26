import CustomButton from "../Button";
import CustomInput from "../Input";

const LeaveMessage = () => {
  return (
    <div className="my-4 p-[60px] md:p-[60px] space-y-10 bg-[#F7F7F8] border-[8px]  border-[#FCFCFD] rounded-[16px] ">
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
          <CustomButton variant="primary" text="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default LeaveMessage;
