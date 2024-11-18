import React from 'react';

const Card = ({ title, image, backgroundColor }) => {
  return (
    <div className={`container mx-auto mt-20 flex flex-col sm:flex-row items-center justify-between bg-lime rounded-lg p-9 shadow-lg max-w-lg ${backgroundColor}`} >
      {/* Left Side */}
      <div>
        <h2 className="font-bold text-xl bg-lime-400 px-2 py-1 inline-block rounded-xl">
          {title}
        </h2>
        <p className="mt-2 text-gray-700"></p>
        <div className="flex items-center gap-2 mt-4">
          <span className="bg-black p-2 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </span>
          <span className="font-medium">Learn more</span>
        </div>
      </div>

      {/* Right Side */}
      <img src={image} alt={title} className="min-h-40 w-52 mt-4 sm:mt-0" />
    </div>
  );
};

export default Card;
