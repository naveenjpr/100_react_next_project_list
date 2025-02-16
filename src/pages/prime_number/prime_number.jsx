import React, { useState } from "react"
import primeNumber from "../../assets/primeNumber.jpg"

export default function PrimeNumber() {
  const [Input, setInput] = useState("")
  const [Prime, setPrime] = useState("")

  let handleCheck = () => {
    var midlevalue = parseInt(Input / 2)
    let primeNumberstatus = 0
    for (var i = 2; i <= midlevalue; i++) {
      if (Input % 2 == 0) {
        primeNumberstatus = 1
      }
    }

    if (primeNumberstatus == 0) {
      setPrime("prime")
    } else {
      setPrime("Not prime number")
    }
  }
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center max-w-full flex flex-col items-center justify-center bg-gray-100 my-[20px] p-4"
        style={{ backgroundImage: `url(${primeNumber})` }}
      >
        <div className="w-full max-w-md bg-[gold] shadow-lg rounded-lg p-6">
          <h1 className="md:text-2xl text-[15px] font-bold text-center mb-4">
            Prime Number Checker <br />
            (अभाज्य संख्या चेकर )
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[10px]">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a number"
              value={Input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a number"
              value={Prime}
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={handleCheck}
          >
            Check
          </button>
          <p className="text-left text-[red] text-[12px] my-[10px] border-y-[2px] border-black ">
            "*" वे 1 से बड़ी [प्राकृतिक संख्याएँ], जो स्वयं और 1 के अतिरिक्त और
            किसी प्राकृतिक संख्या से विभाजित नहीं होतीं, उन्हें 'अभाज्य संख्या'
            कहते हैं
            <br />
            (Those [natural numbers] greater than 1, which are not divisible by
            any natural number other than itself and 1, are called 'prime
            numbers' )
          </p>
          <p className="text-[blue] text-[15px]">
            some prime numbers example 1 to 100 can be listed as, 2, 3, 5, 7,
            11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
            79, 83, 89, 97.
          </p>
        </div>
      </div>
    </>
  )
}
