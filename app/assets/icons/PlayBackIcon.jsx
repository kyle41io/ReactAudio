import * as React from "react";
const PlayBackIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <path fill="#fff" d="M0 0h50v50H0z" />
    <g clipPath="url(#a)">
      <path fill="#fff" d="M-852-742H876V375H-852z" />
      <path
        fill="#FEA5B0"
        fillOpacity={0.5}
        d="M-650.466 297.229c-10.236-31.516 7.015-65.363 38.532-75.599L376.714-99.466c31.517-10.236 65.364 7.015 75.6 38.532l174.537 537.396c10.236 31.517-7.016 65.364-38.532 75.6L-400.33 873.157c-31.516 10.236-65.363-7.015-75.599-38.531l-174.537-537.397Z"
      />
      <g filter="url(#b)">
        <g clipPath="url(#c)">
          <rect
            width={430}
            height={932}
            x={-105}
            y={-655}
            fill="#430020"
            rx={30}
          />
          <path
            fill="#FEA5B0"
            d="m2.999 22.41 18.444-11.036a2.983 2.983 0 0 1 3.037-.038 3.296 3.296 0 0 1 1.636 2.878v7.72L43.765 11.37a2.983 2.983 0 0 1 3.036-.038 3.295 3.295 0 0 1 1.636 2.878v21.582a3.294 3.294 0 0 1-1.636 2.879 2.982 2.982 0 0 1-3.036-.038L26.116 28.066v7.723a3.293 3.293 0 0 1-1.636 2.883 2.982 2.982 0 0 1-3.037-.038L3 27.599a3.053 3.053 0 0 1 0-5.176v-.014Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M-852-742H876V375H-852z" />
      </clipPath>
      <clipPath id="c">
        <rect width={430} height={932} x={-105} y={-655} fill="#fff" rx={30} />
      </clipPath>
      <filter
        id="b"
        width={478}
        height={980}
        x={-121}
        y={-671}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={8} dy={8} />
        <feGaussianBlur stdDeviation={12} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_0_1"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default PlayBackIcon;
