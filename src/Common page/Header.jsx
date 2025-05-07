import React, { useState } from "react";
import naveenlogo from "../assets/naveenlogo.jpg";
import { RxCross2 } from "react-icons/rx";
import { IoReorderThree, IoReorderThreeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  const [showmenu, setshowmenu] = useState(false);

  // Scroll to top function

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
            aria-label="बंद करें"
            onClick={() => setshowmenu(!showmenu)}
          >
            {showmenu == true ? <RxCross2 /> : <IoReorderThreeOutline />}
          </button>
          <nav
            className={`bg-[#ed143d] text-white w-[90%] min-h-screen absolute left-[-100%] transition-all duration-300  ${
              showmenu == true ? "left-[0px]" : ""
            }`}
          >
            <ul className="flex flex-wrap gap-[2px] text-left text-[13px] w-full">
              {/* Navigation Links */}
              {[
                { path: "/", label: "Home" },
                {
                  path: "/All_pdf_convert_one_pdf",
                  label: "All-PDF-Convert-One-PDF",
                },
                { path: "/Calculator", label: "Calculator" },
                {
                  path: "/FormDataShowToTable",
                  label: "Form-DataShow-To-Table",
                },
                { path: "/Header_Menu_navbar", label: "Header_Menu_navbar" },
                { path: "/ImageToText", label: "Image-To-Text" },
                { path: "/Letter_count", label: "Letter-count" },
                { path: "/Reserved_Keywords", label: "Reserved_Keywords" },
                { path: "/LightBox", label: "LightBox" },
                { path: "/Mega_Menu", label: "Mega-Menu" },
                { path: "/Movie", label: "Movie" },
                { path: "/Password", label: "Password" },
                { path: "/Percentage", label: "Percentage" },
                { path: "/ProductFilter", label: "Product-Filter" },
                {
                  path: "/Product_find_price_filter",
                  label: "Product-find-price-filter",
                },
                {
                  path: "/PrimeNumber",
                  label: "Prime-Number",
                },
                { path: "/Randomcolor", label: "Random-color" },
                { path: "/Tapinng", label: "Tapinng" },
                { path: "/WeatherApp", label: "Weather-App" },
                { path: "/Word_counter", label: "Word_counter" },
                { path: "/Faq", label: "Faq" },

                { path: "/Tooltip", label: "Tooltip" },
                { path: "/SliderType", label: "All-Type-Slider" },
                { path: "/BgRemover", label: "Bg-Remover" },
                { path: "/Hash-tag-Generator", label: "Hashtag-Generator" },
                { path: "/Rss-Feed", label: "Rss-Feed" },
                {
                  path: "/Image-to-WebP-Converte",
                  label: "Image-to-WebP-Converte",
                },
                {
                  path: "/Count_Down",
                  label: "Count_Down",
                },
                {
                  path: "/To_do_list",
                  label: "To_do_list",
                },
                {
                  path: "/QuizApp",
                  label: "QuizApp",
                },
                {
                  path: "/Wordpress",
                  label: "Wordpress-Notes",
                },
                {
                  path: "/Practics_notes_daily",
                  label: "Practics_notes_daily",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-700 cursor-pointer  rounded-lg transition-all duration-300"
                >
                  <Link
                    to={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block p-[12px]"
                  >
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
  );
}
