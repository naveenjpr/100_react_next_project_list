import React from "react";

const topAchievers = [
  {
    name: "priyanshu sharma",
    percentage: "98.00%",
    image: "/YOGESHSCHOOL/three.jpeg",
  },
  {
    name: "lakshita ",
    percentage: "95%",
    image: "/YOGESHSCHOOL/eleven.jpeg",
  },
  {
    name: "shiv kumar",
    percentage: "92%",
    image: "/YOGESHSCHOOL/one.jpeg",
  },
];

const students = [
  // { name: "JALAJ", percentage: "96.67%", image: "/YOGESHSCHOOL/one.jpeg" },
  { name: "prince sharma", percentage: "91%", image: "/YOGESHSCHOOL/two.jpeg" },
  // { name: "JALAJ", percentage: "96.67%", image: "/YOGESHSCHOOL/three.jpeg" },
  { name: "papri", percentage: "80%", image: "/YOGESHSCHOOL/four.jpeg" },
  { name: "raghav", percentage: "89%", image: "/YOGESHSCHOOL/five.jpeg" },
  { name: "dimpy", percentage: "86%", image: "/YOGESHSCHOOL/six.jpeg" },
  { name: "ragini", percentage: "76%", image: "/YOGESHSCHOOL/seven.jpeg" },
  { name: "ekta", percentage: "78%", image: "/YOGESHSCHOOL/eight.jpeg" },
  { name: "jara", percentage: "76%", image: "/YOGESHSCHOOL/nine.jpeg" },
  { name: "rishika", percentage: "86%", image: "/YOGESHSCHOOL/ten.jpeg" },
  // { name: "eleven", percentage: "90%", image: "/YOGESHSCHOOL/eleven.jpeg" },
];

export default function Insurance() {
  return (
    <div className="w-full bg-slate-100 min-h-screen py-10 px-2 flex justify-center items-center font-sans">
      <div className="max-w-[850px] w-full bg-[#fdf200] border-4 border-yellow-500 shadow-2xl relative overflow-hidden flex flex-col ring-8 ring-pink-400">

        {/* Header Section */}
        <div className="bg-[#0b1f64] text-white py-5 px-6 mx-2 mt-2 flex flex-col items-center justify-center border-b-2 border-white shadow-xl">
          <div className="flex items-center gap-4 w-full justify-between">
            <div className="hidden md:flex w-16 h-16 bg-white rounded-full items-center justify-center shadow-inner border-2 border-yellow-400">
              <span className="text-blue-900 font-black text-xs text-center leading-tight">GURU<br />LOG</span>
            </div>
            <div className="flex flex-col items-center text-center flex-1">
              <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight leading-none drop-shadow-lg text-white uppercase">
                GURU CLASSES JAIPUR
              </h1>
              <h2 className="text-lg md:text-3xl font-bold tracking-widest mt-2 text-yellow-300 drop-shadow-md">
                10th BOARD RESULT-2026
              </h2>
            </div>
            <div className="hidden md:flex w-16 h-16 bg-white rounded-full items-center justify-center shadow-inner border-2 border-yellow-400">
              <span className="text-blue-900 font-black text-xs text-center leading-tight">2026<br />TOP</span>
            </div>
          </div>
        </div>

        {/* Congratulations Banner */}
        <div className="flex flex-col items-center mt-8 text-center px-4">
          <h3 className="text-5xl md:text-7xl font-serif italic font-black text-green-700 leading-tight drop-shadow-sm">
            Congratulations
          </h3>
          <div className="flex flex-col items-center mt-3 space-y-1">
            <span className="text-red-700 text-lg md:text-2xl font-bold italic">To All Parents</span>
            <span className="text-blue-900 text-xl md:text-3xl font-black tracking-tight">Students, Teachers</span>
            <span className="text-pink-600 text-lg md:text-2xl font-bold italic">And Staff For</span>
            <span className="text-red-600 text-xl md:text-3xl font-black uppercase mt-1">Outstanding Results</span>
          </div>
        </div>

        {/* Top Three Achievers */}
        <div className="flex justify-center items-center mt-10 px-6 gap-4 md:gap-10">
          {topAchievers.map((topper, idx) => (
            <div key={idx} className={`flex flex-col items-center group ${idx === 1 ? 'transform -translate-y-4 scale-110 z-10' : ''}`}>
              <div className=" ">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-56 object-cover rounded-full"
                />
              </div>
              <div className="mt-2 w-3 h-3 rounded-full  shadow-sm flex flex-col items-center justify-center mt-4 capitalize">
                <span className="text-blue-900 font-black text-xs text-center leading-tight">{topper.name}</span>
                <span className="text-blue-900 font-black text-xs text-center leading-tight">{topper.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievers Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-10 gap-x-4 mt-12 px-8 pb-10">
          {students.map((student, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 object-cover rounded-full"
                />
              </div>
              <div className="mt-2 w-3 h-3 rounded-full  shadow-sm flex flex-col items-center justify-center mt-4 capitalize">
                <span className="text-blue-900 font-black text-xs text-center leading-tight">{student.name}</span>
                <span className="text-blue-900 font-black text-xs text-center leading-tight">{student.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section: Professional Banners */}
        <div className="mt-auto">
          {/* Banner 1: Admissions */}
          {/*  */}

          {/* Banner 2: Foundation Course */}


          {/* Banner 3: Contact & Address */}
          <div className="bg-blue-900 text-white text-xs md:text-sm font-semibold border-t-2 border-yellow-400">
            <div className="bg-pink-600 px-4 md:px-6 py-3 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 md:gap-4 shadow-inner">

              {/* Phone */}
              <div className="text-sm md:text-lg">
                HINDI MEDIUM PH.:{" "}
                <span className="text-yellow-300 font-bold">
                  7976197158
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-white/40"></div>

              {/* Address */}
              <div className="text-sm md:text-lg">
                ADDRESS:{" "}
                <span className="text-yellow-300 font-bold">
                  Govind Rao Ji Ka Rasta, Chandpol Bazaar, Jaipur
                </span>
              </div>

            </div>
          </div>
        </div>

      </div >
    </div >
  );
}
