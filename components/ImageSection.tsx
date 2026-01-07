import Image from "next/image";
import React from "react";
import People from "@/public/people.png";

export default function ImageSection() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative group w-full max-w-lg">
        {/* Main image container */}
        <div className="relative overflow-hidden rounded-xl">
          {/* Image */}
          <Image
            src={People} // Replace with your image path
            alt="Description of image"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay div - positioned near top but doesn't span full width */}
          {/* <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3/4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm rounded-lg shadow-xl px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">i</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Featured Image
                  </h3>
                  <p className="text-white/80 text-xs">
                    This is a custom overlay
                  </p>
                </div>
              </div>
              <button className="text-white text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">
                View
              </button>
            </div>
          </div> */}

          {/* Optional bottom overlay if needed */}
          <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-2 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">i</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Featured Image
                  </h3>
                  <p className="text-white/80 text-xs">
                    This is a custom overlay
                  </p>
                </div>
              </div>
              <button className="text-white text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
