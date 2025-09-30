import React from "react";
import { useState } from "react";

export default function Editable_navbar() {
  const [menuItems, setMenuItems] = useState([
    "Our Courses",
    "Test Series",
    "Study Material",
    "Toppers",
    "Media",
    "About Us",
  ]);
    const [isEditing, setIsEditing] = useState(false); // navbar edit ke liye jo li me hai

    let handleChange=(e,index)=>{
    const newItems = [...menuItems];
    newItems[index] = e.target.value;
    setMenuItems(newItems);

    }


    

  return (
    <>
      <header className="w-[100%] h-[80px] bg-slate-400 ">
        <nav className="flex justify-between items-center py-[10px] text-[black] font-bold gap-5 max-w-[1170px] mx-auto">
          <ul className="flex gap-5 items-center">
            <li>
              <img
                src="../../imgi_1_LPT-LOGO-BLack-1.png"
                className="w-[120px] h-[50px]"
                alt=""
              />
            </li>

      {menuItems.map((item, index) => (
            <li key={index}>
              {isEditing ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e)=>handleChange(e, index)

                  }
                  className="w-[100%]"
                />
              ) : (
                item
              )}
            </li>
          ))}
          </ul>
          <div>
            <button className="bg-[blue] text-[white] px-3 py-2 rounded-md">
              Login
            </button>
            <button className="bg-[green] text-[white] px-3 py-2 rounded-md ml-3">
              Register
            </button>
          </div>
         
        {/* Edit / Save Buttons */}
        <div>
          {isEditing ? (
            <button
              className="text-[20px] font-bold bg-green-600 text-white px-3 py-2 rounded-md ml-3"
              onClick={() => setIsEditing(false)}
            >
              Save
            </button>
          ) : (
            <button
              className="text-[20px] font-bold bg-red-600 text-white px-3 py-2 rounded-md ml-3"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
        </nav>
      </header>
      //second edit logic
     
    </>
  );
}
//
