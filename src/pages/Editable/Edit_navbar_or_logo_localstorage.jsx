import React, { useState, useEffect } from "react";
import { IoPencilOutline } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";

export default function Edit_navbar_or_logo_localstorage() {
  // menu items state
  const [menuItems, setMenuItems] = useState([
    "Our Courses",
    "Test Series",
    "Study Material",
    "Toppers",
    "Media",
    "About Us",
  ]);
  const [isEditing, setIsEditing] = useState(false);

  // logo image state
  const [imageUrl, setImageUrl] = useState("../../imgi_1_LPT-LOGO-BLack-1.png");
  const [imageEditing, setImageEditing] = useState(false);

  // ⬇️ LocalStorage se data load karna on mount
  useEffect(() => {
    const storedMenu = localStorage.getItem("menuItems");
    const storedLogo = localStorage.getItem("logoUrl");

    if (storedMenu) {
      setMenuItems(JSON.parse(storedMenu));
    }
    if (storedLogo) {
      setImageUrl(storedLogo);
    }
  }, []);

  // ⬇️ Menu update hone pe localStorage me save
  const handleChange = (e, index) => {
    const newItems = [...menuItems];
    newItems[index] = e.target.value;
    setMenuItems(newItems);
    localStorage.setItem("menuItems", JSON.stringify(newItems));
  };

  // ⬇️ Logo file change hone pe localStorage me save
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // File ko Base64 me convert karenge taaki localStorage me save ho sake
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        setImageUrl(base64data);
        localStorage.setItem("logoUrl", base64data);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="w-[100%] h-[80px] bg-slate-400 ">
      <nav className="flex justify-between items-center py-[10px] text-black font-bold gap-5 max-w-[1170px] mx-auto">
        <ul className="flex gap-5 items-center">
          <li className="relative">
            {imageEditing ? (
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="border px-2 py-1 rounded w-[250px]"
              />
            ) : (
              imageUrl && (
                <img src={imageUrl} className="w-[120px] h-[50px]" alt="logo" />
              )
            )}

            <span className="absolute top-[-15px] right-[-10px]">
              {imageEditing ? (
                <IoIosSave
                  className="cursor-pointer text-[green]"
                  onClick={() => setImageEditing(false)}
                />
              ) : (
                <IoPencilOutline
                  className="cursor-pointer text-[red]  "
                  onClick={() => setImageEditing(true)}
                />
              )}
            </span>
          </li>

          {menuItems.map((item, index) => (
            <li key={index} className="w-auto">
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleChange(e, index)}
                  className="w-[100%]"
                />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>

        {/* Menu Edit/Save */}
        <div>
          {isEditing ? (
            <button
              className="text-[10px] font-bold bg-green-600 text-white px-1 py-1 rounded-md ml-3 w-auto"
              onClick={() => setIsEditing(false)}
            >
              Save Menu
            </button>
          ) : (
            <button
              className="text-[10px] font-bold bg-red-600 text-white px-1 py-1 rounded-md ml-3"
              onClick={() => setIsEditing(true)}
            >
              Edit Menu
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
