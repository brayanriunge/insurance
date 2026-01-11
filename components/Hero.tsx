import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen  min-h-[300px] md:min-h-[600px] md::mt-18 overflow-hidden ">
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

// export default function Hero() {
//   return (
//     <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/fam.jpg')" }}
//       >
//         {/* Opacity gradient overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(to right, #15233d 2%, #15233d 2%, #15233d 2%, transparent 80%, transparent 100%)",
//           }}
//         >
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
//             <div className="flex flex-col lg:flex-row h-full items-center lg:items-start">
//               {/* Text content - responsive width and spacing */}
//               <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-start py-8 lg:py-0 lg:pt-12 xl:pt-20">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white text-pretty leading-tight md:leading-tight lg:leading-tight mb-4 sm:mb-6">
//                   Insurance that grows with your family.
//                 </h1>

//                 <div className="border-l-2 border-gray-50 pl-4 sm:pl-6 md:pl-8 mt-4">
//                   <p className="text-white text-base sm:text-lg md:text-[16px] font-medium mb-6 sm:mb-8 max-w-xl">
//                     At Lifeway, we provide flexible, family-focused insurance
//                     solutions that evolve with your life. Whether you are
//                     planning, protecting or preparing for the future we're with
//                     you every step of the way.
//                   </p>

//                   <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-2xl text-white bg-[#0863cb] hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base md:text-lg font-semibold">
//                     Let's get started
//                   </button>
//                 </div>
//               </div>

//               {/* Spacer/arrows section - hidden on mobile, visible on larger screens */}
//               <div className="hidden lg:flex lg:w-1/2 h-full items-center justify-center">
//                 {/* Optional: Add arrows or decorative elements here */}
//                 <div className="text-white opacity-50">
//                   {/* Arrow icons or decorative content */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile gradient overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden"></div>
//     </div>
//   );
// }
