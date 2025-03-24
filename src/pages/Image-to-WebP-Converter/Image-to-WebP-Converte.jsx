import { useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

function ImageToWebPConverter() {
  const [quality, setQuality] = useState(0.5)
  const [previewImages, setPreviewImages] = useState([])
  const [convertedImages, setConvertedImages] = useState([])
  const fileInputRef = useRef(null)
  const location = useLocation()

  const handleQualityChange = (e) => {
    setQuality(parseFloat(e.target.value))
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    if (files.length === 0) return

    const previews = []
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        previews.push(event.target.result)
        if (previews.length === files.length) {
          setPreviewImages(previews)
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const handleConvert = () => {
    const files = fileInputRef.current.files
    if (files.length === 0) {
      alert("Please select at least one image file.")
      return
    }

    const converted = []
    Array.from(files).forEach((file, index) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement("canvas")
          canvas.width = img.width
          canvas.height = img.height

          const ctx = canvas.getContext("2d")
          ctx.drawImage(img, 0, 0)

          canvas.toBlob(
            (blob) => {
              const url = URL.createObjectURL(blob)
              converted.push({
                url,
                name: `converted_${index + 1}.webp`,
              })

              if (converted.length === files.length) {
                setConvertedImages(converted)
              }
            },
            "image/webp",
            quality
          )
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
    })
  }
  let resetallvalue = () => {
    setQuality(0.5)
    setPreviewImages([])
    setConvertedImages([])
  }

  return (
    <>
      <div>{location.pathname === "/Image-to-WebP-Converte" ? <Header /> : null}</div>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Image to WebP Converter</h1>

          {/* File Input (Multiple) */}
          <div className="">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="mb-4"
            />
          </div>

          {/* Quality Slider */}
          <div className="mb-4">
            <label
              htmlFor="quality"
              className="block text-sm font-medium text-gray-700"
            >
              Quality (0.1 - 1.0):
            </label>
            <input
              type="range"
              id="quality"
              min="0.1"
              max="1.0"
              step="0.1"
              value={quality}
              onChange={handleQualityChange}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{quality}</span>
          </div>

          {/* Convert Button */}
          <div className="flex gap-5">
            <button
              onClick={handleConvert}
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
              Convert to WebP
            </button>
            <button
              className="bg-[red] text-white px-4 py-2 rounded mb-4"
              onClick={resetallvalue}
            >
              reset
            </button>
          </div>

          {/* Image Previews */}
          {previewImages.length > 0 && (
            <div className="mb-4 grid grid-cols-6 h-[50px] gap-2">
              {previewImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          )}

          {/* Output Section */}
          <div className="mt-4">
            {convertedImages.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image.url}
                  alt="Converted Image"
                  className="max-w-full h-auto rounded-lg shadow-md mb-2"
                />
                <a
                  href={image.url}
                  download={image.name}
                  className="text-blue-500 underline block"
                >
                  Download WebP {index + 1}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageToWebPConverter
