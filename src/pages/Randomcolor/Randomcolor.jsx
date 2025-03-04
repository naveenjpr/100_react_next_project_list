import React, { useState } from "react"
import Header from "../../Common page/Header"
import { useLocation } from "react-router-dom"

export default function Randomcolor() {
  const location = useLocation()

  const [bgColor, setBgColor] = useState("bg-red-500")

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256) // Random red value (0-255)
    const g = Math.floor(Math.random() * 256) // Random green value (0-255)
    const b = Math.floor(Math.random() * 256) // Random blue value (0-255)
    return `rgb(${r}, ${g}, ${b})` // Return the RGB color string
  }
  // Function to handle button click
  const randomColorClick = () => {
    const newColor = generateRandomColor() // Generate a random color
    setBgColor(newColor) // Update the state with the new color
    console.log(newColor) // Log the new color to the console
  }
  return (
    <>
      <div>{location.pathname === "/Randomcolor" ? <Header/> : null}</div>

      <div
        className={`h-screen w-[100%] ${bgColor}  relative py-[20px]`}
        style={{ backgroundColor: bgColor }} // Use inline styles for dynamic colors
      >
        <h1 className="text-white text-3xl font-bold drop-shadow-md text-center">
          {" "}
          Random Color Generation
        </h1>
        <button
          className="bg-white table p-[12px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg"
          onClick={randomColorClick}
        >
          click me Random Color
        </button>
      </div>
    </>
  )
}
