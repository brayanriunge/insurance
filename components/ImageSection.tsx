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
    <section>
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
                    <h3 className="text-[#1A2739] text-base sm:text-lg md:text-[18px] font-semibold text-sm">
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

{
  /* Overlay div - positioned near top but doesn't span full width */
}
{
  /* <div className="absolute top-4 left-0 right-10 bg-blue-600/90 text-white p-3 rounded-r-lg shadow-lg">
                  <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">i</span>
                        </div>
                      <div>
                      <h3 className="text-white font-semibold text-sm">
                        Featured Image
                      </h3>
                    <p className="text-white/80 text-xs">
                      This is a custom overlay
                    </p>
                </div>
              </div>
              <button className="text-white text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">
                View
              </button>
            </div>
          </div> */
}
