import Image from "next/image";
import React from "react";
import Handshake from "@/public/handshake.jpg";

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
          <div className="flex flex-row mx-auto gap-4 justify-content">
            <Image
              src={Handshake}
              alt="handshake"
              height={300}
              width={300}
              className="rounded-md"
            />
            <p className="text-gray-400 text-balance sm:text-lg md:text-[16px]  max-w-xl mb-4 sm:mb-8 font-medium mx-3 tracking-[2%] ">
              Whether it`s guidance, support or quick claim assistance LiFeway
              is always just a call away. Our team is dedicated to helping you
              feel secure, supported and never alone in life`s uncertain moments
            </p>
          </div>
        </div>
        {/* next flex goes here */}
        <div></div>
      </div>
    </section>
  );
}
