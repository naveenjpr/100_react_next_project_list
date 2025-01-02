import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import passwordimage from "../assets/passwordimage.jpg"
import Header from "../Common page/Header"
import {
  BigUppercase,
  MathNumbers,
  OtherSpecialChars,
  SmallLowercase,
} from "../date"
import Percentage from "./Marksheet/percentage"

export default function Home() {
  const [passwordlenghth, setpasswordlenghth] = useState(10)
  const [fpas, setfpas] = useState("")

  const [Uppercase, setUppercase] = useState(false)
  const [Lowercase, setLowercase] = useState(false)
  const [Numbers, setNumbers] = useState(false)
  const [SpecialChars, setSpecialChars] = useState(false)
  let passwordstring = ""
  let PasswordCreate = () => {
    if (Uppercase) {
      passwordstring += BigUppercase
    }
    if (Lowercase) {
      passwordstring += SmallLowercase
    }
    if (Numbers) {
      passwordstring += MathNumbers
    }
    if (SpecialChars) {
      passwordstring += OtherSpecialChars
    }

    let passwordLen = passwordstring.length
    let finalpassword = ""
    for (let i = 0; i < passwordlenghth; i++) {
      finalpassword += passwordstring[Math.floor(Math.random() * passwordLen)]
    }
    setfpas(finalpassword)
  }
  let copypassword = () => {
    if (fpas !== "") {
      navigator.clipboard.writeText(fpas)
      toast.success("copy password")
    } else {
      toast.error("please choice one check box")
    }
  }

  return (
    <>
      <Header />
      <div
        className="min-h-screen  bg-cover bg-center flex items-center justify-center mb-[100px] "
        style={{ backgroundImage: `url(${passwordimage})` }}
      >
        <div className="bg-[#8fbc8f] p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            Password Generator
          </h1>

          {/* Display Password */}
          <div className="mb-4 grid grid-cols-[85%_auto] border p-2">
            <input
              type="text"
              placeholder="password"
              value={fpas}
              className="w-full  rounded-md text-center bg-gray-50"
            />
            <span
              className="bg-[blue] text-white p-1 text-[20px] cursor-pointer hover:text-[red]"
              onClick={copypassword}
            >
              copy
            </span>
          </div>

          {/* Options */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Password Length:</label>
              <div className="grid grid-cols-[90%_auto]">
                <input
                  type="range"
                  min="1"
                  className="w-full"
                  value={passwordlenghth}
                  onChange={(e) => setpasswordlenghth(e.target.value)}
                />
                <input
                  type="text"
                  min="1"
                  className="w-full border"
                  value={passwordlenghth}
                  onChange={(e) => setpasswordlenghth(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-start">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={Uppercase}
                  onChange={() => setUppercase(!Uppercase)}
                  className="form-checkbox"
                />
                <span>Include Uppercase Letters</span>
              </label>
            </div>
            <div className="flex items-start">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={Lowercase}
                  onChange={() => setLowercase(!Lowercase)}
                  className="form-checkbox"
                />
                <span>Include Lowercase Letters</span>
              </label>
            </div>
            <div className="flex items-start">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={Numbers}
                  onChange={() => setNumbers(!Numbers)}
                  className="form-checkbox"
                />
                <span>Include Numbers</span>
              </label>
            </div>
            <div className="flex items-start">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={SpecialChars}
                  onChange={() => setSpecialChars(!SpecialChars)}
                  className="form-checkbox"
                />
                <span>Include Symbols</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <div className="mt-6">
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={PasswordCreate}
            >
              Generate Password
            </button>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <Percentage />
    </>
  )
}
