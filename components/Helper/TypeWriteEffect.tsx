import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "a React Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a Next JS Developer",
        1000,
        "a Mern Developer",
        1000,
        "a Designer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;
