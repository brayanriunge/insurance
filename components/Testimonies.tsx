import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Testi1 from "@/public/testi1.jpg";
import Testi2 from "@/public/testi2.jpg";

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
        <div className="flex flex-col gap-4 sm:w-full md:w-2/5 ">
          {/* first div card */}
          <div className="bg-white rounded-lg  ">
            <div className="flex flex-row justify-content gap-4 p-12">
              <div className="flex flex-col items-start">
                <h1 className="font-semibold text-[#1A2739] text-[20px] tracking-tight">
                  Mwajuma Omollo
                </h1>
                <p className="font-regular text-gray-500 text-wrap  tracking-tight ">
                  LifeWay made the process simple and personal. They listened to
                  our needs and gave us real peace of mind.
                </p>
              </div>
              <div>
                <div className="flex flex-col items-center gap-4">
                  <div className="gap-2 flex flex-row items-center justify-center ">
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                  </div>
                  <div className="-mb-64 border-white border-12 rounded-full">
                    <Image
                      alt="testi"
                      src={Testi1}
                      className="  rounded-full border-8 border-[#5DCEF2]  h-30 w-30  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#035aa7] p-4 rounded-b-lg  ">
              <div className="flex items-start ">
                <p className="text-[18px] font-medium text-white uppercase ml-8">
                  father of two
                </p>
              </div>
            </div>
          </div>
          {/* Second div card */}
          <div className="bg-white rounded-lg  ">
            <div className="flex flex-row justify-content gap-4 p-12 ">
              <div className="flex flex-col items-start">
                <h1 className="font-semibold text-[#1A2739] text-[20px] tracking-tight">
                  Mutahi Riunge
                </h1>
                <p className="font-regular text-gray-500 text-wrap  tracking-tight ">
                  Everything from consulation to coverage was smooth. LifeWay
                  truly understands what families need.
                </p>
              </div>
              <div>
                <div className="flex flex-col items-center gap-4">
                  <div className="gap-2 flex flex-row items-center justify-center ">
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                    <FaStar color="#e4bf1d" size={20} />
                  </div>
                  <div className="-mb-64 border-white border-12 rounded-full">
                    <Image
                      alt="testi"
                      src={Testi2}
                      className="  rounded-full border-8 border-[#5DCEF2]  h-30 w-30  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#035aa7] p-4 rounded-b-lg  ">
              <div className="flex items-start ">
                <p className="text-[18px] font-medium text-white uppercase ml-8">
                  business owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
