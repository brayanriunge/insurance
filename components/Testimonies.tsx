import React from "react";
import { TiTick } from "react-icons/ti";

const ticks = [
  {
    id: 1,
    icon: <TiTick size={20} color={"blue"} />,
    text: "Fast and Friendly Support",
  },
  {
    id: 2,
    icon: <TiTick size={20} color={"blue"} />,
    text: "Plans That Fit Every Stage Of Life",
  },
  {
    id: 3,
    icon: <TiTick size={20} color={"blue"} />,
    text: "Easy claim Process",
  },

  {
    id: 4,
    icon: <TiTick size={20} color={"blue"} />,
    text: "Trusted by Families Nationwide",
  },
];

export default function Testimonies() {
  return (
    <section className="min-h-screen p-8 bg-gray-300">
      <div className="flex  flex-col lg:flex-row h-full  lg:items-start  gap-4 mt-8">
        <div className="flex flex-col mx-auto justify-content">
          <h3 className="text-[#1A2739] font-semibold text-[18px] mb-4">
            <span className="text-[#1882FFC7]">{">"}</span>
            <span className="text-[#1A2739]">{">"}</span>
            <span className="text-[#1A2739]">{">"}</span>TESTIMONIALS{" "}
            <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1882FFC7]">{"<"}</span>
          </h3>
          <h1 className="text-base text-[32px] tracking-tight  mb-4 text-[#1A2739] font-bold">
            What Families Are Saying About LifeWay
          </h1>
          <p className="text-gray-500 mt-4 text-balance  sm:text-lg text-base max-w-xl  font-medium  tracking-[2%] w-full">
            We are proud to support families with dependable, personalized
            insurance. Hear from those who trust us to protect what matters
            most.
          </p>
          <div className="flex  flex-col  gap-4 items-start justify-around mt-6">
            {ticks.map((tick) => (
              <div
                key={tick.id}
                className="flex flex-row justify-content gap-2 items-center"
              >
                <div className="bg-white rounded-full p-4  ">{tick.icon}</div>
                <div className="text-[#1A2739] font-medium  text-[18px]">
                  {tick.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* next flex goes here */}
      </div>
    </section>
  );
}
