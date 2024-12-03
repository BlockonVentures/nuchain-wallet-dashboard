import React from "react";

function TransactionManagementIcon({ fill }) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_92_3154)">
        <path
          d="M5.85 8.05H6.025C6.69875 8.05 7.25 8.60125 7.25 9.275V15.4C7.25 16.0737 6.69875 16.625 6.025 16.625H5.85C5.17625 16.625 4.625 16.0737 4.625 15.4V9.275C4.625 8.60125 5.17625 8.05 5.85 8.05ZM10.75 4.375C11.4237 4.375 11.975 4.92625 11.975 5.6V15.4C11.975 16.0737 11.4237 16.625 10.75 16.625C10.0762 16.625 9.525 16.0737 9.525 15.4V5.6C9.525 4.92625 10.0762 4.375 10.75 4.375ZM15.65 11.375C16.3237 11.375 16.875 11.9262 16.875 12.6V15.4C16.875 16.0737 16.3237 16.625 15.65 16.625C14.9762 16.625 14.425 16.0737 14.425 15.4V12.6C14.425 11.9262 14.9762 11.375 15.65 11.375Z"
          fill={fill ? "#8712C2" : "#6F7074"}
        />
      </g>
      <defs>
        <clipPath id="clip0_92_3154">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default TransactionManagementIcon;
