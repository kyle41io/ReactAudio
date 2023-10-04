import * as React from "react";
const ThreeDotsIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <path
      fill="#fff"
      d="M17.5 9.375a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM20 17.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 10.625a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);
export default ThreeDotsIcon;
