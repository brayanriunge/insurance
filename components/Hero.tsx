import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen   md:min-h-[600px]  overflow-hidden "
      id="home"
    >
      {/*background image*/}
      <div
        className="absolute inset-0 bg-cover bg-center   bg-no-repeat"
        style={{ backgroundImage: "url('/fam.jpg')" }}
      >
        {/*opacity gradient overlay*/}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(21, 35, 61, 0.7)",
            backgroundAttachment: "fixed",
          }}
        >
          <div className=" container mx-auto px-4 sm:px-6 lg:px-8  h-full ">
            <div className="flex h-full items-center justify-center lg:items-start ">
              <div className="flex flex-col w-full  h-full justify-center lg:justify-start py-8 lg:py-0 lg:pt-12 xl:pt-20 ">
                <h1 className=" text-4xl md:text-5xl lg:text-[60px] font-bold  text-white text-center tracking-[6%] mt-12">
                  Insurance that grows with your family.
                </h1>
                <div className=" flex flex-col items-center justify-center mt-4  border-gray-50">
                  <p className="text-white text-center sm:text-lg md:text-[25px]  w-5/6   font-medium mx-3">
                    At Lifeway, we provide flexible, family-focused insurance
                    solutions that evolve with your life . Whether you are
                    planning, protecting or preparing for the future we`re with
                    you every step of the way.
                  </p>

                  <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4  md:text-lg text-sm sm:text-base mt-20 font-semibold rounded-2xl text-white bg-[#0863cb] hover:bg-blue-700 transition-colors duration-300">
                    <Link href={"#insurance"}>Lets get started</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
