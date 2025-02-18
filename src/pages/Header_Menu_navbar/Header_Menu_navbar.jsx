import React, { useState } from "react"
import { IoReorderThreeOutline } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import logo from "../../assets/Screenshot 2025-02-18 103552.png"

export default function Header_Menu_navbar() {
  const [showmenu, setshowmenu] = useState(false)
  return (
    <>
      {/* laptop start */}
      <header className="w-[100%]  hidden md:block">
        <nav className="bg-[#00008b] text-white w-[100%] flex justify-between p-[12px] items-center ">
          <div>
            <img src={logo} alt="" className="w-[50px] h-[50px]" />
          </div>
          <ul className="text-left flex">
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">About</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Services</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
      {/* laptop End */}
      {/* mobile navbar start */}
      <header className="w-[100%] justify-between  bg-[#00008b]  z-[999] relative md:hidden flex">
        <div>
          <img src={logo} alt="" className="w-[50px] h-[50px]" />
        </div>
        <button
          className="absolute right-[0px] text-[45px] text-white"
          onClick={() => setshowmenu(!showmenu)}
        >
          {showmenu == true ? <RxCross2 /> : <IoReorderThreeOutline />}
        </button>
        <nav
          className={`bg-gray-800 text-white w-[90%] h-screen absolute left-[-100%] transition-all duration-300  ${
            showmenu == true ? "left-[0px]" : ""
          }`}
        >
          <ul className="text-left">
            <li className="p-4">
              <img src={logo} alt="" className="w-[50px] h-[50px]" />
            </li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">About</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Services</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>

      {/* mobile navbar End*/}

      <div>
        <p className="text-center md:text-[35px] text-[17px] p-[12px]">
          Responsive Navbar with separate designs for
          <span className="text-[red] mx-3">"laptops"</span>
          and
          <span className="text-[red] mx-3">"mobile"</span>
          devices using React,
        </p>
      </div>
    </>
  )
}
