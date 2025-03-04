import React, { useState } from "react"
import naveenlogo from "../assets/naveenlogo.jpg"
import { RxCross2 } from "react-icons/rx"
import { IoReorderThree, IoReorderThreeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

export default function Header() {
  const [showmenu, setshowmenu] = useState(false)
  return (
    <>
      {/* mobile header start */}
      <header className="w-[100%] justify-between   bg-[#00008b] z-[999] relative  flex">
        {/* Logo on the Left */}
        <div className="text-2xl font-bold flex-shrink-0 p-1">
          <img src={naveenlogo} className="w-12 h-auto" alt="Logo" />
        </div>
        <button
          className="absolute top-0 right-0 text-[45px] text-white"
          onClick={() => setshowmenu(!showmenu)}
        >
          {showmenu == true ? <RxCross2 /> : <IoReorderThreeOutline />}
        </button>
        <nav
          className={`bg-[#ed143d] text-white w-[90%] min-h-screen absolute left-[-100%] transition-all duration-300  ${
            showmenu == true ? "left-[0px]" : ""
          }`}
        >
          <ul className="flex flex-wrap gap-2 text-left w-full">
            {/* Navigation Links */}
            {[
              { path: "/", label: "Home" },
              {
                path: "/All_pdf_convert_one_pdf",
                label: "All PDF Convert One PDF",
              },
              { path: "/Calculator", label: "Calculator" },
              { path: "/FormDataShowToTable", label: "FormDataShowToTable" },
              { path: "/Header_Menu_navbar", label: "Header_Menu_navbar" },
              { path: "/ImageToText", label: "ImageToText" },
              { path: "/Letter_count", label: "Letter_count" },
              { path: "/LightBox", label: "LightBox" },
              { path: "/Mega_Menu", label: "Mega_Menu" },
              { path: "/Movie", label: "Movie" },
              { path: "/Password", label: "Password" },
              { path: "/Percentage", label: "Percentage" },
              { path: "/ProductFilter", label: "ProductFilter" },
              {
                path: "/Product_find_price_filter",
                label: "Product_find_price_filter",
              },
              { path: "/Randomcolor", label: "Randomcolor" },
              { path: "/Tapinng", label: "Tapinng" },
              { path: "/WeatherApp", label: "WeatherApp" },
              { path: "/Word_counter", label: "Word_counter" },
              { path: "/Faq", label: "Faq" },

              { path: "/Tooltip", label: "Tooltip" },
            ].map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Link to={item.path} className="w-full block">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* mobile header End */}
    </>
  )
}
