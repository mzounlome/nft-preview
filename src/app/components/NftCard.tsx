"use client";
import Image from "next/image";
import { FC } from "react";
import cube from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";
interface NftCardProps {}

const NftCard: FC<NftCardProps> = () => {
  return (
    <div className="w-10/12 h-5/6 rounded-lg p-10 bg-gray-900 flex flex-col desktop:w-4/12 tablet:w-8/12 justify-evenly">
      <div className="w-full h-3/5  rounded-md bg-green-500 relative">
        <Image
          objectFit="container"
          priority
          layout="fill"
          src={cube}
          alt="cube"
        />
      </div>
      <div className="h-1/5  flex px-3 flex-col justify-evenly">
        <h1 className="text-white text-2xl font-bold">Equillibrium #3429</h1>
        <p className="text-gray-400 text-sm">
          Our Equillibrium collection promotes balance and calm.
        </p>
        <div className="flex  justify-between">
          <p className="text-teal-300 font-medium">0.041ETH</p>
          <p className="text-gray-400"> 3 days left</p>
        </div>
      </div>
      <hr />
      <div className="w-full h-20  flex justify-between items-center">
        <div className="rounded-full h-16 w-16 bg-red-500 border-white border-2 relative">
          <Image
            objectFit="container"
            layout="fill"
            src={avatar}
            alt="profile-pic"
          />
        </div>
        <h1 className="text-white text-xl">Creation of Jules Wyvern</h1>
      </div>
    </div>
  );
};

export default NftCard;
