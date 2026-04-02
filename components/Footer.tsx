import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { IoLocation, IoMail } from "react-icons/io5";
import { RiCopyrightFill } from "react-icons/ri";

export default function Footer() {
  return (
    <section>
      <div className="p-8  bg-[#1A2739]">
        <div className="flex mt-12  flex-col lg:flex-row  lg:items-start   gap-6 border-b-1 border-gray-500">
          {/* Lifeway */}
          <div className="flex flex-col justify-center  items-start gap-4 ">
            <p className="text-white font-bold text-[24px]">LifeWay</p>
            <p className="text-white font-regular  text-[18px] text-balance">
              Lifeway offers trusted, family focused insurance solutions
              designed to to protect what matters most today and for the future.
            </p>
            <div className="flex flex-row justify-content gap-2">
              <div className="rounded-md flex items-center justify-center p-2 border-2 border-[#035aa7]">
                <AiFillInstagram color="white" size={20} />
              </div>
              <div className="rounded-md flex items-center justify-center p-2 border-2 border-[#035aa7]">
                <BsTwitterX color="white" size={20} />
              </div>
              <div className="rounded-md flex items-center justify-center p-2 border-2 border-[#035aa7]">
                <BsFacebook color="white" size={20} />
              </div>
              <div className="rounded-md flex items-center justify-center p-2 border-2 border-[#035aa7]">
                <FaPinterestP color="white" size={20} />
              </div>
            </div>
          </div>

          {/* contact */}
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-white font-bold text-[24px]">Contact</h1>
            <div className=" flex flex-row items-center justify-content gap-4">
              <IoMail color="#0863cb" size={20} />
              <p className="font-regular text-[18px] text-gray-500">
                Lifeway@company.com
              </p>
            </div>
            <div className=" flex flex-row  justify-content gap-4">
              <IoLocation color="#0863cb" size={20} />
              <p className="font-regular text-[18px] text-gray-500">
                Nyahururu next to tower sacco.
              </p>
            </div>
            <h2 className="text-white font-bold text-[24px] mb-2">
              Open Hours
            </h2>
            <p className="text-gray-500 font-regular">
              Mon - Sat: 8:00am to 5:00pm
            </p>
            <p className="text-gray-500 font-regular">Sunday: Closed</p>
          </div>

          {/* NewsLetter */}
          <div className="flex flex-col justify-content items-start gap-4">
            <h1 className="text-white font-bold text-[24px]">Newsletter</h1>
            <p className="font-regular text-[18px] text-gray-500 text-balence mb-4">
              Subscribe to our newsletter for the latest update and news
            </p>
            <div className="bg-[#101b29] flex flex-row justify-content p-4 w-5/6 rounded-md ">
              <p className="font-regular text-[18px] text-gray-500 mr-20">
                Email address
              </p>
              <GrSend color="white" size={20} />
            </div>
            <div className="flex-row flex justify-content mb-4  gap-4">
              <div className="rounded-full items-center justify-center flex ">
                <BiPhoneCall color="#5DCEF2" size={40} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-white text-[16px]">
                  +254 701 842 846
                </p>
                <p className="text-gray-500 text-[16px] font-medium">
                  Call Our Experts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 mt-2">
          <RiCopyrightFill color="white" />
          <p className="text-white text-[16px">
            All Rights Reserved By Developer
          </p>
        </div>
      </div>
    </section>
  );
}
