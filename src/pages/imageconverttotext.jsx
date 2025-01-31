import React, { useState } from "react"
import Tesseract from "tesseract.js"

export default function ImageToText() {
  const [image, setImage] = useState(null)
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [language, setLanguage] = useState("eng")

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleConvert = async () => {
    if (!image) return
    setLoading(true)
    setText("")

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(image, language)
      setText(text)
    } catch (error) {
      setText("Error in conversion")
    }
    setLoading(false)
  }

  const handleReset = () => {
    setImage(null)
    setText("")
    setLoading(false)
    setLanguage("eng")
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Image to Text Converter</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 p-2 border rounded"
      />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="eng">English</option>
        <option value="hin">Hindi</option>
        <option value="eng+math">Math</option>
      </select>

      {image && (
        <img
          src={image}
          alt="Uploaded"
          className="w-64 h-auto mb-4 rounded shadow"
        />
      )}
      <div className="flex gap-5">
        <button
          onClick={handleConvert}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Processing..." : "Convert to Text"}
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {text && (
        <div className="mt-4 p-4 bg-white shadow rounded w-2/3">
          <h2 className="text-lg font-semibold">Extracted Text:</h2>
          <p className="text-gray-700 whitespace-pre-line">{text}</p>
        </div>
      )}
    </div>
  )
}
