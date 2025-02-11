import React, { useState } from "react"
import clickbutton from "../../assets/clickbutton.jpg"

export default function Modalshow() {
  const [modalshow, setmodalshow] = useState(false)

  let modalshowbuttonclick = () => {
    setmodalshow(!modalshow)
  }
  return (
    <>
      <div
        className="w-full h-screen relative my-4"
        style={{ backgroundImage: `url(${clickbutton})` }}
      >
        {/* Navbar */}

        <nav className="w-full bg-gray-800 p-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={modalshowbuttonclick}
          >
            modal show
          </button>
        </nav>
        {/* Heading */}

        <h1 className="text-center text-black font-medium uppercase sm:text-[30px] text-[20px]">
          Modal open by button click{" "}
        </h1>
        {/* Modal */}

        <div
          className={`sm:w-[350px] w-[250px] bg-[gold] z-40 sm:h-[350px] h-[250px] border-[2px] shadow-lg border-[red] absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500 ${
            modalshow == true ? "top-[50%]" : "top-[-500px] hidden"
          }`}
        >
          {/* Modal Header */}

          <h2 className="p-3 font-medium sm:text-[20px] text-[15px] border-b">
            login
          </h2>
          {/* Close Button */}

          <span
            className="absolute sm:text-[25px] text-[20px] top-0 right-0 cursor-pointer hover:text-[red]"
            onClick={() => setmodalshow(false)}
          >
            &times;
          </span>
        </div>
      </div>
    </>
  )
}
