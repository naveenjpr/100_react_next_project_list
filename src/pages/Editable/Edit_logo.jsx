import React, { useState } from "react";

export default function Edit_logo() {
 



  // image ke liye state
  const [imageUrl, setImageUrl] = useState("../../imgi_1_LPT-LOGO-BLack-1.png");
  const [imageEditing, setImageEditing] = useState(false);
  return (
    <header className="w-[100%] h-[80px] bg-slate-400  ">
      <nav className="flex justify-between items-center py-[10px] text-[black] font-bold gap-5 max-w-[1170px] mx-auto">
        <ul className="flex gap-5 items-center">
          <li>
            {imageEditing ? (
              <input
                type="file"
                m
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0]; // pehla file object
                  if (file) {
                    const newUrl = URL.createObjectURL(file); // temporary URL
                    setImageUrl(newUrl);
                  }
                }}
                className="border px-2 py-1 rounded w-[250px]"
              />
            ) : (
              <img src={imageUrl} className="w-[120px] h-[50px]" alt="logo" />
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
  );
}
