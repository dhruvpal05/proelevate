import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md transition-colors duration-300 hover:bg-orange-500">
      <h2 className="text-2xl font-semibold mb-4 hover:text-white">{title}</h2>
      <p className="text-lg text-gray-700 hover:text-white">{description}</p>
    </div>
  );
};

export default Card;
