import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-[500px] overflow-hidden mt-18">
      {/*background image*/}
      <div
        className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
        style={{ backgroundImage: "url('/fam.jpg')" }}
      >
        {/*opacity gradient overlay*/}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient( to right, #15233d 2%, #15233d 2%, #15233d 2%, transparent 80%, transparent 100%)",
          }}
        >
          <div className="md:mx-auto max-w-7xl md:w-4/5 px-4 lg:px-8  h-full ">
            <div className="mt-4 py-4 space-y-3.5 flex  flex-row">
              <div className="flex flex-col w-1/2 h-full justify-between mt-8 items-center">
                <h1 className="text-[48px] font-bold  text-white text-pretty">
                  Insurance that grows with your family.
                </h1>
                <div className="border-l-2 flex-col  border-gray-50">
                  <p className="text-white text-[16px] text-wrap font-medium mx-3">
                    At Lifeway, we provide flexible, family-focused insurance
                    solutions that evolve with your life . Whether you are
                    planning, protecting or preparing for the future we`re with
                    you every step of the way.
                  </p>

                  <button className="p-4 mx-3 my-4 rounded-2xl text-white bg-[#0863cb]">
                    {" "}
                    Lets get started
                  </button>
                </div>
              </div>
              {/* arrows */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
