import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import Family from "@/public/family.jpg";

export default function AboutCompany() {
  return (
    <section className="m-8">
      <div className="mt-12 mx-auto flex  flex-col lg:flex-row h-full items-center lg:items-start justify-center gap-4">
        <div className="flex flex-col mx-auto justify-content">
          <h3 className="text-[#1A2739] font-semibold text-[18px] mb-4">
            <span className="text-[#1882FFC7]">{">"}</span>
            <span className="text-[#1A2739]">{">"}</span>
            <span className="text-[#1A2739]">{">"}</span> ABOUT OUR COMPANY{" "}
            <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1882FFC7]">{"<"}</span>
          </h3>
          <h1 className="text-base text-[32px] tracking-[6%]  mb-4 text-[#1A2739] font-bold">
            Who We Are At LifeWay!
          </h1>
          <p className="text-gray-400  text-base sm:text-lg md:text-[16px]  max-w-xl mb-4 sm:mb-8 font-medium mx-3 tracking-[2%] ">
            Lifeway is a family-first insurance provider committed to building
            security and trust. We believe in protection that adapts to life`s
            changes, offering coverage that grows with you, not against you.
          </p>
          <ul className="text-[#1A2739] font-bold sm:text-lg md:text-[16px] mb-4 ">
            <li className="flex flex-row  gap-2 ">
              {" "}
              <span>
                <FaStar color="#1882FFC7" />
              </span>
              Family-Focused Coverage
            </li>
            <li className="flex flex-row  gap-2">
              <span>
                <FaStar color="#1882FFC7" />
              </span>
              Trusted Exepertise
            </li>
            <li className="flex flex-row  gap-2">
              <span>
                <FaStar color="#1882FFC7" />
              </span>
              Flexible Plans
            </li>
            <li className="flex flex-row  gap-2">
              <span>
                <FaStar color="#1882FFC7" />
              </span>
              Customer-First Service
            </li>
          </ul>
          <div>
            <button className=" px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 md:text-lg text-sm sm:text-base font-semibold rounded-2xl text-white bg-[#0863cb] hover:bg-blue-700 transition-colors duration-300">
              Discover More
            </button>
          </div>
        </div>
        {/* next item for flex */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row h-full items-center lg:items-start justify-center gap-4 mx-auto m-4 ">
          <Image
            src={Family}
            alt="image"
            height={50}
            width={500}
            className="h-full lg:w-1/2 w-full"
          />
          <div className="flex flex-col  justify-content h-full lg:gap-12 gap-4 ">
            <div
              dir="ltr"
              className="flex flex-col lg:border-b-2 border-gray-400 "
            >
              <div className="flex items-end sm:text-lg ">
                <h1 className="text-[#0863cb] text-4xl font-bold">50+</h1>
              </div>
              <p className="text-[#1A2739] font-bold sm:text-lg md:text-[20px] ">
                Projects Completed
              </p>
              <p className=" text-gray-400 sm:text-lg md:text-[16px] lg:mb-6">
                Reliable coverage, delivered with care.
              </p>
            </div>
            <div className="flex flex-col lg:border-b-2 border-gray-400  lg:mt-4  ">
              <div className="flex justify-items-end sm:text-lg  ">
                <h1 className="text-[#0863cb] text-4xl font-bold">10k+</h1>
              </div>
              <p className="text-[#1A2739] font-bold sm:text-lg md:text-[20px] ">
                Satsified Customers
              </p>
              <p className=" text-gray-400 sm:text-lg md:text-[16px] lg:mb-4 ">
                {" "}
                Families that trust and recommend us.
              </p>
            </div>
            <div className="flex flex-col lg:border-b-2 border-gray-400  lg:mt-4  ">
              <div className="flex justify-items-end sm:text-lg  ">
                <h1 className="text-[#0863cb] text-4xl font-bold">100%</h1>
              </div>
              <p className="text-[#1A2739] font-bold sm:text-lg md:text-[20px] ">
                Claim Success Rate
              </p>
              <p className=" text-gray-400 sm:text-lg md:text-[16px] lg:mb-6 ">
                {" "}
                Quick fair and succeful claims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
