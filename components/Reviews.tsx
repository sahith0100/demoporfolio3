/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReviewSlider from "./Helper/ReviewSlider";

const Reviews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Client Reviews</p>
        <h1 className="heading__primary">
          I've <span className="text-yellow-300">40+</span> Clients Feedback
        </h1>
      </div>

      
      <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Reviews;
