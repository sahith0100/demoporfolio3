import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  user: string;
  role: string;
}

const ClientReviewCard = ({ image, role, user }: Props) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-xl">
        <Image
          src={`${image}`}
          alt={user}
          width={70}
          height={70}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div>
          <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fixed" />
        </div>
        <p className="text-[15px] text-white opacity-65 mt-[3rem] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint,
          architecto velit eius sunt quam et numquam temporibus asperiores
          cupiditate vero iste voluptatem minima iure!
        </p>
        <div className="flex items-center space-x-1 justify-center mt-[0.4rem]">
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
        </div>
        <div>
          <SparklesIcon className="w-[6rem] right-0 h-[6rem] text-white opacity-15 fixed" />
        </div>
        <h1 className="text-[20px] text-center text-white mt-[2rem] font-medium">
          {user}
        </h1>
        <p className="text-yellow-400 text-[18px] text-center mb-[3rem]">
          {role}
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
