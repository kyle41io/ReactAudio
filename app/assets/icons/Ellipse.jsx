import * as React from "react";
const EllipseIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...rest}
    className={`w-auto h-auto ${className}`}
  >
    <circle cx={15} cy={15} r={15} fill="#FEA5B0" />
  </svg>
);
export default EllipseIcon;
