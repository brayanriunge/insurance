import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/next.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
// import { HiBars3 } from "react-icons/hi2";
import { useRouter } from "next/router";
// import { HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const flexStyles = "justify-between flex items-center";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const router = useRouter();
  return (
    <nav className="  ">
      <div
        className={`z-30 w-full ${flexStyles} fixed top-0 bg-[#f9fafd] `}
        //  bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5]
      >
        <div className={`${flexStyles} mx-auto w-5/6`}>
          <Link href="/" className={`${flexStyles}`}>
            <p>Lifeway</p>
            <Image
              src={Logo}
              alt="logo"
              width={90}
              height={90}
              className="rounded-full"
            />
          </Link>
          <div className={`${flexStyles} gap-2 w-5/6`}>
            {isAboveMediaScreens ? (
              <div className={" w-full gap-4"}>
                <div
                  className={
                    "flex flex-col font-medium mt-4 p-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 "
                  }
                >
                  <div
                    className={`${
                      router.pathname === "/"
                        ? " border-b-[#00a650] border-b-2 rounded"
                        : "text-gray-400 hover:border-b-2 bg-white hover:border-b-[#00a650] p-2 hover:rounded-b-4  border-b-1  border-primary-300/50 md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/"
                          ? "text-black "
                          : "text-gray-400"
                      }`}
                    >
                      Home
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/Properties"
                        ? "text-black border-b-[#00a650] border-b-2 pb-2"
                        : "text-gray-400 hover:border-b-2  hover:border-b-[#00a650] p-2 rounded  border-b-1  border-primary-300/50 md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/Properties"
                      className={`${
                        router.pathname === "/Properties"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      Insurance
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/aboutUs"
                        ? "text-black border-b-[#00a650] border-b-2"
                        : "text-gray-400 hover:border-b-2  hover:border-b-[#00a650] p-2 hover:rounded-b-4  border-b-1  rounded md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/aboutUs"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      About Us
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/testimonies"
                        ? "text-black border-b-[#00a650] border-b-2 "
                        : "text-gray-400 hover:border-b-2  hover:border-b-[#00a650] p-2 rounded    "
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/testimonies"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      Testiminials
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/contactUs"
                        ? "text-black border-b-[#00a650] border-b-2 pb-2"
                        : "text-gray-400 hover:border-b-2 hover:border-b-[#00a650] p-2 rounded"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/contactUs"
                          ? "text-red-800"
                          : "text-gray-400"
                      }`}
                    >
                      News
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-end p-4">
                <button
                  className="rounded-full p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  {/* <HiBars3 className="h-6 w-6" /> */}
                </button>
              </div>
            )}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              <div
                className="bg-white fixed right-0 bottom-0 h-full w-[200px] z-40 p-5 drop-shadow-lg 
                              overflow-hidden transition-transform duration-300 ease-in-out transform translate-x-0"
              >
                {/* Close icon */}
                <div className="p-4 flex justify-end">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    {/* <HiOutlineX className="h-6 w-6 text-gray-800 hover:text-red-500 transition duration-200" /> */}
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center font-mono text-lg font-bold gap-6 mt-4">
                  {/* Home */}
                  <Link
                    href="/"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    Home
                  </Link>

                  {/* Products */}
                  <Link
                    href="/products/product"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    Insurance
                  </Link>

                  {/* Services */}
                  <Link
                    href="/service"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    About us
                  </Link>

                  {/* Cart */}

                  {/* Chat / Notification */}
                  <Link
                    href="/chat"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    Testiminials
                  </Link>
                  <Link
                    href="/chat"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    News
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
