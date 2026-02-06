import React from "react";
import { AiFillFire } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import {
  FaHeartPulse,
  FaHouseChimney,
  FaPlaneCircleCheck,
} from "react-icons/fa6";
import { GiHealthPotion } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { MdBusinessCenter } from "react-icons/md";

const iconDetails = [
  {
    id: 1,
    icon: (
      <AiFillFire
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Fire insurance",
    description2: "Financial protection from tyhe damage.",
  },
  {
    id: 2,
    icon: (
      <FaCar
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Car insurance",
    description2: "Reliable coverage for you and your vehicle.",
  },
  {
    id: 3,
    icon: (
      <FaHeartPulse
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Life Insurance",
    description2: "Security for your loved ones` future.",
  },
  {
    id: 4,
    icon: (
      <FaHouseChimney
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Home insurance",
    description2: "Protect your home and everything in it.",
  },
  {
    id: 5,
    icon: (
      <GiHealthPotion
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Health insurance",
    description2: "Affordable care when you need it most.",
  },
  {
    id: 6,
    icon: (
      <MdBusinessCenter
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Business insurance",
    description2: "Safeguard your company against risk.",
  },
  {
    id: 7,
    icon: (
      <ImManWoman
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Marriage insurance",
    description2: "Peace of mind for your special day.",
  },
  {
    id: 8,
    icon: (
      <FaPlaneCircleCheck
        color="red"
        className="h-20 w-20  p-2 rounded-full bg-[#1A2739] "
      />
    ),
    description1: "Travel insurance",
    description2: "Travel safely with global coverage.",
  },
];

export default function OurServices() {
  return (
    <section className=" bg-[#1A2739] min-h-screen ">
      <div className="m-8 ">
        <div className="flex mt-12  flex-col lg:flex-row items-center lg:items-start  justify-center ">
          <div className="flex flex-col m-4 mt-6 justify-center">
            <h3 className="text-gray-400 font-semibold text-[18px] mb-4">
              <span className="text-[#74b1f8c7]">{">"}</span>
              <span className="text-[#1882FFC7]">{">"}</span>
              <span className="text-white">{">"}</span> OUR SERVICES{" "}
              <span className="text-white">{"<"}</span>
              <span className="text-[#1882FFC7]">{"<"}</span>
              <span className="text-[#74b1f8c7]">{"<"}</span>
            </h3>
            <p className="text-white text-[32px] tracking-[6%] font-bold text-base">
              Protective Plans Built for {`\n`}Every Family
            </p>
          </div>
          <div className="lg:m-4">
            <p className="text-gray-400  text-base sm:text-lg md:text-[16px]  max-w-xl lg:mt-4  font-medium mx-3 tracking-[2%]">
              At LifeWay, we offer a range of insuranceservices tailored to meet
              your family`s changing needs - from health and life to
              future-focused coverage you can count on.
            </p>
          </div>
        </div>
        {/* icons go here */}
        <div className="mx-auto">
          <div className="grid grid-col sm:grid-cols md:grid-cols-4 lg:grid-cols-4 gap-12 mb-8  items-center lg:items-start justify-center">
            {iconDetails.map((iconDetail) => (
              <div
                key={iconDetail.id}
                className=" bg-gray-700 rounded-lg mb-8 "
              >
                <div className="flex flex-col m-4 justify-center items-center">
                  {iconDetail.icon}
                  <p className="text-white font-bold md:text-[18px] mt-2">
                    {iconDetail.description1}
                  </p>
                  <p className="text-white font-regular text-base mt-2 mb-2">
                    {iconDetail.description2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
