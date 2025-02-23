import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify" // ✅ Import toast
import "react-toastify/dist/ReactToastify.css" // ✅ Import styles
import Tesseract from "tesseract.js"

export default function ImageToText() {
  const [image, setImage] = useState(null) // इमेज स्टोर करने के लिए
  const [text, setText] = useState("") // इमेज से निकला हुआ टेक्स्ट स्टोर करने के लिए
  const [loading, setLoading] = useState(false) // लोडिंग स्टेट को ट्रैक करने के लिए
  const [language, setLanguage] = useState("eng") // डिफॉल्ट भाषा इंग्लिश सेट की गई है

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file) // इमेज का URL बनाना
      setImage(imageUrl) // स्टेट में सेट करना
    }
  }

  const handleConvert = async () => {
    if (!image) return // यदि इमेज नहीं है, तो फ़ंक्शन रोक दें
    setLoading(true) // लोडिंग स्टेट को `true` करें
    setText("") // पहले से मौजूद टेक्स्ट को क्लियर करें

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(image, language, {
        logger: (m) => console.log(m), // प्रोसेस की प्रगति (progress) दिखाने के लिए
      })
      setText(text) // टेक्स्ट को स्टेट में सेट करें
    } catch (error) {
      console.error("Error during OCR:", error)
      setText("Error in conversion") // यदि कोई एरर आए, तो यूज़र को बताएं
    } finally {
      setLoading(false) // लोडिंग खत्म होने के बाद `false` कर दें
    }
  }

  const copypassword = () => {
    if (text.trim() !== "") {
      navigator.clipboard.writeText(text) // टेक्स्ट क्लिपबोर्ड में कॉपी करें
      toast.success("✅ Text copied to clipboard!") // सफल होने पर नोटिफिकेशन दिखाएं
    } else {
      toast.error("❌ No text available to copy.") // यदि कोई टेक्स्ट नहीं है, तो एरर दिखाएं
    }
  }

  const handleReset = () => {
    setImage(null)
    setText("")
    setLoading(false)
    setLanguage("eng")

    const fileInput = document.getElementById("fileInput")
    if (fileInput) {
      fileInput.value = "" // फाइल इनपुट को भी रीसेट करें
    }
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Image to Text Converter</h1>
      <input
        id="fileInput" // ✅ Add an ID
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
        <div className="mt-4 p-4 bg-white shadow rounded w-full md:w-2/3 relative">
          <button
            className="mt-3 px-3 py-1 absolute top-0 right-0 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={copypassword}
          >
            Copy Text
          </button>
          <h2 className="text-lg font-semibold">Extracted Text:</h2>
          <p className="text-gray-700 whitespace-pre-line">{text}</p>
        </div>
      )}
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
      />{" "}
    </div>
  )
}
