/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  color: string;
  className: any;
}

export const CalendarFrame12 = ({ color = "white", className }: Props): React.JSX.Element => {
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
        d="M2.625 0C2.83211 0 3 0.167893 3 0.375V0.75H9V0.375C9 0.167893 9.16789 0 9.375 0C9.58211 0 9.75 0.167893 9.75 0.375V0.75H10.5C11.3284 0.75 12 1.42157 12 2.25V10.5C12 11.3284 11.3284 12 10.5 12H1.5C0.671573 12 0 11.3284 0 10.5V2.25C0 1.42157 0.671573 0.75 1.5 0.75H2.25V0.375C2.25 0.167893 2.41789 0 2.625 0ZM0.75 3V10.5C0.75 10.9142 1.08579 11.25 1.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5V3H0.75Z"
        fill={color}
      />
    </svg>
  );
};
