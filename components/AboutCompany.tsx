import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import People from "@/public/people.jpg";

export default function AboutCompany() {
  return (
    <section>
      <div className="mt-12 mx-auto flex  flex-col lg:flex-row h-full items-center lg:items-start justify-center gap-4">
        <div className="flex flex-col  justify-center">
          <h3 className="text-[#1A2739] font-semibold text-[18px] mb-4">
            <span className="text-[#1882FFC7]">{">"}</span>
            <span>{">"}</span>
            <span>{">"}</span> About our Company <span>{"<"}</span>
            <span>{"<"}</span>
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
            <li className="flex flex-row  gap-2">
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
          <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-6 md:py-4  md:text-lg text-sm sm:text-base font-semibold rounded-2xl text-white bg-[#0863cb] hover:bg-blue-700 transition-colors duration-300">
            Discover More
          </button>
        </div>
        {/* next item for flex */}
        <div>
          <Image src={People} alt="image" height={200} width={500} />
        </div>
      </div>
    </section>
  );
}
