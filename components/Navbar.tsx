import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
// import { HiBars3 } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
// import { HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const flexStyles = "justify-between flex items-center";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "ourprocess", label: "Our Process" },
    { id: "insurance", label: "Insurance" },
    { id: "testimonies", label: "Testimonies" },
    { id: "faqs", label: "Faqs" },
    { id: "contactus", label: "Contact Us" },
  ];

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuToggled(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="  ">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1A2739]`}
      >
        <div className={`${flexStyles} mx-auto w-5/6`}>
          <div className={`${flexStyles} gap-8 w-full`}>
            <Link href="/">
              <p className="font-semibold text-4xl text-[#7DB9FF]">LifeWay</p>
            </Link>

            {isAboveMediaScreens ? (
              <div className={`${flexStyles} justify-center-safe w-full gap-4`}>
                <div
                  className={
                    "flex flex-col font-medium mt-4 p-4  md:flex-row md:space-x-8 md:mt-0 text-[16px]   "
                  }
                >
                  {navItems.map((navItem) => (
                    <button
                      key={navItem.id}
                      onClick={() => handleClick(navItem.id)}
                      className={`relative transition-all duration-300
                        ${
                          activeSection === navItem.id
                            ? "text-[#176CD5] font-bold"
                            : "text-gray-400 hover:text-[#176CD5]"
                        }
                        `}
                    >
                      {navItem.label}
                      {activeSection === navItem.id && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#176CD5] rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex justify-end p-4">
                <button
                  className="rounded-full p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <HiBars3 className="h-6 w-6 text-white" />
                </button>
              </div>
            )}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              <div
                className="bg-[#1A2739] fixed right-0 bottom-0 h-full w-[200px] z-40 p-5 drop-shadow-lg 
                overflow-hidden transition-transform duration-300 ease-in-out transform translate-x-0"
              >
                {/* Close icon */}
                <div className="p-4 flex justify-end">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <HiOutlineX className="h-6 w-6 text-white hover:text-red-500 transition duration-200" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center font-mono text-lg font-bold gap-4 mt-4">
                  {navItems.map((navItem) => (
                    <button
                      key={navItem.id}
                      onClick={() => {
                        handleClick(navItem.id);
                        setIsMenuToggled(false);
                      }}
                      className={`w-full  text-center py-3 px-3 rounded-lg transition-all duration-300 
                        ${
                          activeSection === navItem.id
                            ? "text-[#176CD5] bg-[#176CD5]/20 font-bold"
                            : "text-gray-400 hover:text-[#176CD5] hover:bg-[#176CD5]/20"
                        }`}
                    >
                      {navItem.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
