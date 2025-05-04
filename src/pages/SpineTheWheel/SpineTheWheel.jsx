import React, { useState } from "react";

export default function SpinTheWheel() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative w-[500px] h-[500px] bg-gray-600 rounded-[50%] ">
        {/* middle circle start */}
        <div className="w-[50px] h-[50px] rounded-[50%] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[999]">
          
        </div>
        {/* middle circle End */}
        {/* slice start */}
        {/* Slice 1 (0°) */}
        <div className="w-full h-[100px] absolute top-1/2 left-0 transform -translate-y-1/2 rotate-0">
          <div className="absolute left-0 w-1/2 h-[50%] bg-blue-100 flex items-center justify-start pl-2">
            <span className="text-sm text-black">hello 1</span>
          </div>
          <div className="absolute right-0 w-1/2 h-[50%] bg-sky-500 flex items-center justify-end pr-2">
            <span className="text-sm text-white">hello 2</span>
          </div>
        </div>

        {/* Slice 2 (45°) */}
        <div className="w-full absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45">
          <div className="absolute left-0 w-1/2 h-[2px] bg-blue-200 flex items-center justify-start pl-2">
            <span className="text-sm text-black">hello 3</span>
          </div>
          <div className="absolute right-0 w-1/2 h-[2px] bg-red-900 flex items-center justify-end pr-2">
            <span className="text-sm text-white">hello 4</span>
          </div>
        </div>

        {/* Slice 3 (90°) */}
        <div className="w-full absolute top-1/2 left-0 transform -translate-y-1/2 rotate-90">
          <div className="absolute left-0 w-1/2 h-[2px] bg-blue-300 flex items-center justify-start pl-2">
            <span className="text-sm text-black">hello 5</span>
          </div>
          <div className="absolute right-0 w-1/2 h-[2px] bg-red-500 flex items-center justify-end pr-2">
            <span className="text-sm text-white">hello 6</span>
          </div>
        </div>

        {/* slice end */}
      </div>
    </div>
  );
}
// { color: '#ffcc00', text: 'Gift', rotate: 0 },
// { color: '#2c3e50', text: 'No Prize', rotate: 45 },
// { color: '#00ff73', text: 'YES Prize', rotate: 90 },
// { color: '#e74c3c', text: 'No Prize', rotate: 135 },
// { color: '#f1c40f', text: 'Gift', rotate: 180 },
// { color: '#2ecc71', text: 'YES Prize', rotate: 225 },
// { color: '#1abc9c', text: 'Come back', rotate: 270 },
// { color: '#3498db', text: 'No Prize', rotate: 315 },
