import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Cropper from "react-easy-crop";

export default function ImageCrop() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState(
    "https://user-images.githubusercontent.com/2678610/41561426-365e7a44-734a-11e8-8e0e-1c04251f53e4.gif"
  );

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  const [openCrop, setOpenCrop] = useState(false);

  let getCroppedImg = () => {
    console.log("Crop apply ho gaya");
    setOpenCrop(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setOpenCrop(true);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full min-h-screen mx-auto bg-slate-400">
      {/* Main image block */}
      <div className="max-w-[700px] mx-auto py-[100px]">
        <div className="w-full relative">
          <div className="w-full relative group">
            <img
              src="https://camo.githubusercontent.com/a5a2527c6f69bd8ed77139b07c73b26927393a4ec71c6cb95486c5571c62a556/68747470733a2f2f6e706d696e7369676874732e76657263656c2e6170702f6170692f7061636b6167652f726561646d652d696d6167652f72656163742d656173792d63726f703f763d323032332d30322d3232"
              alt=""
              className="w-full border-[solid] border-4 border-white"
            />

            {/* Main Image Upload - YEH CORRECT HAI */}
            <label
              htmlFor="main-image-upload"
              className="absolute bottom-[30px] text-[25px] right-4 cursor-pointer group-hover:text-white"
            >
              <FaCamera />
            </label>
            <input
              id="main-image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <div className="w-[300px] h-[150px] absolute bottom-[-20px] left-[-150px] border-[solid] border-4 border-white">
            <div className="w-full h-full relative group">
              <img
                src="https://user-images.githubusercontent.com/2678610/41561426-365e7a44-734a-11e8-8e0e-1c04251f53e4.gif"
                alt=""
                className="w-full h-full"
              />

              {/* Thumbnail Image Upload - YEH CORRECT HAI */}
              <label
                htmlFor="thumb-image-upload"
                className="absolute bottom-2 right-4 cursor-pointer group-hover:text-white"
              >
                <FaCamera />
              </label>
              <input
                id="thumb-image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Crop Modal */}
      {openCrop && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-xl max-w-[90vw] w-[500px] h-[400px] flex flex-col gap-4">
            <div className="relative flex-1">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={getCroppedImg}
                className="bg-blue-600 text-white py-2 px-4 rounded flex-1"
              >
                Apply Crop
              </button>
              <button
                onClick={function () {
                  setOpenCrop(false);
                }}
                className="bg-gray-600 text-white py-2 px-4 rounded flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
