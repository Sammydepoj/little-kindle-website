import React from "react";

const CountHolder = ({ text, count }: { text: string; count: string }) => {
  return (
    <div className="relative py-6 min-h-[200px] ">
      <span className="absolute font-bold text-4xl -top-[2.8rem] -left-[2rem] bg-[#215890] p-5 text-white rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
        {count}
      </span>
      <div className="bg-[#F1F1F3] py-4 px-6 min-h-[150px] rounded-2xl max-w-[350px] w-full">
        {text}
      </div>
    </div>
  );
};

export default CountHolder;
