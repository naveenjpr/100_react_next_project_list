import React, { useState, useEffect } from "react"

const TypingSpeedTest = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Typing Speed Test</h1>
          <div className="flex space-x-2">
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 text-lg">
            Time Left: <span className="font-bold">s</span>
          </p>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-blue-500"></div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-800 text-lg font-medium mb-4 border-b pb-2"></p>
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Start typing here..."
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Start Test
          </button>
          <div className="text-right">
            <p className="text-gray-700">Accuracy:</p>
            <p className="text-gray-700">Words Typed:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingSpeedTest
