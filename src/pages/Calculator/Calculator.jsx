import React, { useState } from "react"
import calculatorset from "../../assets/calculator.jpg"

const Calculator = () => {
  const [Calculator, setCalculator] = useState("")
  let opr = ["+", "-", "×", "÷", "."]

  let handleData = (e) => {
    let lastChar = Calculator[Calculator.length - 1]
    let lastCharRemoveData = Calculator.slice(0, -1)

    if (e.target.tagName === "BUTTON") {
      if (
        Calculator === "" &&
        (e.target.innerText === "×" ||
          e.target.innerText === "÷" ||
          e.target.innerText === "." ||
          e.target.innerText === "+" ||
          e.target.innerText === "=")
      ) {
        console.log("First character cannot be ×,+, ÷, ., or =")
        return
      }

      if (
        (Calculator === "0" || Calculator === "00") &&
        ![".", "+", "-", "×", "÷"].includes(e.target.innerText)
      ) {
        setCalculator(e.target.innerText)
        return
      }

      if (e.target.innerText === "=") {
        if (opr.includes(lastChar)) {
          console.log("Cannot evaluate, expression ends with an operator.")
          return
        }
        let data = Calculator.replaceAll("×", "*").replaceAll("÷", "/")
        try {
          let result = eval(data)
          if (isFinite(result)) {
            setCalculator(result.toString())
          } else {
            setCalculator("Error")
          }
        } catch (error) {
          setCalculator("Error")
          console.error("Invalid expression:", error)
        }
        return
      }

      if (e.target.innerText === "C") {
        setCalculator("")
        return
      }

      if (e.target.innerText === "s") {
        setCalculator(lastCharRemoveData)
        return
      }

      if (e.target.innerText === "%") {
        if (!isNaN(parseFloat(Calculator)) && isFinite(Calculator)) {
          setCalculator((parseFloat(Calculator) / 100).toString())
        } else {
          console.log("Invalid input for percentage calculation.")
        }
        return
      }

      if (opr.includes(e.target.innerText) && opr.includes(lastChar)) {
        setCalculator(lastCharRemoveData + e.target.innerText)
      } else {
        if (Calculator === "0") {
          if (e.target.innerText !== "0" && e.target.innerText !== ".") {
            setCalculator(e.target.innerText)
          }
        } else {
          setCalculator(Calculator + e.target.innerText)
        }
      }
    }
  }

  return (
    <>
  <div
  className="w-full min-h-screen bg-slate-400 bg-cover bg-center"
  style={{ backgroundImage: `url(${calculatorset})` }}
>
  {/* Your content here */}
  <div className="w-full sm:max-w-[100%] md:max-w-md mx-auto">
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-full bg-[#5f9ea0] rounded-2xl shadow-lg p-5"
        onClick={handleData}
      >
        <h1 className="text-center uppercase sm:text-[25px] text-[10px] text-white">calculator</h1>

        <div className="md:mb-4 mb-1">
          <input
            type="text"
            className="w-full text-right bg-gray-50 text-2xl font-semibold rounded-md md:p-3 p-1 focus:outline-none"
            value={Calculator}
            readOnly
          />
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {/* Row 1 */}
          <button className="bg-gray-200 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-300">
            C
          </button>
          <button className="bg-gray-200 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-300">
            s
          </button>
          <button className="bg-gray-200 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-300">
            %
          </button>
          <button
            className="bg-orange-500 text-white text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-orange-600"
            value="÷"
          >
            ÷
          </button>

          {/* Row 2 */}
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            7
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            8
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            9
          </button>
          <button
            className="bg-orange-500 text-white text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-orange-600"
            value="x"
          >
            ×
          </button>

          {/* Row 3 */}
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            4
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            5
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            6
          </button>
          <button className="bg-orange-500 text-white text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-orange-600">
            -
          </button>

          {/* Row 4 */}
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            1
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            2
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            3
          </button>
          <button className="bg-orange-500 text-white text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-orange-600">
            +
          </button>

          {/* Row 5 */}
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            00
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            0
          </button>
          <button className="bg-gray-100 text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-gray-200">
            .
          </button>
          <button className="bg-orange-500 text-white text-lg font-bold p-2 sm:p-3 rounded-lg hover:bg-orange-600">
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Calculator
