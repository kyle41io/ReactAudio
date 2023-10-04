import * as React from "react";
const PlayForwardIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <path
      fill="#FEA5B0"
      d="M47.001 22.41 28.557 11.373a2.983 2.983 0 0 0-3.037-.038 3.296 3.296 0 0 0-1.636 2.878v7.72L6.235 11.37a2.983 2.983 0 0 0-3.036-.038 3.295 3.295 0 0 0-1.636 2.878v21.582a3.295 3.295 0 0 0 1.636 2.879 2.982 2.982 0 0 0 3.036-.038l17.649-10.568v7.723a3.294 3.294 0 0 0 1.636 2.883 2.982 2.982 0 0 0 3.037-.038L47 27.599a3.053 3.053 0 0 0 0-5.176v-.014Z"
    />
  </svg>
);
export default PlayForwardIcon;
