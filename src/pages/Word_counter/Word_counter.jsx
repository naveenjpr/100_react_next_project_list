import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

export default function Word_counter() {
  const [Wordcount, setWordcount] = useState("")
  const [singlwordshow, setsinglwordshow] = useState(0)
  const location = useLocation()

  let savechanges = () => {
    var txtValue = Wordcount.trim()
      .split(/\s+/)
      .filter((v) => v.length > 0)
    setsinglwordshow(txtValue.length)
  }

  return (
    <>
      <div>{location.pathname === "/Word_counter" ? <Header /> : null}</div>

      <section className="bg-gray-400 md:p-[20px] p-[5px] my-[100px]">
        <h1 className="text-center font-bold md:text-2xl text-[15px] mb-6">
          Word Counter
        </h1>
        <div className="max-w-[600px]  grid grid-cols-1  mt-[10px] justify-center  mx-auto  ">
          <textarea
            className="w-[100%] h-[300px] p-[12px]"
            onChange={(e) => setWordcount(e.target.value)}
          >
            {Wordcount}
          </textarea>
        </div>
        <button
          className="table bg-[blue] p-[5px] rounded-lg mx-auto text-[white]"
          onClick={savechanges}
        >
          Count Words
        </button>
        <h1 className="table mx-auto text-lg font-bold mt-4">
          Word Count: {singlwordshow}
        </h1>
      </section>
    </>
  )
}
