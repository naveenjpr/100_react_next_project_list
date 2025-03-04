import React, { useState } from "react"
import {
  BigUppercase,
  MathNumbers,
  OtherSpecialChars,
  SmallLowercase,
} from "../../data.jsx"
import { ToastContainer, toast } from "react-toastify"
import passwordimage from "../../assets/passwordimage.jpg"
import Header from "../../Common page/Header.jsx"
import { useLocation } from "react-router-dom"

export default function Password() {
  const location = useLocation()

  const [passwordlenghth, setpasswordlenghth] = useState(10) // पासवर्ड की डिफॉल्ट लंबाई 10 सेट की गई है
  const [fpas, setfpas] = useState("") // जनरेट किया गया पासवर्ड स्टोर करने के लिए स्टेट

  // अलग-अलग टाइप के कैरेक्टर्स को शामिल करने के लिए स्टेट वेरिएबल्स
  const [Uppercase, setUppercase] = useState(false) // बड़े अक्षरों को शामिल करना या नहीं
  const [Lowercase, setLowercase] = useState(false) // छोटे अक्षरों को शामिल करना या नहीं
  const [Numbers, setNumbers] = useState(false) // संख्याएँ जोड़ना या नहीं
  const [SpecialChars, setSpecialChars] = useState(false) // स्पेशल कैरेक्टर्स जोड़ना या नहीं

  let passwordstring = "" // पासवर्ड बनाने के लिए कैरेक्टर का एक स्ट्रिंग
  let PasswordCreate = () => {
    if (Uppercase) {
      passwordstring += BigUppercase // अगर यूजर ने Uppercase चुना है तो स्ट्रिंग में जोड़ दो
    }
    if (Lowercase) {
      passwordstring += SmallLowercase // छोटे अक्षर जोड़ें
    }
    if (Numbers) {
      passwordstring += MathNumbers // नंबर जोड़ें
    }
    if (SpecialChars) {
      passwordstring += OtherSpecialChars // उपलब्ध कैरेक्टर सेट की लंबाई
    }

    let passwordLen = passwordstring.length
    let finalpassword = ""

    // पासवर्ड जेनरेट करने के लिए लूप

    for (let i = 0; i < passwordlenghth; i++) {
      finalpassword += passwordstring[Math.floor(Math.random() * passwordLen)]
    }
    setfpas(finalpassword) // तैयार पासवर्ड स्टेट में सेट करें
  }

  // पासवर्ड को क्लिपबोर्ड में कॉपी करने का फंक्शन
  let copypassword = () => {
    if (fpas !== "") {
      // अगर पासवर्ड जनरेट किया गया है तो ही कॉपी करें
      navigator.clipboard.writeText(fpas) // ब्राउज़र क्लिपबोर्ड पर कॉपी करें
      toast.success("Copy password") // सक्सेस मैसेज दिखाएँ
    } else {
      toast.error("Please choose at least one checkbox") // अगर कोई ऑप्शन सेलेक्ट नहीं किया तो एरर दें
    }
  }
  return (
    <>
      <div>{location.pathname === "/Password" ? <Header /> : null}</div>

      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center my-[100px]"
        style={{ backgroundImage: `url(${passwordimage})` }} // बैकग्राउंड इमेज सेट कर रहे हैं
      >
        <div className="bg-[#8fbc8f] p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            Password Generator
          </h1>

          {/* पासवर्ड डिस्प्ले करने वाला सेक्शन */}
          <div className="mb-4 grid grid-cols-[85%_auto] border p-2">
            <input
              type="text"
              placeholder="password"
              value={fpas}
              className="w-full rounded-md text-center bg-gray-50"
            />
            <span
              className="bg-[blue] text-white p-1 text-[20px] cursor-pointer hover:text-[red]"
              onClick={copypassword}
            >
              Copy
            </span>
          </div>

          {/* पासवर्ड सेटिंग्स (लंबाई और कैरेक्टर ऑप्शंस) */}
          <div className="space-y-4">
            {/* पासवर्ड लंबाई स्लाइडर */}
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

            {/* विभिन्न कैरेक्टर ऑप्शंस */}
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

          {/* पासवर्ड बनाने का बटन */}
          <div className="mt-6">
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={PasswordCreate}
            >
              Generate Password
            </button>
          </div>
        </div>

        {/* Toast Notifications */}
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
    </>
  )
}
