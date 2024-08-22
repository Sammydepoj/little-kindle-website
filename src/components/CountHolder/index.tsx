import React from "react";

const CountHolder = ({
  text,
  count,
}: {
  text: string;
  count: React.ReactNode;
}) => {
  return (
    <div
      className="relative py-6 md:min-h-[200px] "
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <span className="absolute font-bold text-2xl md:text-4xl -top-[1.2rem] md:-top-[2.8rem] -left-[2rem] bg-[#215890] p-2 md:p-5 text-white rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
        {count}+
      </span>
      <div className="bg-[#F1F1F3] p-2 md:py-4 md:px-6 min-h-[150px] rounded-2xl max-w-[350px] w-full">
        {text}
      </div>
    </div>
  );
};

export default CountHolder;
