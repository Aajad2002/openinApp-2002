// AddProfileButton.jsx
import React from 'react';

const AddProfileButton = ({ onButtonClick }) => {
  return (
    <div className="bg-white p-4 rounded-[20px] shadow-md mt-6">
      <div className="w-[100%] h-[340px] flex flex-col justify-center items-center">
        <button
          className="bg-gray-200 text-black rounded-full p-4 md:w-[20%] md:h-[30%]"
          onClick={onButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <h1 className="text-center mt-2 font-bold text-gray-400">Add Profile</h1>
      </div>
    </div>
  );
};

export default AddProfileButton;