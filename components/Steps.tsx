import React from "react";
import Select from "@/public/select.png";
import Meeting from "@/public/meeting.png";
import Agent from "@/public/agent.png";
import Insurance from "@/public/insurance.png";
import Image from "next/image";

const steps = [
  {
    id: 1,
    icon: Select,
    description: "Select Insurance",
    description2: "Choose coverage that fits your family`s needs.",
  },
  {
    id: 2,
    icon: Meeting,
    description: "Schedule meeting",
    description2: "Pick a convenient time to talk to our experts.",
  },
  {
    id: 3,
    icon: Agent,
    description: "Meet agent",
    description2: "Discuss your options and get persnalised advice.",
  },
  {
    id: 4,
    icon: Insurance,
    description: "Get Insurance",
    description2: "Secure your insurance quickly and confidently.",
  },
];

export default function Steps() {
  return (
    <section className=" bg-gray-50 min-h-screen  ">
      <div className="m-8 items-center ">
        <div className="flex flex-col items-center justify-center text-center ">
          <h3 className="text-[#1A2739] font-semibold text-[18px]  mt-8 ">
            <span className="text-[#1882FFC7]">{">"}</span>
            <span className="text-[#1A2739]">{">"}</span>
            <span className="text-[#1A2739] font-semibold">{">"}</span>WORK
            PROCESS <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1A2739]">{"<"}</span>
            <span className="text-[#1882FFC7]">{"<"}</span>
          </h3>
          <h1 className="text-base text-[32px]   mb-4 text-[#1A2739] font-bold text-center tracking-wide">
            Our Simple 4-Step Process
          </h1>
        </div>
        <div className="grid grid-col sm:grid-cols md:grid-cols-4 lg:grid-cols-4 gap-12 mb-6  items-center lg:items-start justify-center">
          {steps.map((step) => (
            <div key={step.id} className="  rounded-lg mb-8  ">
              <div className="flex flex-col m-4  justify-content items-center bg-gray-300 rounded-lg  ">
                <div className="rounded-full h-30 w-30 bg-[#035aa7] flex items-center justify-center p-6 mb-2 mt-4">
                  <Image src={step.icon} alt="img" />
                </div>
                <p className="text-[#1A2739] font-semibold text-center mt-2 mb-2">
                  {step.description}
                </p>
                <p className="text-gray-500 font-regular text-center mt-2 mb-2">
                  {step.description2}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center rounded   ">
          <div className=" flex flex-row items-center justify-center rounded  ">
            <p className="font-semibold bg-gray-300 p-4 rounded-l-md ">
              Don`t hesitatae, contact us for better future life.
            </p>
            <p className="bg-[#035aa7] text-white p-4 rounded-r-md">
              Get a Quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
