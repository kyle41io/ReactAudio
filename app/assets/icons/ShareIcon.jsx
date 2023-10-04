import * as React from "react";
const ShareIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <path
      fill="#fff"
      d="M18 22a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 15 19c0-.117.008-.238.025-.363s.042-.238.075-.337l-7.05-4.1c-.283.25-.6.446-.95.588-.35.142-.717.213-1.1.212a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 3 12c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 6 9c.383 0 .75.071 1.1.213.35.142.667.338.95.587l7.05-4.1a1.843 1.843 0 0 1-.075-.337A2.734 2.734 0 0 1 15 5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 18 2c.833 0 1.542.292 2.125.875S21 4.167 21 5s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 8c-.383 0-.75-.07-1.1-.212a3.273 3.273 0 0 1-.95-.588L8.9 11.3c.033.1.058.213.075.338a2.747 2.747 0 0 1 0 .725 1.813 1.813 0 0 1-.075.337l7.05 4.1c.283-.25.6-.446.95-.587.35-.141.717-.212 1.1-.213.833 0 1.542.292 2.125.875S21 18.167 21 19s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 22Zm0-16a.968.968 0 0 0 .713-.288A.964.964 0 0 0 19 5a.968.968 0 0 0-.288-.713A.964.964 0 0 0 18 4a.968.968 0 0 0-.713.288A.964.964 0 0 0 17 5c0 .283.096.521.288.713.192.192.43.288.712.287ZM6 13a.968.968 0 0 0 .713-.288A.964.964 0 0 0 7 12a.968.968 0 0 0-.288-.713A.964.964 0 0 0 6 11a.968.968 0 0 0-.713.288A.964.964 0 0 0 5 12c0 .283.096.521.288.713.192.192.43.288.712.287Zm12 7a.968.968 0 0 0 .713-.288A.964.964 0 0 0 19 19a.968.968 0 0 0-.288-.713A.964.964 0 0 0 18 18a.968.968 0 0 0-.713.288A.964.964 0 0 0 17 19c0 .283.096.521.288.713.192.192.43.288.712.287Z"
    />
  </svg>
);
export default ShareIcon;
