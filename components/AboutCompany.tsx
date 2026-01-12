import React from "react";

export default function AboutCompany() {
  return (
    <section>
      <div className="mt-12 mx-auto flex  flex-col lg:flex-row h-full items-center lg:items-start justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
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
        </div>
        <div>{/* image goes here */}</div>
      </div>
    </section>
  );
}
