import React, { useState } from "react"
import marksheetImage from "../../assets/marksheet.jpg"
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
      className="capitalize  bg-cover bg-center lg:h-[700px] h-screen py-[100px] w-[100%] relative"
      style={{ backgroundImage: `url(${marksheetImage})` }}
    >
      <div className="max-w-[700px] p-[20px] mx-auto border border-[solid] bg-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] shadow-lg shadow-cyan-500/50  ">
        <h3 className="bg-teal-600 text-white text-[25px]">
        RBSE Exam, class 10 (आरबीएसई परीक्षा, कक्षा 10)
        </h3>
        {/* <img src={marksheetImage} alt="" /> */}
        <table className="w-[100%]">
          <thead className="bg-blue-600 text-white">
            <tr className="w-[100%] font-[cursive] ">
              <th className="w-[25%] py-[10px] text-white border-r-2 border-[solid]">
                subject
              </th>
              <th className="w-[25%] py-[10px] text-white border-r-2 border-[solid]">
                Total 6 subject each subject 100 number
              </th>
              <th className="w-[33%] py-[10px] text-white ">get marks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid]">
                Hindi(हिन्दी)
              </td>
              <td className="py-[5px] border-r-2 border-[solid]">100</td>
              <td>
                <input
                  type="text"
                  className="max-w-[99%] border text-black"
                  placeholder="enter get mark"
                  value={Hindi <= 100 ? Hindi : ""}
                  onChange={(e) => setHindi(e.target.value)}
                />
              </td>
            </tr>
            <tr className="bg-[#ed143d]  border-b border-[grey]">
              <td className="py-[5px] text-white border-r-2 border-[solid]">
                Englsih(अंग्रेज़ी )
              </td>
              <td className="py-[5px] text-white border-r-2 border-[solid]">
                100
              </td>

              <td>
                <input
                  type="text"
                  className="max-w-[99%] border text-black"
                  placeholder="enter get mark"
                  value={English <= 100 ? English : ""}
                  onChange={(e) => setEnglish(e.target.value)}
                />{" "}
              </td>
            </tr>
            <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid]">
                maths(गणित )
              </td>
              <td className="py-[5px] border-r-2 border-[solid]">100</td>

              <td>
                <input
                  type="text"
                  className="max-w-[99%] border text-black"
                  placeholder="enter get mark"
                  value={Maths <= 100 ? Maths : ""}
                  onChange={(e) => setMaths(e.target.value)}
                />{" "}
              </td>
            </tr>
            <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid]">
                Social(सामजिक)
              </td>
              <td className="py-[5px] border-r-2 border-[solid]">100</td>

              <td>
                <input
                  type="text"
                  className="max-w-[99%] border text-black"
                  placeholder="enter get mark"
                  value={Social <= 100 ? Social : ""}
                  onChange={(e) => setSocial(e.target.value)}
                />{" "}
              </td>
            </tr>
            <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid]">
                Science(विज्ञान )
              </td>
              <td className="py-[5px] border-r-2 border-[solid]">100</td>

              <td>
                <input
                  type="text"
                  className="max-w-[99%] border text-black"
                  placeholder="enter get mark"
                  value={Science <= 100 ? Science : ""}
                  onChange={(e) => setScience(e.target.value)}
                />{" "}
              </td>
            </tr>
            <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid]">
                Sanskrit(संस्कृत)
              </td>
              <td className="py-[5px] border-r-2 border-[solid]">100</td>

              <td>
                <input
                  type="text"
                  className="max-w-[99%] border text-black"
                  placeholder="enter get mark"
                  value={Sanskrit <= 100 ? Sanskrit : ""}
                  onChange={(e) => setSanskrit(e.target.value)}
                />
              </td>
            </tr>
            <tr className="bg-[#00ffff] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid] text-[#a52a2a]">
                total marks:
              </td>
              <td className="border-r-2 border-[solid] text-[#a52a2a]">600</td>
              <td className="text-[#a52a2a]">{totalMarks}</td>
            </tr>
            <tr className="bg-[blue] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid]">percentage</td>
              <td></td>

              <td>{percentage}%</td>
            </tr>
            <tr className="bg-[#ed143d] text-white border-b border-[grey] ">
              <td className="py-[5px] border-r-2 border-[solid]">div</td>
              <td>Grade:{grade}</td>

              <td className="">{division}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="bg-[#006400] hover:bg-blue-700 text-white py-2 px-4 rounded my-[5px]"
          onClick={calculateTotal}
        >
          {" "}
          get result
        </button>
        <div>
          <ul className="text-[10px] text-left list-[number]	">
            <li className="text-[red]">
              A student needs to score a minimum of 33% marks in each
              subject(कक्षा 10 की परीक्षा में उत्तीर्ण होने के लिए छात्रों को
              कक्षा 10 की परीक्षा में न्यूनतम 33% अंक प्राप्त करने होते हैं।)
            </li>
            <li className="text-[red]">
              If a student scores less than 33% marks in at least two subjects,
              he or she will have to appear in the supplementary examination.
              (अगर कोई छात्र कम से कम दो विषयों में 33% से कम अंक लाता है, तो
              उसे सप्लीमेंट्री परीक्षा में शामिल होना होगा)
            </li>
            <li className="text-[red]">
              The Rajasthan Board of Secondary Education (RBSE) uses the
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
