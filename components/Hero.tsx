import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#15233d]">
      <div className="md:mx-auto max-w-7xl md:w-4/5 px-4 lg:px-8 mt-20 ">
        <div className="mt-4 py-4 space-y-3.5 flex flex-row">
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-[36px]  text-white">
              Insurance that grows with your family.
            </h1>
            <div className="border-l-2 flex-col  border-gray-50">
              <p className="text-white text-[16px] font-medium mx-3">
                At Lifeway, we provide flexible, family-focused insurance
                solutions that evolve with your life . Whether you are planning,
                protecting or preparing for the future we`re with you every step
                of the way.
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
    </section>
  );
}
