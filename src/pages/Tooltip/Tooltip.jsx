import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

export default function Tooltip() {
  const [tooltip, setTooltip] = useState(null) //  // State to manage which tooltip is active

  const location = useLocation()

  return (
    <>
      <div>{location.pathname === "/Tooltip" ? <Header /> : null}</div>

      <div className="w-full bg-red-700 flex flex-col justify-center items-center h-screen space-y-6 p-4">
        <h3 class="text-sm font-medium text-gray-800 bg-gray-100 p-3 rounded-lg shadow-md leading-snug">
          यह एक छोटा पॉपअप संदेश होता है, जो तब दिखाई देता है जब आप किसी बटन,
          आइकन, या टेक्स्ट पर माउस ले जाते हैं या उसे होवर करते हैं।
          <br />
          <span class="text-green-400">🔹 उदाहरण:</span> (1) जब आप किसी इंफो
          आइकन (ℹ️) पर होवर करते हैं और एक छोटा बॉक्स दिखता है जिसमें जानकारी
          होती है, वह Tooltip कहलाता है।
          <br />
          (2) किसी वेबसाइट पर "सबमिट" बटन पर होवर करने पर "फॉर्म सबमिट करें"
          जैसा संदेश दिख सकता है।
        </h3>

        <h3 class="text-sm font-medium text-gray-800 bg-gray-100 p-3 rounded-lg shadow-md leading-snug">
          A tooltip is a small popup message that appears when you hover over a
          button, icon, or text.
          <br />
          <span class="text-green-400">🔹 Example:</span> (1) When you hover
          over an info icon (ℹ️), a small box appears containing information,
          which is called a tooltip.
          <br />
          (2) On a website, hovering over a "Submit" button may show a message
          like "Submit the form."
        </h3>

        {/* Tooltip control buttons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="relative flex flex-col items-center">
            <button
              onMouseOver={() => setTooltip("top")}
              onMouseLeave={() => setTooltip(null)}
              className={`px-4 py-2 bg-blue-600 text-white rounded ${
                tooltip === "top" ? "bg-red-500" : ""
              }`}
            >
              ऊपर (Top)
            </button>
            {tooltip === "top" && (
              <p className="absolute bottom-full mb-2 bg-gray-900 text-white px-2 py-1 rounded shadow-md">
                Top
              </p>
            )}
          </div>

          <div className="relative flex flex-col items-center">
            <button
              onMouseOver={() => setTooltip("right")}
              onMouseLeave={() => setTooltip(null)}
              className={`px-4 py-2 bg-blue-600 text-white rounded ${
                tooltip === "right" ? "bg-red-500" : ""
              }`}
            >
              दाईं ओर (Right)
            </button>
            {tooltip === "right" && (
              <p className="absolute left-full ml-2 bg-gray-900 text-white px-2 py-1 rounded shadow-md">
                Right
              </p>
            )}
          </div>

          <div className="relative flex flex-col items-center">
            <button
              onMouseOver={() => setTooltip("bottom")}
              onMouseLeave={() => setTooltip(null)}
              className={`px-4 py-2 bg-blue-600 text-white rounded ${
                tooltip === "bottom" ? "bg-red-500" : ""
              }`}
            >
              नीचे (Bottom)
            </button>
            {tooltip === "bottom" && (
              <p className="absolute top-full mt-2 bg-gray-900 text-white px-2 py-1 rounded shadow-md">
                Bottom
              </p>
            )}
          </div>

          <div className="relative flex flex-col items-center">
            <button
              onMouseOver={() => setTooltip("left")}
              onMouseLeave={() => setTooltip(null)}
              className={`px-4 py-2 bg-blue-600 text-white rounded ${
                tooltip === "left" ? "bg-red-500" : ""
              }`}
            >
              बाईं ओर (Left)
            </button>
            {tooltip === "left" && (
              <p className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded shadow-md">
                Left
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
