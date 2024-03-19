import React from "react";
import { useNavigate } from "react-router-dom";


export const ImageWithTitleAndDescription = ({ title, image, headerText, description, buttonText, buttonHref }) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white w-full pt-20">
      {/* Header Title */}
      <h2 className="text-4xl font-bold mb-4">{title}</h2>

      {/* Image and Text Column */}
      <div className="flex flex-col lg:items-center lg:flex-row">
        {/* Image */}
        <img src={image} alt="Description" className="h-auto rounded-md mb-4 lg:mb-0 lg:mr-8" data-aos="fade-right" />

        {/* Text Column */}
        <div data-aos="fade-left">

          {/* Header Text */}
          <h3 className="text-3xl font-bold mb-2">{headerText}</h3>

          {/* Long Description */}
          <p className="text-gray-600 mb-4">{description}</p>

          {/* Button */}
          <button className="bg-c-green text-white px-4 py-2 rounded-md" onClick={() => { navigate(buttonHref) }}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};