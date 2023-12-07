/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  color: string;
  className: any;
}

export const ChevronLeft4 = ({ color = "#212529", className }: Props): React.JSX.Element => {
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
        d="M8.51516 1.23483C8.66161 1.38128 8.66161 1.61872 8.51516 1.76517L4.28033 6L8.51516 10.2348C8.66161 10.3813 8.66161 10.6187 8.51516 10.7652C8.36872 10.9116 8.13128 10.9116 7.98484 10.7652L3.48483 6.26516C3.33839 6.11872 3.33839 5.88128 3.48483 5.73484L7.98484 1.23483C8.13128 1.08839 8.36872 1.08839 8.51516 1.23483Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};
