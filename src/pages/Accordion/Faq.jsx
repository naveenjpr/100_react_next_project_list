import React, { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import faq from "../../assets/tiny-people.avif"

export default function Faq() {
  const [currentId, setCurrentId] = useState(null) // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  const faqs = [
    {
      id: 1,
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      id: 2,
      question: "Why use Tailwind instead of Bootstrap?",
      answer:
        "Tailwind provides greater flexibility, is not opinionated, and allows rapid UI development with utility classes.",
    },
    {
      id: 3,
      question: "How do I install Tailwind CSS?",
      answer:
        "You can install Tailwind via npm with `npm install -D tailwindcss` and configure it using the Tailwind CLI.",
    },
    {
      id: 4,
      question: "Is Tailwind good for SEO and performance?",
      answer:
        "Yes, when optimized properly, the final CSS file is much smaller than traditional stylesheets.",
    },
  ]

  const toggleFAQ = (id) => {
    setCurrentId(currentId === id ? null : id) // currentId को अपडेट कर रहे हैं, यदि वही FAQ फिर से क्लिक किया गया है तो इसे बंद करें
  }
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${faq})` }} // बैकग्राउंड इमेज सेट कर रहे हैं
      >
        <div class="max-w-2xl mx-auto my-10 ">
          <h2 class="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>

          <div class="space-y-4">
            {/* <!-- Question 1 --> */}

            {faqs.map((v, i) => {
              return (
                <>
                  <div class="border border-gray-300 rounded-lg" key={i}>
                    <button
                      class="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200 relative"
                      onClick={() => toggleFAQ(v.id)} // बटन क्लिक पर toggleFAQ फंक्शन को कॉल कर रहे हैं
                    >
                      {v.question}

                      <span className="absolute right-[10px] top-[10px]">
                        {/* // यदि FAQ खुला है तो FaMinus, अन्यथा FaPlus दिखा रहे हैं */}
                        {v.id === currentId ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>
                    <div
                      className={`p-4 bg-[red] text-white font-medium transition-all duration-1000 ease-in-out 
    ${v.id === currentId ? "block opacity-100" : "hidden opacity-0"}
  `}
                    >
                      {v.answer}
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
