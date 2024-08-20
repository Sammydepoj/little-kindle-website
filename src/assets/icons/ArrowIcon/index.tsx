import React from "react";

const ArrowIcon = ({ stroke }: { stroke: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.375 14.625L14.625 3.375M14.625 3.375L6.1875 3.375M14.625 3.375V11.8125"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
