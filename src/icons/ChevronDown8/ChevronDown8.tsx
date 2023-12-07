/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  color: string;
  className: any;
}

export const ChevronDown8 = ({ color = "#212529", className }: Props): React.JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M1.23483 3.48483C1.38128 3.33839 1.61872 3.33839 1.76517 3.48483L6 7.71967L10.2348 3.48483C10.3813 3.33839 10.6187 3.33839 10.7652 3.48483C10.9116 3.63128 10.9116 3.86872 10.7652 4.01517L6.26516 8.51516C6.11872 8.66161 5.88128 8.66161 5.73484 8.51516L1.23483 4.01517C1.08839 3.86872 1.08839 3.63128 1.23483 3.48483Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};
