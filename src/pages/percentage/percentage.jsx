import React, { useState } from "react"
import marksheetImage from "../../assets/marksheet.jpg"
import { ToastContainer, toast } from "react-toastify"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

export default function Percentage() {
  const location = useLocation()

  // State variables for subject marks
  const [Hindi, setHindi] = useState("") // हिंदी के अंक
  const [English, setEnglish] = useState("") // अंग्रेजी के अंक
  const [Maths, setMaths] = useState("") // गणित के अंक
  const [Social, setSocial] = useState("") // सामाजिक विज्ञान के अंक
  const [Science, setScience] = useState("") // विज्ञान के अंक
  const [Sanskrit, setSanskrit] = useState("") // संस्कृत के अंक

  // State variables for results
  const [totalMarks, setTotalMarks] = useState(0) // कुल अंक
  const [percentage, setPercentage] = useState(0) // प्रतिशत
  const [division, setDivision] = useState("") // डिवीजन (फर्स्ट, सेकंड, थर्ड)
  const [grade, setGrade] = useState("") // ग्रेड (A+, A, B, C)

  // कुल अंक, प्रतिशत, डिवीजन और ग्रेड की गणना करने का फ़ंक्शन
  const calculateTotal = () => {
    // सभी विषयों के अंकों का योग
    const total =
      Number(Hindi) +
      Number(English) +
      Number(Maths) +
      Number(Social) +
      Number(Science) +
      Number(Sanskrit)

    setTotalMarks(total) // कुल अंक सेट करें

    // प्रतिशत की गणना
    const percent = (total / 600) * 100
    setPercentage(percent.toFixed(2)) // प्रतिशत को 2 दशमलव स्थानों तक सेट करें

    // फेल विषयों की संख्या गिनें (33 से कम अंक वाले विषय)
    const failedSubjects = [
      Hindi,
      English,
      Maths,
      Social,
      Science,
      Sanskrit,
    ].filter((mark) => Number(mark) < 33).length

    // डिवीजन की गणना
    if (failedSubjects <= 2 && failedSubjects !== 0) {
      setDivision("Supplementary") // 2 या उससे कम फेल विषयों के लिए सप्लीमेंट्री
    } else if (failedSubjects === 3) {
      setDivision("Failed") // 3 फेल विषयों के लिए फेल
    } else {
      if (percent >= 60) {
        setDivision("First") // 60% या अधिक के लिए फर्स्ट डिवीजन
      } else if (percent >= 48 && percent < 60) {
        setDivision("Second") // 48% से 59.99% के लिए सेकंड डिवीजन
      } else if (percent >= 33 && percent < 48) {
        setDivision("Third") // 33% से 47.99% के लिए थर्ड डिवीजन
      } else {
        setDivision("Failed") // 33% से कम के लिए फेल
      }
    }

    // अमान्य अंकों की जांच (0 से कम या 100 से अधिक)
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
      setDivision("invalid") // अमान्य अंकों के लिए डिवीजन और प्रतिशत को "invalid" सेट करें
      setPercentage("invalid")
    }

    // ग्रेड की गणना
    let calculatedGrade = ""
    if (percent >= 91) {
      if (failedSubjects !== 1 || failedSubjects !== 2) {
        calculatedGrade = "A+" // 91% या अधिक के लिए A+
      }
    } else if (percent >= 76) {
      if (failedSubjects !== 1 && failedSubjects !== 2) {
        calculatedGrade = "A" // 76% से 90% के लिए A
      }
    } else if (percent >= 61) {
      if (
        failedSubjects !== 1 &&
        failedSubjects !== 2 &&
        failedSubjects !== 3
      ) {
        calculatedGrade = "B" // 61% से 75% के लिए B
      }
    } else if (percent >= 41) {
      if (
        failedSubjects !== 1 &&
        failedSubjects !== 2 &&
        failedSubjects !== 3
      ) {
        calculatedGrade = "C" // 41% से 60% के लिए C
      }
    } else {
      calculatedGrade = false // 41% से कम के लिए कोई ग्रेड नहीं
    }
    setGrade(calculatedGrade) // ग्रेड सेट करें
  }

  return (
    <>
      <div>{location.pathname === "/Percentage" ? <Header /> : null}</div>

      <div
        className="capitalize bg-cover bg-center lg:h-[700px] min-h-screen my-[100px] w-[100%] relative"
        style={{ backgroundImage: `url(${marksheetImage})` }}
      >
        {/* मुख्य कंटेनर */}
        <div className="w-[99%] md:max-w-[700px] md:p-[20px] p-[10px] mx-auto border border-solid bg-white absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-cyan-500/50">
          {/* हेडर */}
          <h3 className="bg-teal-600 text-white text-center md:text-[25px] text-[18px] p-[10px]">
            RBSE Exam, Class 10 (आरबीएसई परीक्षा, कक्षा 10)
          </h3>

          {/* टेबल */}
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
                {/* हिंदी */}
                <tr className="bg-[#ed143d] text-white border-b border-[grey]">
                  <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
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
                {/* अंग्रेजी */}
                <tr className="bg-[#ed143d] text-white border-b border-[grey]">
                  <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                    Englsih(अंग्रेज़ी)
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
                    />
                  </td>
                </tr>
                {/* गणित */}
                <tr className="bg-[#ed143d] text-white border-b border-[grey]">
                  <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                    maths(गणित)
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
                    />
                  </td>
                </tr>
                {/* सामाजिक विज्ञान */}
                <tr className="bg-[#ed143d] text-white border-b border-[grey]">
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
                    />
                  </td>
                </tr>
                {/* विज्ञान */}
                <tr className="bg-[#ed143d] text-white border-b border-[grey]">
                  <td className="py-[5px] border-r-2 border-[solid] text-center text-xs md:text-sm">
                    Science(विज्ञान)
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
                    />
                  </td>
                </tr>
                {/* संस्कृत */}
                <tr className="bg-[#ed143d] text-white border-b border-[grey]">
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
                {/* कुल अंक */}
                <tr className="bg-[#00ffff] text-[#a52a2a]">
                  <td className="py-[5px] text-center">Total Marks:</td>
                  <td className="text-center">600</td>
                  <td className="text-center">{totalMarks}</td>
                </tr>
                {/* प्रतिशत */}
                <tr className="bg-blue-600 text-white">
                  <td className="py-[5px] text-center">Percentage:</td>
                  <td colSpan="2" className="text-center">
                    {percentage}%
                  </td>
                </tr>
                {/* ग्रेड और डिवीजन */}
                <tr className="bg-[#ed143d] text-white">
                  <td className="py-[5px] text-center"></td>
                  <td className="text-center">Grade: {grade}</td>
                  <td className="text-center">{division}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* रिजल्ट बटन */}
          <button
            className="bg-[#006400] hover:bg-blue-700 text-white py-2 px-4 rounded my-[5px] mx-auto block"
            onClick={calculateTotal}
          >
            Get Result
          </button>

          {/* नोट्स */}
          <div className="overflow-y-auto max-h-[80px]">
            <ul className="text-xs md:text-sm text-left list-decimal mt-4">
              <li className="text-black border-b border-[solid] border-[black] my-[5px]">
                <span className="text-[blue]">(1) </span>A student needs to
                score a minimum of 33% marks in each subject(कक्षा 10 की परीक्षा
                में उत्तीर्ण होने के लिए छात्रों को कक्षा 10 की परीक्षा में
                न्यूनतम 33% अंक प्राप्त करने होते हैं।)
              </li>
              <li className="text-black border-b border-[solid] border-[black] my-[5px]">
                <span className="text-[blue]">(2) </span>If a student scores
                less than 33% marks in at least two subjects, he or she will
                have to appear in the supplementary examination. (अगर कोई छात्र
                कम से कम दो विषयों में 33% से कम अंक लाता है, तो उसे
                सप्लीमेंट्री परीक्षा में शामिल होना होगा)
              </li>
              <li className="text-black border-b border-[solid] border-[black] my-[5px]">
                <span className="text-[blue]">(3) </span>The Rajasthan Board of
                Secondary Education (RBSE) uses the following grading system for
                class 10 exams: A+: 91–100 marks A: 76–90 marks B: 61–75 marks
                C: 41–60 marks(राजस्थान माध्यमिक शिक्षा बोर्ड (आरबीएसई) कक्षा 10
                की परीक्षाओं के लिए निम्नलिखित ग्रेडिंग प्रणाली का उपयोग करता
                है: ए+: 91-100 अंक ए: 76-90 अंक बी: 61-75 अंक सी: 41-60 अंक)
              </li>
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}
