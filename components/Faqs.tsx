import Image from "next/image";
import React from "react";
import Handshake from "@/public/handshake.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import ProgressWithLabel from "./progressWithLabel";

export default function Faqs() {
  return (
    <section className="m-8">
      <div className="mt-12 mx-auto flex  flex-col lg:flex-row h-full items-center lg:items-start justify-center gap-4">
        <div className="flex flex-col mx-auto justify-content">
          <h3 className="text-[#1A2739] font-semibold text-[18px] mb-4">
            <span className="text-[#1882FFC7]">{">"}</span>
            <span className="text-[#1A2739]">{">"}</span>
            <span className="text-[#1A2739]">{">"}</span> WE ALWAYS HELP{" "}
            <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1882FFC7]">{"<"}</span>
          </h3>
          <h1 className="text-base text-[32px] tracking-[6%]  mb-4 text-[#1A2739] font-bold">
            Here When You Need Us Most
          </h1>
          <div className="flex flex-1  flex-col sm:flex-col md:flex-row lg:flex-row mx-auto gap-4 justify-content">
            <Image
              src={Handshake}
              alt="handshake"
              height={300}
              width={300}
              className="rounded-md w-full"
            />
            <p className="text-gray-400 lg:mt-8 text-balance  sm:text-lg text-base max-w-xl mb-4 sm:mb-8 font-medium mx-3 tracking-[2%] w-full">
              Whether it`s guidance, support or quick claim assistance LiFeway
              is always just a call away. Our team is dedicated to helping you
              feel secure, supported and never alone in life`s uncertain
              moments.
            </p>
          </div>
          <div className=" mt-4 ">
            <ProgressWithLabel />
          </div>
        </div>
        {/* next flex goes here */}
        <div className="flex flex-1/2 flex-col  items-center justify-content lg:mt-2  gap-4 ">
          <div className="flex flex-row mx-auto justify-center gap-2 w-full items-center p-2 shadow-gray-300 shadow-lg rounded-2xl">
            <div className="rounded-full h-10 w-10 bg-[#035aa7] flex items-center justify-center ">
              <span className="font-regular text-white text-[18px]">?</span>
            </div>
            <p className="sm:text-lg text-[#1A2739] ">
              Can I customize my insurance plan ?
            </p>
            <IoIosArrowDropdownCircle color="#7CB9FF" size={25} />
          </div>

          {/* contains content */}
          <div className="flex flex-col mx-auto justify-evenly gap-2  p-2  shadow-gray-300 shadow-lg rounded-2xl w-full">
            <div className="flex flex-row mx-auto justify-evenly items-center p-2 gap-2 w-full ">
              <div className="rounded-full h-10 w-10 bg-[#035aa7] flex items-center justify-center ">
                <span className="font-regular text-white text-[18px]   ">
                  ?
                </span>
              </div>
              <p className="font-regular text-[#7CB9FF] text-[18px] sm:text-lg">
                How quickly can I file a cliam ?
              </p>
              <IoIosArrowDropdownCircle color="#7CB9FF" size={25} />
            </div>
            <div className="border-t-2 border-gray-300">
              <p className="tracking-2% text-gray-400 md:text-[16px] tracking-[2%] text-base mt-4 m-2 sm:text-lg">
                Filing claim is simple and fast - you can do it online or
                through our support team and we begin processing immediately to
                ensure a smooth experience.
              </p>
            </div>
          </div>
          <div className="flex flex-row mx-auto  gap-2 w-full justify-evenly items-center p-2 shadow-gray-300 shadow-lg rounded-2xl">
            <div className="rounded-full h-10 w-10 bg-[#035aa7] flex items-center justify-center ">
              <span className="font-regular text-white text-[18px]   ">?</span>
            </div>
            <p className="sm:text-lg text-[#1A2739] ">
              What documents do I need to get started ?
            </p>
            <IoIosArrowDropdownCircle color="#7ccfff" size={25} />
          </div>
        </div>
      </div>
      <div className="bg-[#1A2739] border-6 border-[#5DCEF2] mt-8 rounded-lg hidden lg:block">
        <div className="flex flex-row items-center m-4 justify-between gap-12 ">
          <div className="text-white font-bold sm:text[18px] md:text-[35px]">
            <h1>Locate an Agent Near You</h1>
          </div>
          <div className="flex-row flex justify-center items-center gap-4">
            <div className="rounded-full h-20 w-20 items-center justify-center flex border-2 border-[#5DCEF2] ">
              <FaPhone color="#5DCEF2" size={40} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-white text-[20px]">
                +254 701 842 846
              </p>
              <p className="text-gray-500 text-[20px] font-medium">
                Call Our Experts
              </p>
            </div>
          </div>
          <div>
            <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4  md:text-lg text-sm sm:text-base font-semibold rounded-2xl text-white bg-[#0863cb] hover:bg-blue-700 transition-colors duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
