import { useState, useCallback } from "react"
import { toast, ToastContainer } from "react-toastify"
import hastags from "../../assets/building-hashtag-concept-illustration_114360-7213.avif"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

const HashtagGenerator = () => {
  const location = useLocation()

  const [inputText, setInputText] = useState("")
  const [generatedHashtag, setGeneratedHashtag] = useState("")
  const [tradingHashtags, setTradingHashtags] = useState([
    "ReactJS",
    "React",
    "JavaScript",
    "Next.js",
    "Express",
    "Express.js",
    "MongoDB",
    "Node.js",
    "WebDevelopment",
    "FrontendDevelopment",
    "BackendDevelopment",
    "FullStack",
    "MVC",
    "ModelViewController",
    "Tailwind",
  ])

  const generateHashtag = useCallback(() => {
    const trimmedText = inputText.trim()
    if (!trimmedText) {
      setGeneratedHashtag("Please enter a phrase!")
      return
    }
    const words = trimmedText.split(/\s+/)
    const hashtags = words.map((word) => `#${word.replace(/#/g, "")}`).join(" ")
    setGeneratedHashtag(hashtags)
  }, [inputText])

  const copyHashtag = async () => {
    try {
      await navigator.clipboard.writeText(generatedHashtag)
      toast.success("Hashtags copied to clipboard!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } catch (error) {
      console.error("Failed to copy hashtags:", error)
      toast.error("Failed to copy hashtags. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }
  const resetHashtagsData = () => {
    setInputText("")
    setGeneratedHashtag("")
    setTradingHashtags([
      "ReactJS",
      "React",
      "JavaScript",
      "Next.js",
      "Express",
      "Express.js",
      "MongoDB",
      "Node.js",
      "WebDevelopment",
      "FrontendDevelopment",
      "BackendDevelopment",
      "FullStack",
      "MVC",
      "Model-View-Controller",
    ])
  }

  return (
    <>
      <div>
        {location.pathname === "/Hash-tag-Generator" ? <Header /> : null}
      </div>

      <div
        className="bg-gray-100 flex items-center justify-center min-h-screen p-4"
        style={{ backgroundImage: `url(${hastags})` }} // बैकग्राउंड इमेज सेट कर रहे हैं
      >
        <ToastContainer />

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            Hashtag Generator 🚀
          </h1>
          <div className="space-y-4">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your phrase..."
              className="w-full h-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              aria-label="Enter your phrase"
            />

            <button
              onClick={generateHashtag}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Generate Hashtag
            </button>
            <button
              onClick={resetHashtagsData}
              className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Reset Value
            </button>
            {generatedHashtag && (
              <div className="mt-4 text-center text-gray-700">
                {generatedHashtag}
              </div>
            )}
            {generatedHashtag &&
              generatedHashtag !== "Please enter a phrase!" && (
                <button
                  onClick={copyHashtag}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Copy Hashtag
                </button>
              )}
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Popular Hashtags</h2>
              <div className="flex flex-wrap gap-2">
                {tradingHashtags.map((hashtag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300"
                    onClick={() =>
                      setInputText((prev) => `${prev} ${hashtag}`.trim())
                    }
                    role="button"
                    tabIndex={0}
                    aria-label={`Add ${hashtag} to input`}
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HashtagGenerator
