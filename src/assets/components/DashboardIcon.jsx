import React from "react";

function DashboardIcon({ fill }) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_188_7088)">
        <path
          d="M8.24998 14.25V10.5H11.25V14.25C11.25 14.6625 11.5875 15 12 15H14.25C14.6625 15 15 14.6625 15 14.25V8.99998H16.275C16.62 8.99998 16.785 8.57248 16.5225 8.34748L10.2525 2.69998C9.96748 2.44498 9.53248 2.44498 9.24748 2.69998L2.97748 8.34748C2.72248 8.57248 2.87998 8.99998 3.22498 8.99998H4.49998V14.25C4.49998 14.6625 4.83748 15 5.24998 15H7.49998C7.91248 15 8.24998 14.6625 8.24998 14.25Z"
          fill={fill ? "#8712C2" : "#6F7074"}
        />
      </g>
      <defs>
        <clipPath id="clip0_188_7088">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DashboardIcon;
