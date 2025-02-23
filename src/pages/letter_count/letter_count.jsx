import React, { useEffect, useState } from "react"

export default function Letter_count() {
  const [Wordcount, setWordcount] = useState("") //यह स्टेट उपयोगकर्ता द्वारा दर्ज किए गए टेक्स्ट को स्टोर करता है।
  const [singlwordshow, setsinglwordshow] = useState({}) //यह एक ऑब्जेक्ट है, जो हर अक्षर (letter) की संख्या को स्टोर करता है।

  let savechanges = () => {
    let letterobj = {} // एक खाली ऑब्जेक्ट, जिसमें अक्षरों की संख्या स्टोर होगी
    var txtValue = Wordcount // उपयोगकर्ता द्वारा डाला गया टेक्स्ट

    for (var v of txtValue) {
      // टेक्स्ट के प्रत्येक अक्षर को लूप में लेना
      letterobj[v] = (letterobj[v] ?? 0) + 1 // यदि अक्षर पहले से मौजूद है, तो उसकी संख्या बढ़ाएं, वरना 1 सेट करें
    }
    setsinglwordshow(letterobj) // स्टेट को अपडेट करें
  }
  useEffect(() => {
    savechanges() // जब भी `Wordcount` बदले, तो अक्षरों की गिनती अपडेट हो
  }, [Wordcount])

  return (
    <section className="bg-gray-400 md:p-[20px] p-[5px]">
      <h1 className="text-center font-bold md:text-2xl text-[15px] mb-6">
        Letter Frequency Counter
      </h1>
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
