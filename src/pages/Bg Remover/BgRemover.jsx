import React, { useState, useRef } from "react";
import * as bodyPix from "@tensorflow-models/body-pix";
import "@tensorflow/tfjs";

const BgRemover = () => {
  const [image, setImage] = useState(null);
  const [bgImage, setBgImage] = useState(null);
  const [predefinedBg, setPredefinedBg] = useState("none");
  const [bgColor, setBgColor] = useState("#ffffff"); // Default white
  const [isProcessed, setIsProcessed] = useState(false);
  const canvasRef = useRef(null);

  const resetAll = () => {
    setImage(null);
    setBgImage(null);
    setPredefinedBg("none");
    setBgColor("#ffffff");
    setIsProcessed(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleImageUpload = (event, setImageFunction) => {
    const file = event.target.files[0];
    if (file) {
      setImageFunction(URL.createObjectURL(file));
      setIsProcessed(false);
    }
  };

  const processImage = async () => {
    if (!image) {
      alert("Please select an image!");
      return;
    }

    const img = new Image();
    img.src = image;

    let bgImg = null;
    if (bgImage) {
      bgImg = new Image();
      bgImg.src = bgImage;
    } else if (predefinedBg !== "none" && predefinedBg !== "color") {
      bgImg = new Image();
      bgImg.src = `https://source.unsplash.com/800x600/?${predefinedBg}`;
    }

    img.onload = async () => {
      if (bgImg) {
        bgImg.onload = () => drawCanvas(img, bgImg);
      } else {
        drawCanvas(img, null);
      }
    };
  };

  const drawCanvas = async (img, bgImg) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;

    const net = await bodyPix.load();
    const segmentation = await net.segmentPerson(img);

    const offCanvas = document.createElement("canvas");
    const offCtx = offCanvas.getContext("2d");
    offCanvas.width = img.width;
    offCanvas.height = img.height;

    offCtx.drawImage(img, 0, 0);
    const imageData = offCtx.getImageData(0, 0, img.width, img.height);
    const pixel = imageData.data;

    for (let i = 0; i < pixel.length; i += 4) {
      if (segmentation.data[i / 4] === 0) {
        pixel[i + 3] = 0;
      }
    }

    offCtx.putImageData(imageData, 0, 0);

    // Apply solid color background if selected
    if (predefinedBg === "color") {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (bgImg) {
      ctx.drawImage(bgImg, 0, 0, img.width, img.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    ctx.drawImage(offCanvas, 0, 0);
    setIsProcessed(true);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "background_removed.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Background Remover</h1>

      <label className="font-semibold">Upload Image:</label>
      <input
        type="file"
        accept="image/*"
        className="mb-2"
        onChange={(e) => handleImageUpload(e, setImage)}
      />
      {image && (
        <img
          src={image}
          className="mt-2 w-40 h-auto rounded shadow-md border"
          alt="Uploaded"
        />
      )}

      {/* Background Selection */}
      <label className="font-semibold mt-4">
        Choose a Background (Optional):
      </label>
      <select
        className="mb-2 p-2 border rounded"
        onChange={(e) => setPredefinedBg(e.target.value)}
        value={predefinedBg}
      >
        <option value="none">None (Keep Transparent)</option>
        <option value="color">Solid Color</option>
        {/* <option value="nature">Nature</option>
        <option value="city">City</option>
        <option value="space">Space</option> */}
      </select>

      {/* Color Picker for Solid Color Background */}
      {predefinedBg === "color" && (
        <input
          type="color"
          value={bgColor}
          className="mt-2 border border-[solid] border-[black] w-[100px] h-[50px] rounded p-1"
          onChange={(e) => setBgColor(e.target.value)}
        />
      )}

      {/* Show Upload Background option ONLY if "None" is selected */}
      {predefinedBg === "none" && (
        <>
          <label className="font-semibold">Or Upload Your Own Background:</label>
          <input
            type="file"
            accept="image/*"
            className="mb-2"
            onChange={(e) => handleImageUpload(e, setBgImage)}
          />
          {bgImage && (
            <img
              src={bgImage}
              className="mt-2 w-40 h-auto rounded shadow-md border"
              alt="Background Preview"
            />
          )}
        </>
      )}

      <div className="flex gap-4 mt-4">
        <button
          onClick={processImage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Remove Background
        </button>
        <button
          onClick={resetAll}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Preview:</h2>
        <canvas
          ref={canvasRef}
          className="mt-2 rounded shadow-md max-w-full"
        ></canvas>
      </div>

      {isProcessed && (
        <button
          onClick={downloadImage}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Download Image
        </button>
      )}
    </div>
  );
};

export default BgRemover;
