import React, { useState } from "react"
import { MdDelete } from "react-icons/md"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

export default function To_do_list() {
  const location = useLocation()

  // Todolist स्टेट क्रिएट किया है, जो इनपुट फ़ील्ड के लिए है (शुरुआती वैल्यू "naveen" दी गई है)
  const [Todolist, setTodolist] = useState("naveen")

  // लोकल स्टोरेज से पुराना डाटा निकाल रहे हैं, अगर कुछ नहीं मिला तो [] (खाली एरे) सेट कर रहे हैं
  let oldData = JSON.parse(localStorage.getItem("Todolist")) ?? []

  // सभी टोडो आइटम को स्टेट में स्टोर कर रहे हैं
  const [allDolist, setallDolist] = useState(oldData)

  // यह फंक्शन नया टास्क ऐड करने के लिए है
  let addTodo = (event) => {
    event.preventDefault() // फॉर्म के डिफ़ॉल्ट रिफ्रेश होने के व्यवहार को रोकने के लिए

    let obj = {
      Todolist, // टोडो का नाम जो यूज़र ने इनपुट में डाला है
      isStatus: false, // टास्क का स्टेटस (कम्प्लीटेड या नॉट कम्प्लीटेड)
    }

    // पहले से मौजूद टोडो लिस्ट में नया टोडो ऐड कर रहे हैं
    let copyData = [...allDolist, obj]

    // अपडेटेड लिस्ट को लोकल स्टोरेज में सेव कर रहे हैं
    localStorage.setItem("Todolist", JSON.stringify(copyData))

    // स्टेट अपडेट कर रहे हैं जिससे UI में तुरंत अपडेट दिखे
    setallDolist(copyData)
  }

  // यह फंक्शन किसी टास्क को डिलीट करने के लिए है
  let deltelistdata = (index) => {
    let allItems = [...allDolist] // सभी टोडो की कॉपी बना रहे हैं
    allItems.splice(index, 1) // दिए गए इंडेक्स का टोडो हटाते हैं

    // अपडेटेड लिस्ट को लोकल स्टोरेज में सेव कर रहे हैं
    localStorage.setItem("Todolist", JSON.stringify(allItems))

    // स्टेट अपडेट कर रहे हैं
    setallDolist(allItems)
  }

  // यह फंक्शन टास्क को कम्प्लीटेड या अन-कम्प्लीटेड करने के लिए है
  let changeStatus = (index) => {
    let allItems = [...allDolist] // सभी टोडो की कॉपी बना रहे हैं
    allItems[index]["isStatus"] = !allItems[index]["isStatus"] // स्टेटस को टॉगल कर रहे हैं

    // अपडेटेड लिस्ट को लोकल स्टोरेज में सेव कर रहे हैं
    localStorage.setItem("Todolist", JSON.stringify(allItems))

    // स्टेट अपडेट कर रहे हैं
    setallDolist(allItems)
  }

  return (
    <>
      {" "}
      <div>{location.pathname === "/To_do_list" ? <Header /> : null}</div>
      <div class="bg-gray-100 min-h-screen">
        <div class="text-center mb-2 pt-[20px]">
          <h1 class="text-3xl font-bold text-indigo-600">TO-DO-LIST</h1>
        </div>
        <form class="container mx-auto max-w-md p-4" onSubmit={addTodo}>
          <div class="flex mb-6">
            <input
              type="text"
              placeholder="Add a new task..."
              class="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={Todolist}
              onChange={(e) => setTodolist(e.target.value)}
            />
            <button class="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition">
              Add
            </button>
          </div>
        </form>

        <div class="max-w-[500px] mx-auto bg-white rounded-lg shadow overflow-hidden">
          {allDolist.length > 0
            ? allDolist.map((v, i) => {
                return (
                  <div
                    class={`p-4 border-b border-gray-200 flex items-center  ${
                      v.isStatus == true ? "line-through text-[red]" : ""
                    }`}
                    key={i}
                  >
                    <div
                      class="flex items-center"
                      onClick={() => changeStatus(i)}
                    >
                      <span>{i + 1}</span>

                      <span class="ml-3 text-gray-500 ">{v.Todolist}</span>
                    </div>
                    <button
                      class="ml-auto text-gray-400 hover:text-red-500"
                      onClick={() => deltelistdata(i)}
                    >
                      <MdDelete className="text-[red]" />
                    </button>
                  </div>
                )
              })
            : "no data"}
        </div>
      </div>
    </>
  )
}
