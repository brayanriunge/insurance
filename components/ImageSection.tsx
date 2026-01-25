import Image from "next/image";
import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { AiOutlineFileProtect } from "react-icons/ai";
import Cash from "@/public/cash.png";
import Investment from "@/public/investment(1).png";
import Protection from "@/public/protection.png";

const cardDetails = [
  {
    id: 1,
    img: Cash,
    icon: <GiTakeMyMoney className="md:h-24 h-20 w-full" />,
    descriptin: "Cash flow management",
  },

  {
    id: 2,
    img: Investment,
    icon: <AiOutlineStock className="md:h-24 h-20 w-full" />,
    descriptin: "Investment opportunies",
  },

  {
    id: 3,
    img: Protection,
    icon: <AiOutlineFileProtect className="md:h-24 h-20 w-full" />,
    descriptin: "Protection against uncertainties",
  },
];

export default function ImageSection() {
  return (
    <section className="bg-white">
      <div className="mt-4 mx-auto flex  flex-col lg:flex-row h-full items-center lg:items-start justify-center gap-4">
        {cardDetails.map((cardDetail) => (
          <div
            key={cardDetail.id}
            className="flex justify-center items-center p-8"
          >
            <div className="relative group w-full max-w-lg">
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-xl">
                {/* Image */}
                <Image
                  src={cardDetail.img} // image path
                  alt="Description of image"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* bottom overlay */}
              <div className="absolute -bottom-12  left-0 rihgt-10 w-3/4  bg-white text-white text-xs  shadow-xl rounded-lg">
                <div className="flex items-center gap-4 justify-between">
                  <div className="  bg-[#1A2739] w-full h-full">
                    {cardDetail.icon}
                  </div>
                  <div className="bg-white ">
                    <h3 className="text-[#1A2739] text-base sm:text-lg md:text-[18px] font-semibold ">
                      {cardDetail.descriptin}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
