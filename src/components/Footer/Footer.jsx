import { useState } from "react";
import { Link } from "react-router-dom";
import { Ghost, Instagram, Music2, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const [open_section, setOpenSection] = useState(null); // open section of the footer

  // open the footer section
  const openSection = (section_name) => {
    if (section_name === open_section) {
      setOpenSection(null);
    } else {
      setOpenSection(section_name);
    }
  };

  return (
    <>
      <div className="mt-auto lg:flex lg:flex-row lg:justify-around border-t-2 border-black bg-white">
        {/* Menu section */}
        <div className="lg:flex lg:flex-col lg:my-[100px]">
          <div className="flex flex-row justify-center items-center border-b-2 border-black p-5 lg:border-0 lg:p-0 lg:justify-start">
            <div className="text-center w-1/4 z-10">
              <h3 className="text-3xl capitalize lg:text-4xl lg:my-2">Menu</h3>
            </div>
            <div className="flex justify-center ml-2 lg:hidden">
              <button onClick={() => openSection("menu")}>
                <ChevronUp
                  size={35}
                  className={`${
                    open_section === "menu" ? "rotate-180" : ""
                  } duration-300`}
                />
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-center w-full p-2 ${
              open_section === "menu" ? "" : "hidden"
            } lg:flex`}
          >
            <ul
              className={`relative w-full left-0 right-0 ${
                open_section === "menu" ? "" : "bottom-96 -z-10"
              } flex flex-col justify-center items-center lg:bottom-0 lg:items-start lg:z-0 duration-300`}
            >
              <li className="text-2xl my-1 lg:my-4 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100">
                <Link to="/">Home</Link>
              </li>
              <li className="text-2xl my-1 lg:my-4 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="text-2xl my-1 lg:my-4 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="text-2xl my-1 lg:my-4 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Policy section w/FAQ */}
        <div className="lg:flex lg:flex-col lg:my-[100px]">
          <div
            className={`flex z-10 flex-row justify-center items-center border-${
              open_section === "menu" ? "y" : "b"
            }-2 border-black p-5 lg:border-0 lg:p-0 lg:justify-start`}
          >
            <div className="text-center w-1/4 ">
              <h3 className="text-3xl capitalize lg:text-4xl lg:my-2">
                Policy
              </h3>
            </div>
            <div className="flex justify-center ml-2 lg:hidden">
              <button onClick={() => openSection("policy")}>
                <ChevronUp
                  size={35}
                  className={`${
                    open_section === "policy" ? "rotate-180" : ""
                  } duration-300`}
                />
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-center w-full p-2 ${
              open_section === "policy" ? "" : "hidden"
            } duration-300 lg:flex`}
          >
            <ul
              className={`relative w-full left-0 right-0 ${
                open_section === "policy" ? "" : "bottom-[450px] -z-10"
              } flex flex-col justify-center items-center duration-700 lg:bottom-0 lg:items-start lg:z-0`}
            >
              <li className="text-2xl my-1 lg:my-4 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100">
                <Link to="/faq">Faq</Link>
              </li>
              <li className="text-2xl my-1 lg:my-4 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100">
                <Link to="/policy">Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials section */}
        <div className="lg:flex lg:flex-col lg:my-[100px]">
          <div
            className={`flex flex-row justify-center items-center border-${
              open_section === "policy" ? "y" : "b"
            }-2 border-black p-5 lg:border-0 lg:p-0 lg:justify-start`}
          >
            <div className="text-center w-1/4 z-10 mr-1">
              <h3 className="text-3xl capitalize lg:text-4xl lg:my-2">
                Socials
              </h3>
            </div>
            <div className="flex justify-center ml-2 lg:hidden">
              <button onClick={() => openSection("socials")}>
                <ChevronUp
                  size={35}
                  className={`${
                    open_section === "socials" ? "rotate-180" : ""
                  } duration-300`}
                />
              </button>
            </div>
          </div>
          <div
            className={`left-0 right-0 ${
              open_section === "socials" ? "" : "absolute top-96 -z-10"
            } flex flex-col justify-center items-center w-full p-2 lg:static lg:items-start lg:z-0`}
          >
            <div className="flex flex-row justify-center w-full">
              <Ghost
                size={30}
                className="mx-4 my-2 lg:my-4 lg:w-9 lg:h-9 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100"
              />
              <Instagram
                size={30}
                className="mx-4 my-2 lg:my-4 lg:w-9 lg:h-9 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100"
              />
              <Music2
                size={30}
                className="mx-4 my-2 lg:my-4 lg:w-9 lg:h-9 cursor-pointer active:scale-[0.70] hover:scale-[1.1] transform-all ease duration-100"
              />
            </div>
            <h4 className="text-xl my-1 lg:text-2xl lg:my-4">
              <Mail size={30} className="lg:mr-2 hidden sm:inline" />
              FIT@email.com
            </h4>
            <h4 className="text-xl my-1 lg:text-2xl lg:my-4">
              <i className="fa-regular fa-phone lg:text-3xl lg:mr-2 lg:fa hidden sm:inline"></i>
              (444) 444-4444
            </h4>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-center p-1 lg:p-2">
        <span className="text-sm text-white lg:text-md">
          &copy;.FIT all rights reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
