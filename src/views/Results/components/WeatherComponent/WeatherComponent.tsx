import React from "react";

const WeatherComponent = () => {
  return (
    <button className="outline-none border-none cursor-auto px-4 py-2 rounded-full bg-soft-gray text-dark flex items-center text-[15px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.3414 19.9367L14.002 16.7031M16.8161 9.65647L20.0497 8.31708M13.6344 6.73739L15.002 3.51562M16.8903 13.6574L20.1239 14.9968M7.66103 19.9474L9.00043 16.7138M6.71014 9.6668L3.47656 8.32741M9.36799 6.74806L8.00043 3.5263M6.63592 13.6599L3.40234 14.9993"
          stroke="#FFCE1B"
          strokeWidth="1.20242"
        />
        <circle
          r="4.5"
          transform="matrix(1 -8.82225e-10 -0.0121249 0.999927 11.6993 11.7887)"
          fill="#FFCE1B"
        />
      </svg>
      +31°
    </button>
  );
};

export default WeatherComponent;
