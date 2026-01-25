import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen   md:min-h-[600px] md:mt-18 overflow-hidden ">
      {/*background image*/}
      <div
        className="absolute inset-0 bg-cover bg-center   bg-no-repeat"
        style={{ backgroundImage: "url('/fam.jpg')" }}
      >
        {/*opacity gradient overlay*/}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient( to right, #15233d 2%, #15233d 2%, #15233d 2%, transparent 80%, transparent 100%)",
            backgroundAttachment: "fixed",
          }}
        >
          <div className=" container mx-auto px-4 sm:px-6 lg:px-8  h-full ">
            <div className="flex  flex-col lg:flex-row h-full items-center lg:items-start ">
              <div className="flex flex-col w-full lg:w-1/2 h-full justify-center lg:justify-start py-8 lg:py-0 lg:pt-12 xl:pt-20 ">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold  text-white text-pretty tracking-[6%]">
                  Insurance that grows with your family.
                </h1>
                <div className="border-l-2 flex-col pl-4 sm:pl-6 md:pl-8 mt-4  border-gray-50">
                  <p className="text-white text-base sm:text-lg md:text-[16px]  max-w-xl mb-6 sm:mb-8 font-medium mx-3">
                    At Lifeway, we provide flexible, family-focused insurance
                    solutions that evolve with your life . Whether you are
                    planning, protecting or preparing for the future we`re with
                    you every step of the way.
                  </p>
                  <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4  md:text-lg text-sm sm:text-base font-semibold rounded-2xl text-white bg-[#0863cb] hover:bg-blue-700 transition-colors duration-300">
                    Lets get started
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
