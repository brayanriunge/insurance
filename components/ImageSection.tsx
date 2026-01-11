import Image from "next/image";
import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { AiOutlineFileProtect } from "react-icons/ai";
import Cash from "@/public/cash.png";
import Investment from "@/public/investment(1).png";
import Protection from "@/public/protection.png";

const cardDetails = [
  { id: 1, img: Cash, icon: <GiTakeMyMoney className="h-full w-full" /> },

  { id: 2, img: Investment, icon: <AiOutlineStock /> },

  { id: 3, img: Protection, icon: <AiOutlineFileProtect /> },
];

export default function ImageSection() {
  return (
    <section>
      <div className="mt-4 mx-auto flex flex-col-3 items-center justify-center gap-4">
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
                {/* bottom overlay */}
                <div className="absolute bottom-1  left-0 rihgt-10 w-3/4  backdrop-blur-sm bg-black/60 text-white text-xs px-4 py-3 shadow-xl rounded-lg">
                  <div className="flex items-center bg-[#1A2739] justify-between">
                    <div className=" w-full h-full">{cardDetail.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        Featured Image
                      </h3>
                      <p className="text-white/80 text-xs">
                        This is a custom overlay
                      </p>
                    </div>
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
