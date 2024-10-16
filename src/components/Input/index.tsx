const CustomInput = ({
  id,
  placeholder,
  label,
  type,
}: {
  id: string;
  placeholder: string;
  label: string;
  type: string;
}) => {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="font-semibold text-[#262626] text-base px-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-[#FCFCFD] p-5 rounded-md w-full  outline-none placeholder:text-[#59595A] placeholder:text-sm text-sm text-[#59595A] "
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
