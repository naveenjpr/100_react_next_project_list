import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import womenImge1 from "../assets/womenImage1.jpg"
import womenImge2 from "../assets/womenImage2.jpg"
import womenImge3 from "../assets/womenImage3.jpg"
import womenImge4 from "../assets/womenImage4.jpg"
import womenImge5 from "../assets/womenImage5.jpg"
import womenImge6 from "../assets/womenImage6.jpg"
import womenImge7 from "../assets/womenImage7.jpg"
import womenImge8 from "../assets/womenImage8.jpg"
import womenImge9 from "../assets/womenImage9.jpg"
import womenImge10 from "../assets/womenImage10.jpg"
import menImage1 from "../assets/mens1.jpg"
import menImage2 from "../assets/mens2.jpg"
import menImage3 from "../assets/mens3.jpg"
import menImage4 from "../assets/mens4.jpg"
import menImage5 from "../assets/mens5.jpg"
import menImage6 from "../assets/mens6.jpg"
import menImage7 from "../assets/mens7.jpg"
import menImage8 from "../assets/mens8.jpg"
import menImage9 from "../assets/mens9.jpg"
import menImage10 from "../assets/mens10.jpg"
import boysImage1 from "../assets/baby1.jpg"
import boysImage2 from "../assets/baby2.jpg"
import boysImage3 from "../assets/baby3.jpg"
import boysImage4 from "../assets/baby4.jpg"
import boysImage5 from "../assets/baby5.jpg"
import boysImage6 from "../assets/baby6.jpg"
import boysImage7 from "../assets/baby7.jpg"
import boysImage8 from "../assets/baby8.jpg"
import boysImage9 from "../assets/baby9.jpg"
import boysImage10 from "../assets/baby10.jpg"
import childImage1 from "../assets/child1.jpg"
import childImage2 from "../assets/child2.jpg"
import childImage3 from "../assets/child3.jpg"
import childImage4 from "../assets/child4.jpg"
import childImage5 from "../assets/child5.jpg"
import childImage6 from "../assets/child6.jpg"
import childImage7 from "../assets/child7.jpg"
import childImage8 from "../assets/child8.jpg"
import childImage9 from "../assets/child9.jpg"
import childImage10 from "../assets/child10.jpg"
import tabingImage from "../assets/tabingImage.jpg"
export default function Tapinng() {
  const [activButton, setactivButton] = useState("button1")
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }

  const imageswomen = [
    {
      women: womenImge1,

      men: menImage1,

      boys: boysImage1,

      child: childImage1,
    },
    {
      women: womenImge2,

      men: menImage2,

      boys: boysImage2,

      child: childImage2,
    },
    {
      women: womenImge3,

      men: menImage3,

      boys: boysImage3,

      child: childImage3,
    },
    {
      women: womenImge4,

      men: menImage4,

      boys: boysImage4,

      child: childImage4,
    },
    {
      women: womenImge5,

      men: menImage5,

      boys: boysImage5,

      child: childImage5,
    },
    {
      women: womenImge6,

      men: menImage6,

      boys: boysImage6,

      child: childImage6,
    },
    {
      women: womenImge7,

      men: menImage7,

      boys: boysImage7,

      child: childImage7,
    },
    {
      women: womenImge8,

      men: menImage8,

      boys: boysImage8,

      child: childImage8,
    },
    {
      women: womenImge9,

      men: menImage9,

      boys: boysImage9,

      child: childImage9,
    },
    {
      women: womenImge10,

      men: menImage10,

      boys: boysImage10,

      child: childImage10,
    },
  ]
  return (
    <>
      <section
        className="w-full md:min-h-screen min-h-[34vh] bg-black mb-[10px] pb-[40px]"
        style={{ backgroundImage: `url(${tabingImage})` }}
      >
        <h1 className="md:text-4xl text-3xl font-[500] text-[#a52a2a] py-[20px]  text-center">
          Tailwind Tab Logic
        </h1>

        {/* Tab Navigation */}
        <div className="max-w-[95%] mx-auto border border-gray-300 p-2 grid sm:grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex md:gap-5 gap-0 justify-center overflow-x-auto whitespace-nowrap">
            <button
              className={`md:px-4 px-2 py-2 text-lg md:text-xl font-bold ${
                activButton === "button1"
                  ? "text-blue-300 border-b-4 border-black"
                  : "text-[#a52a2a] hover:text-gray-800"
              }`}
              onClick={() => setactivButton("button1")}
            >
              Women's
            </button>
            <button
              className={`md:px-4 px-2 py-2 text-lg md:text-xl font-bold ${
                activButton === "button2"
                  ? "text-blue-300 border-b-4 border-black"
                  : "text-[#a52a2a] hover:text-gray-800"
              }`}
              onClick={() => setactivButton("button2")}
            >
              Men's
            </button>
            <button
              className={`md:px-4 px-2 py-2 text-lg md:text-xl font-bold ${
                activButton === "button3"
                  ? "text-blue-300 border-b-4 border-black"
                  : "text-[#a52a2a] hover:text-gray-800"
              }`}
              onClick={() => setactivButton("button3")}
            >
              Baby
            </button>
            <button
              className={`md:px-4 px-2 py-2 text-lg md:text-xl font-bold ${
                activButton === "button4"
                  ? "text-blue-300 border-b-4 border-black"
                  : "text-[#a52a2a] hover:text-gray-800"
              }`}
              onClick={() => setactivButton("button4")}
            >
              Child
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="max-w-[95%] mx-auto mt-8">
          <Slider {...settings}>
            {imageswomen.map((image, index) => (
              <div
                key={index}
                className="border border-gray-300 p-2 rounded-lg"
              >
                {activButton === "button1" ? (
                  <img
                    src={image.women}
                    alt={`Slide ${index + 1}`}
                    className="w-full max-h-[350px] "
                  />
                ) : activButton === "button2" ? (
                  <img
                    src={image.men}
                    alt={`Slide ${index + 1}`}
                    className="w-full max-h-[350px] "
                  />
                ) : activButton === "button3" ? (
                  <img
                    src={image.boys}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto max-h-[350px] "
                  />
                ) : (
                  <img
                    src={image.child}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto max-h-[350px] "
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
