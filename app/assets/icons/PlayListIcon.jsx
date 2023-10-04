import * as React from "react";
const PlayListIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...rest}
    className={`w-auto h-auto cursor-pointer ${className}`}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M26.25 5.8v4.475a2.5 2.5 0 0 1-1.894 2.425l-3.106.775v8.4a4.375 4.375 0 1 1-2.5-3.954V8.203a3.75 3.75 0 0 1 2.84-3.638l2.33-.584A1.875 1.875 0 0 1 26.25 5.8ZM16.875 20a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM8.75 21.25a1.25 1.25 0 0 1 0 2.5H5a1.25 1.25 0 0 1 0-2.5h3.75Zm2.5-7.5a1.25 1.25 0 0 1 0 2.5H5a1.25 1.25 0 0 1 0-2.5h6.25Zm12.5-7.15-1.552.389a1.25 1.25 0 0 0-.94 1.071l-.008.143v2.696l2.5-.625V6.6ZM15 6.25a1.25 1.25 0 0 1 .146 2.491L15 8.75H5a1.25 1.25 0 0 1-.146-2.491L5 6.25h10Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PlayListIcon;
