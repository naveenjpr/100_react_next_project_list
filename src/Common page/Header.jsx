import React, { useState } from "react"
import naveenlogo from "../assets/naveenlogo.jpg"
import { RxCross2 } from "react-icons/rx"
import { IoReorderThree, IoReorderThreeOutline } from "react-icons/io5"
import { Link, useLocation } from "react-router-dom"
import { FaArrowUp } from "react-icons/fa"

export default function Header() {
  const location = useLocation()

  const [showmenu, setshowmenu] = useState(false)

  // Scroll to top function

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <>
      {/* mobile header start */}

      <div>
        {location.pathname === "/" ? (
          <div
            className="text-white z-50 fixed right-[10px] bottom-10 bg-green-500 table rounded-[50%] p-2"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </div>
        ) : null}
      </div>

      <div className="sticky bg-white top-0 z-50">
        <header className="w-[100%] justify-between   bg-[#c71585] z-[999] relative  flex">
          {/* Logo on the Left */}
          <div className="text-2xl font-bold flex-shrink-0 p-1">
            <Link to="/">
              <img src={naveenlogo} className="w-12 h-auto" alt="Logo" />
            </Link>
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
                  className="hover:bg-gray-700 cursor-pointer  rounded-lg transition-all duration-300"
                >
                  <Link to={item.path} className="w-full block px-4 py-2">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>

      {/* mobile header End */}
    </>
  )
}
