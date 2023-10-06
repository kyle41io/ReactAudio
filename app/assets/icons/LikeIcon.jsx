import * as React from "react";
const LikeIcon = ({ className, ...rest }) => (
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
      strokeWidth={3}
      d="M12.5 6.667a9.167 9.167 0 0 0-9.167 9.166C3.333 25 14.167 33.333 20 35.272 25.833 33.333 36.667 25 36.667 15.833A9.167 9.167 0 0 0 20 10.562a9.156 9.156 0 0 0-7.5-3.895Z"
    />
  </svg>
);
export default LikeIcon;
