import React, { useState } from "react";
import SEO from "../../Common page/SEO";

export default function Drag_drope() {
  // image ke liye state
  const [imageUrl, setImageUrl] = useState("../../imgi_1_LPT-LOGO-BLack-1.png");
  const [imageEditing, setImageEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const newUrl = URL.createObjectURL(file);
      setImageUrl(newUrl);
    }
  };

  return (
    <>
      <SEO
        title="Image Drag and Drop"
        description="Drag and drop images to upload"
      />

      <h1 className="text-[20px] font-bold text-center capitalize py-3">
        {" "}
        image Drag and Drop{" "}
      </h1>
      <header className="w-[100%] h-[80px] bg-slate-400  ">
        <nav className="flex justify-between items-center py-[10px] text-[black] font-bold gap-5 max-w-[1170px] mx-auto">
          <ul className="flex gap-5 items-center">
            <li>
              {imageEditing ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-[250px] h-[70px] border-2 border-dashed rounded-md flex items-center justify-center text-sm cursor-pointer
      ${isDragging ? "border-green-600 bg-green-100" : "border-gray-400 bg-white "}
    `}
                  onClick={() => document.getElementById("logoUpload").click()}
                >
                  <span className="text-center">
                    Drag & Drop Logo <br /> or Click to Upload
                  </span>

                  <input
                    id="logoUpload"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const newUrl = URL.createObjectURL(file);
                        setImageUrl(newUrl);
                      }
                    }}
                  />
                </div>
              ) : (
                <img
                  src={imageUrl}
                  className="min-w-[75px] max-w-[200px] min-h-[50px] max-h-[77px]"
                  alt="logo"
                />
              )}
            </li>

            <li>Our Courses</li>
            <li>Test Series</li>
            <li>Study Material</li>
            <li>Toppers</li>
            <li>Media</li>
            <li>About Us</li>
          </ul>
          <div>
            {imageEditing ? (
              <button
                className="text-[20px] font-bold bg-green-600 text-white px-3 py-2 rounded-md ml-3"
                onClick={() => setImageEditing(false)}
              >
                Save Logo
              </button>
            ) : (
              <button
                className="text-[20px] font-bold bg-red-600 text-white px-3 py-2 rounded-md ml-3"
                onClick={() => setImageEditing(true)}
              >
                Edit Logo
              </button>
            )}
          </div>

          {/* Menu Edit/Save */}
        </nav>
      </header>
    </>
  );
}
