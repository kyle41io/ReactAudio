import * as React from "react";
const ButtonPause = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <path
      fill="#fea5b0"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
    />
  </svg>
);
export default ButtonPause;
