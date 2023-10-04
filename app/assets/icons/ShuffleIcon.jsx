import * as React from "react";
const ShuffleIcon = ({ color, className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <path
      stroke={`${color}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m30 33.333 5-5m0 0-5-5m5 5h-6.667A8.333 8.333 0 0 1 20 20a8.333 8.333 0 0 0-8.333-8.333H5m25-5 5 5m0 0-5 5m5-5h-6.667a8.297 8.297 0 0 0-5 1.666M5 28.333h6.667a8.297 8.297 0 0 0 5-1.666"
    />
  </svg>
);
export default ShuffleIcon;
