import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Header from "../../Common page/Header"
import { IoReorderThreeOutline } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import logo from "../../assets/Screenshot 2025-02-18 103552.png"

export default function Header_Menu_navbar() {
  const location = useLocation()

  const [showmenu, setshowmenu] = useState(false) //यह स्टेट वेरिएबल मोबाइल मेनू को दिखाने या छिपाने के लिए उपयोग किया जाता है।
  return (
    <>
      <div>
        {location.pathname === "/Header_Menu_navbar" ? <Header /> : null}
      </div>

      {/* laptop start */}
      <header className="w-[100%] h-screen  hidden md:block">
        <nav className="bg-[#00008b] text-white w-[100%] flex justify-between p-[12px] items-center ">
          <div>
            <img src={logo} alt="test" className="w-[50px] h-[50px]" />
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
          <img src={logo} alt="test" className="w-[50px] h-[50px]" />
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
              <img src={logo} alt="test" className="w-[50px] h-[50px]" />
            </li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">About</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Services</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
      {/* mobile navbar End*/}
    </>
  )
}
