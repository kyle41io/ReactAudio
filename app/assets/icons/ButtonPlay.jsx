import * as React from "react";
const ButtonPlay = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)" filter="url(#b)">
      <path
        fill="#FEA5B0"
        d="M40 6.667a33.333 33.333 0 1 0 0 66.666 33.333 33.333 0 0 0 0-66.666ZM33.333 55V25l20 15-20 15Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h80v80H0z" />
      </clipPath>
      <filter
        id="b"
        width={78.667}
        height={78.667}
        x={0.667}
        y={0.667}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      ></filter>
    </defs>
  </svg>
);
export default ButtonPlay;
