import React from "react";

const Card = ({ Key, image, name, price, discount }) => {
  return (
    <div key={Key} className="bg-white p-2 rounded-lg shadow-md items-center">
      <img src={image} alt={name} className="w-[10%] md:w-[10%] h-auto rounded-lg ml-4" />
      <div className="ml-4 flex-1">
        <h2 className="text-xs mt-2">{name}</h2>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600 text-lg font-bold">{price}</p>
          <p className="text-green-500 text-xs bg-green-100 rounded-lg p-1">{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
