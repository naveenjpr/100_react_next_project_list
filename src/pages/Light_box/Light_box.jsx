import React, { useState } from "react"

export default function LightBox() {
  const [isOpen, setIsOpen] = useState(false) // यह ट्रैक करता है कि लाइटबॉक्स खुला है या बंद।
  const [photoIndex, setPhotoIndex] = useState(0) // photoIndex: यह ट्रैक करता है कि कौन-सी इमेज अभी प्रदर्शित हो रही है।

  const images = [
    "https://img.freepik.com/free-vector/cute-cloud-raining-smile-cartoon-vector-icon-illustration-object-nature-icon-concept-isolated_138676-6538.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/cute-cat-wearing-hat-cartoon-vector-icon-illustration-animal-fashion-icon-concept-isolated_138676-6537.jpg",
    "https://img.freepik.com/free-vector/cute-bunny-eating-carrot-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated_138676-6536.jpg",
    "https://img.freepik.com/free-vector/cute-dog-bone-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated_138676-6535.jpg",
    "https://img.freepik.com/free-vector/cute-dog-bone-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated_138676-6535.jpg",
    "https://img.freepik.com/free-vector/weather-icons-collection_1234-53.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/weather-concept-illustration_114360-1189.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/cartoon-weather-symbol_29190-115.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
  ]

  let imageclick = (image, index) => {
    setPhotoIndex(index) // // क्लिक की गई इमेज का इंडेक्स सेट करें।
    setIsOpen(true) // Show the lightbox  लाइटबॉक्स को दिखाएं।
  }

  return (
    <>
      <div className="w-full min-h-screen relative">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mt-6 mb-6">
          LightBox Gallery <span className="text-blue-600">"इमेज गैलरी"</span>
        </h1>
        {/* BLACK SCREEN काला स्क्रीन */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 z-40 ${
            isOpen == true ? "block" : "hidden"
          }`}
        ></div>

        {/* CENTER OPTION सेंटर ऑप्शन */}
        <div
          className={`absolute top-1/2 left-1/2 bg-black p-2 sm:p-3 w-[90%] sm:w-[60%] h-[50%] sm:h-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50 ${
            isOpen == true ? "scale-100" : "scale-0"
          }`}
        >
          <img
            src={images[photoIndex]}
            alt={`Selected Image ${photoIndex + 1}`}
            className="w-full h-full rounded-md"
          />

          {/* Close Button */}
          <span
            className="absolute top-[-20px] right-[-5px] text-2xl sm:text-3xl cursor-pointer hover:text-blue-600 rounded-lg p-1 sm:p-2 bg-red-100 text-red-600 font-semibold shadow-lg transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsOpen(false)}
          >
            x
          </span>

          <div className="flex justify-between mt-4">
            {/* Previous Button */}
            <button
              className={`text-white p-3 sm:p-4 ${
                photoIndex > 0 ? "bg-black" : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => setPhotoIndex(photoIndex - 1)}
              disabled={photoIndex === 0}
            >
              Previous
            </button>
            <button
              className={`text-white p-3 sm:p-4 ${
                photoIndex < images.length - 1
                  ? "bg-black"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => setPhotoIndex(photoIndex + 1)}
              disabled={photoIndex === images.length - 1}
            >
              Next
            </button>
          </div>
        </div>

        <div className="max-w-full mx-auto border border-solid border-red p-2 sm:p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
            {/* Cards */}
            {images.map((v, i) => {
              return (
                <div
                  key={i}
                  className="w-full h-full overflow-hidden text-white rounded-md"
                  onClick={() => imageclick(v, i)}
                >
                  <img
                    src={v}
                    alt={`Image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
