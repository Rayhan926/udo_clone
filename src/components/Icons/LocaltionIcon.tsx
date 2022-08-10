import React from "react";

const LocaltionIcon = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 12C10.7625 12 9.75 11.01 9.75 9.8C9.75 8.59 10.7625 7.6 12 7.6C13.2375 7.6 14.25 8.59 14.25 9.8C14.25 11.01 13.2375 12 12 12ZM18.75 10.02C18.75 6.027 15.7688 3.2 12 3.2C8.23125 3.2 5.25 6.027 5.25 10.02C5.25 12.594 7.44375 16.004 12 20.074C16.5563 16.004 18.75 12.594 18.75 10.02ZM12 1C16.725 1 21 4.542 21 10.02C21 13.672 17.9963 17.995 12 23C6.00375 17.995 3 13.672 3 10.02C3 4.542 7.275 1 12 1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocaltionIcon;
