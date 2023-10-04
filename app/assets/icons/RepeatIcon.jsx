import * as React from "react";
const RepeatIcon = ({ className, ...rest }) => (
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
      fillRule="evenodd"
      d="M36.667 15a1.667 1.667 0 0 1-3.334 0V9.363l-.921.46a1.668 1.668 0 1 1-1.49-2.98l3.333-1.666a1.667 1.667 0 0 1 2.412 1.49V15ZM10 31.667a1.667 1.667 0 0 1-2.845 1.178l-3.333-3.333a1.667 1.667 0 0 1 0-2.357l3.333-3.333A1.666 1.666 0 0 1 10 25v1.667h18.333a5 5 0 0 0 5-5 1.666 1.666 0 1 1 3.334 0A8.334 8.334 0 0 1 28.337 30H10v1.667Zm16.667-20A1.666 1.666 0 0 0 25 10H11.667a8.333 8.333 0 0 0-8.334 8.333 1.666 1.666 0 1 0 3.334 0 5 5 0 0 1 5-5H25a1.667 1.667 0 0 0 1.667-1.666Z"
      clipRule="evenodd"
    />
  </svg>
);
export default RepeatIcon;
