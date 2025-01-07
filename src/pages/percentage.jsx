import React, { useState } from "react"
import marksheetImage from "../assets/marksheet.jpg"
import { ToastContainer, toast } from "react-toastify"

export default function Percentage() {
  const [Hindi, setHindi] = useState("")
  const [English, setEnglish] = useState("")
  const [Maths, setMaths] = useState("")
  const [Social, setSocial] = useState("")
  const [Science, setScience] = useState("")
  const [Sanskrit, setSanskrit] = useState("")
  const [totalMarks, setTotalMarks] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [division, setDivision] = useState("")
  const [grade, setGrade] = useState("")

  const calculateTotal = () => {
    const total =
      Number(Hindi) +
      Number(English) +
      Number(Maths) +
      Number(Social) +
      Number(Science) +
      Number(Sanskrit)

    setTotalMarks(total)

    const percent = (total / 600) * 100
    setPercentage(percent.toFixed(2))

    const failedSubjects = [
      Hindi,
      English,
      Maths,
      Social,
      Science,
      Sanskrit,
    ].filter((mark) => Number(mark) < 33).length
    console.log(failedSubjects)

    if (failedSubjects <= 2 && failedSubjects !== 0) {
      setDivision("Supplementary")
    } else if (failedSubjects === 3) {
      setDivision("Failed")
    } else {
      if (percent >= 60) {
        setDivision("First")
      } else if (percent >= 48 && percent < 60) {
        setDivision("Second")
      } else if (percent >= 33 && percent < 48) {
        setDivision("Third")
      } else {
        setDivision("Failed")
      }
    }
    let result = ""
    if (
      Hindi > 100 ||
      Hindi < 0 ||
      English > 100 ||
      English < 0 ||
      Maths > 100 ||
      Maths < 0 ||
      Social > 100 ||
      Social < 0 ||
      Science > 100 ||
      Science < 0 ||
      Sanskrit > 100 ||
      Sanskrit < 0
    ) {
      result = "invalid"
      setDivision(result)
      setPercentage(result)
    }

    let calculatedGrade = ""
    if (percent >= 91) {
      if (failedSubjects !== 1 || failedSubjects !== 2) {
        calculatedGrade = "A+"
      }
    } else if (percent >= 76) {
      if (failedSubjects !== 1 && failedSubjects !== 2) {
        calculatedGrade = "A"
      }
    } else if (percent >= 61) {
      if (
        failedSubjects !== 1 &&
        failedSubjects !== 2 &&
        failedSubjects !== 3
      ) {
        calculatedGrade = "B"
      }
    } else if (percent >= 41) {
      if (
        failedSubjects !== 1 &&
        failedSubjects !== 2 &&
        failedSubjects !== 3
      ) {
        calculatedGrade = "C"
      }
    } else {
      calculatedGrade = false
    }
    setGrade(calculatedGrade)
  }

  return (
    <div
      className=" capitalize  bg-cover bg-center lg:h-[700px] min-h-screen my-[100px] w-[100%] relative"
      style={{ backgroundImage: `url(${marksheetImage})` }}
    >
      <div className="w-[99%] md:max-w-[700px] md:p-[20px] p-[10px] mx-auto border border-solid bg-white absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-cyan-500/50">
        <h3 className="bg-teal-600 text-white text-center md:text-[25px] text-[18px] p-[10px]">
          RBSE Exam, Class 10 (आरबीएसई परीक्षा, कक्षा 10)
        </h3>
        {/* <img src={marksheetImage} alt="" /> */}
        <div className="overflow-x-auto">
          <table className="w-full p-[10px] md:p-[20px]">
            <thead className="bg-blue-600 text-white">
              <tr className="font-[cursive]">
                <th className="px-[20px] md:px-[42px] py-[10px] text-white border-r-2 border-[solid] text-sm md:text-base">
                  Subject
                </th>
                <th className="py-[10px] text-white border-r-2 border-[solid] text-sm md:text-base">
                  Total Marks
                </th>
                <th className="py-[10px] text-white text-sm md:text-base">
                  Marks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-[#ed143d] text-white border-b border-[grey] ">
                <td className=" py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  Hindi(हिन्दी)
                </td>
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  100
                </td>
                <td>
                  <input
                    type="text"
                    className="w-full md:w-[80%] border text-black text-xs md:text-sm p-[5px]"
                    placeholder="enter get mark"
                    value={Hindi <= 100 ? Hindi : ""}
                    onChange={(e) => setHindi(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="bg-[#ed143d] text-white  border-b border-[grey]">
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  Englsih(अंग्रेज़ी )
                </td>
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  100
                </td>

                <td>
                  <input
                    type="text"
                    className="w-full md:w-[80%] border text-black text-xs md:text-sm p-[5px]"
                    placeholder="enter get mark"
                    value={English <= 100 ? English : ""}
                    onChange={(e) => setEnglish(e.target.value)}
                  />{" "}
                </td>
              </tr>
              <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  maths(गणित )
                </td>
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  100
                </td>

                <td>
                  <input
                    type="text"
                    className="w-full md:w-[80%] border text-black text-xs md:text-sm p-[5px]"
                    placeholder="enter get mark"
                    value={Maths <= 100 ? Maths : ""}
                    onChange={(e) => setMaths(e.target.value)}
                  />{" "}
                </td>
              </tr>
              <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  Social(सामजिक)
                </td>
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  100
                </td>

                <td>
                  <input
                    type="text"
                    className="w-full md:w-[80%] border text-black text-xs md:text-sm p-[5px]"
                    placeholder="enter get mark"
                    value={Social <= 100 ? Social : ""}
                    onChange={(e) => setSocial(e.target.value)}
                  />{" "}
                </td>
              </tr>
              <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  Science(विज्ञान )
                </td>
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  100
                </td>

                <td>
                  <input
                    type="text"
                    className="w-full md:w-[80%] border text-black text-xs md:text-sm p-[5px]"
                    placeholder="enter get mark"
                    value={Science <= 100 ? Science : ""}
                    onChange={(e) => setScience(e.target.value)}
                  />{" "}
                </td>
              </tr>
              <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  Sanskrit(संस्कृत)
                </td>
                <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                  100
                </td>

                <td>
                  <input
                    type="text"
                    className="w-full md:w-[80%] border text-black text-xs md:text-sm p-[5px]"
                    placeholder="enter get mark"
                    value={Sanskrit <= 100 ? Sanskrit : ""}
                    onChange={(e) => setSanskrit(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="bg-[#00ffff] text-[#a52a2a]">
                <td className="py-[5px] text-center">Total Marks:</td>
                <td className="text-center">600</td>
                <td className="text-center">{totalMarks}</td>
              </tr>
              <tr className="bg-blue-600 text-white">
                <td className="py-[5px] text-center">Percentage:</td>
                <td colSpan="2" className="text-center">
                  {percentage}%
                </td>
              </tr>
              <tr className="bg-[#ed143d] text-white">
                <td className="py-[5px] text-center"></td>
                <td className="text-center">Grade: {grade}</td>
                <td className="text-center">{division}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="bg-[#006400] hover:bg-blue-700 text-white py-2 px-4 rounded my-[5px] mx-auto block"
          onClick={calculateTotal}
        >
          Get Result
        </button>
        <div className="overflow-y-auto max-h-[80px]">
          <ul className="text-xs md:text-sm text-left list-decimal mt-4">
            <li className="text-black border-b border-[solid] border-[black] my-[5px]">
              <span className="text-[blue]">(1) </span>A student needs to score a minimum of 33% marks in each
              subject(कक्षा 10 की परीक्षा में उत्तीर्ण होने के लिए छात्रों को
              कक्षा 10 की परीक्षा में न्यूनतम 33% अंक प्राप्त करने होते हैं।)
            </li>
            <li className="text-black border-b border-[solid] border-[black] my-[5px]">
            <span className="text-[blue]">(2) </span>If a student scores less than 33% marks in at least two subjects,
              he or she will have to appear in the supplementary examination.
              (अगर कोई छात्र कम से कम दो विषयों में 33% से कम अंक लाता है, तो
              उसे सप्लीमेंट्री परीक्षा में शामिल होना होगा)
            </li>
            <li className="text-black border-b border-[solid] border-[black] my-[5px]">
            <span className="text-[blue]">(3) </span>The Rajasthan Board of Secondary Education (RBSE) uses the
              following grading system for class 10 exams: A+: 91–100 marks A:
              76–90 marks B: 61–75 marks C: 41–60 marks(राजस्थान माध्यमिक शिक्षा
              बोर्ड (आरबीएसई) कक्षा 10 की परीक्षाओं के लिए निम्नलिखित ग्रेडिंग
              प्रणाली का उपयोग करता है: ए+: 91-100 अंक ए: 76-90 अंक बी: 61-75
              अंक सी: 41-60 अंक)
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
