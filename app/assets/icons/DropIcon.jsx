import * as React from "react";
const DropIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M28.333 16.667 20 25l-8.333-8.333"
    />
  </svg>
);
export default DropIcon;
