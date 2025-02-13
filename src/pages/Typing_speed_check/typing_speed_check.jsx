import React, { useState, useEffect } from "react"

const TypingSpeedTest = () => {
  const [text, setText] = useState("")
  const [input, setInput] = useState("")
  const [timeLeft, setTimeLeft] = useState(60)
  const [started, setStarted] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [wordsTyped, setWordsTyped] = useState(0)
  const [difficulty, setDifficulty] = useState("easy")

  const loremTexts = {
    easy: "       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum alias id eveniet, aliquam repudiandae ex ut ullam sapiente! Hic voluptatum illum corrupti maxime quia iure incidunt facere! Officiis, natus!",
    medium:
      "       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum alias id eveniet, aliquam repudiandae ex ut ullam sapiente! Hic voluptatum illum corrupti maxime quia iure incidunt facere! Officiis, natus!       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum alias id eveniet, aliquam repudiandae ex ut ullam sapiente! Hic voluptatum illum corrupti maxime quia iure incidunt facere! Officiis, natus!",
    hard: "       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum alias id eveniet, aliquam repudiandae ex ut ullam sapiente! Hic voluptatum illum corrupti maxime quia iure incidunt facere! Officiis, natus!       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum alias id eveniet, aliquam repudiandae ex ut ullam sapiente! Hic voluptatum illum corrupti maxime quia iure incidunt facere! Officiis, natus!",
  }

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
    if (timeLeft === 0) {
      calculateAccuracy()
      setStarted(false)
    }
  }, [started, timeLeft])

  const startTest = () => {
    setText(loremTexts[difficulty])
    setInput("")
    setTimeLeft(60)
    setStarted(true)
    setAccuracy(0)
    setWordsTyped(0)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)

    if (text.startsWith(value)) {
      setWordsTyped(value.split(" ").length - 1)
    }
  }

  const calculateAccuracy = () => {
    const textArray = text.split(" ")
    const inputArray = input.trim().split(" ")
    let correctWords = 0

    inputArray.forEach((word, index) => {
      if (word === textArray[index]) {
        correctWords++
      }
    })

    setAccuracy(((correctWords / textArray.length) * 100).toFixed(2))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Typing Speed Test</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setDifficulty("easy")}
              className={`px-4 py-2 rounded ${
                difficulty === "easy"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Easy
            </button>
            <button
              onClick={() => setDifficulty("medium")}
              className={`px-4 py-2 rounded ${
                difficulty === "medium"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => setDifficulty("hard")}
              className={`px-4 py-2 rounded ${
                difficulty === "hard"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Hard
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 text-lg">
            Time Left: <span className="font-bold">{timeLeft}s</span>
          </p>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-blue-500"
              style={{ width: `${((60 - timeLeft) / 60) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-800 text-lg font-medium mb-4 border-b pb-2">
            {text}
          </p>
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={input}
            onChange={handleChange}
            disabled={!started}
            placeholder="Start typing here..."
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={startTest}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={started}
          >
            Start Test
          </button>
          <div className="text-right">
            <p className="text-gray-700">
              Accuracy: <span className="font-bold">{accuracy}%</span>
            </p>
            <p className="text-gray-700">
              Words Typed: <span className="font-bold">{wordsTyped}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingSpeedTest
