import React, { useState } from "react";

const wheelSegments = [
  { icon: "⭐", color: "#f57c00", degree: 0 },
  { icon: "💡", color: "#d32f2f", degree: 60 },
  { icon: "🔔", color: "#388e3c", degree: 120 },
  { icon: "🍑", color: "#1976d2", degree: 180 },
  { icon: "🧡", color: "#fbc02d", degree: 240 },
  { icon: "😎", color: "#263238", degree: 300 },
];

export default function SpinTheWheel() {
  const [rotate, setRotate] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const letsSpin = () => {
    if (spinning) return;
    setSpinning(true);
    const randomDeg = Math.floor(3000 + Math.random() * 3000);
    setRotate(prev => prev + randomDeg);
    setTimeout(() => setSpinning(false), 4000);
  };

  const wheelBackground = `conic-gradient(
    ${wheelSegments.map((seg, idx) => 
      `${seg.color} ${idx * 60}deg ${(idx + 1) * 60}deg`
    ).join(", ")}
  )`;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative w-[500px] h-[500px]">
        {/* Arrow Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-red-600" />
        </div>

        {/* Wheel */}
        <div
          className="w-full h-full rounded-full border-8 border-white shadow-lg transition-all duration-[4000ms] ease-out relative overflow-hidden"
          style={{
            transform: `rotate(${rotate}deg)`,
            background: wheelBackground,
          }}
        >
          {/* Segments and Icons */}
          {wheelSegments.map((seg, idx) => {
            const angle = idx * 60 + 30; // Center of each segment
            return (
              <div 
                key={idx}
                className="absolute top-1/2 left-1/2 origin-bottom h-1/2 flex flex-col items-center"
                style={{
                  transform: `rotate(${angle}deg) translateY(-20px)`,
                  width: '40px'
                }}
              >
                <div className="text-4xl transform -rotate-[${angle}deg] mb-1">
                  {seg.icon}
                </div>
                <div className="text-xs font-bold text-white bg-black/30 px-1 rounded transform -rotate-[${angle}deg]">
                  {seg.degree}°
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Button */}
        <button
          onClick={letsSpin}
          disabled={spinning}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white border-2 border-gray-300 shadow-md hover:scale-105 active:scale-95 transition-all font-bold text-gray-800 flex items-center justify-center"
        >
          {spinning ? '...' : 'SPIN'}
        </button>

        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-white border-4 border-gray-300" />
      </div>
    </div>
  );
}