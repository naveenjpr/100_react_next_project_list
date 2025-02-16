import React, { useEffect, useState } from "react"

export default function Letter_count() {
  const [Wordcount, setWordcount] = useState("")
  const [singlwordshow, setsinglwordshow] = useState({})
  

  let savechanges = () => {
    let letterobj = {}
    var txtValue = Wordcount

    for (var v of txtValue) {
      letterobj[v] = (letterobj[v] ?? 0) + 1
    }
    setsinglwordshow(letterobj)
  }
  useEffect(() => {
    savechanges()
  },[Wordcount])

  return (
    <section className="bg-gray-400 md:p-[20px] p-[5px]">
      <h1 className="text-center font-bold md:text-2xl text-[15px] mb-6">Letter Frequency Counter</h1>
      <div className="max-w-[1170px] min-h-screen grid grid-cols-[70%_auto] items-start mt-[10px] justify-center gap-[10px] mx-auto  ">
        <div>
          <textarea
            className="w-[100%] h-[400px] p-[12px]"
            onChange={(e) => setWordcount(e.target.value)}
          >
            {Wordcount}
          </textarea>

         
        </div>
        <div className="max-h-[400px] overflow-y-auto p-2 bg-white rounded shadow">
          <h3 className="font-bold text-center mb-2">Letter Frequency:</h3>
          <ul className="mt-4 list-disc pl-5  ">
            {Object.entries(singlwordshow).map(([char, count], index) => (
              <li key={index} className="text-center">
                {char === " " ? "Space" : char}: {count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
