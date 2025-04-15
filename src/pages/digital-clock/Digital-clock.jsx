import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

export default function Count_Down() {
  const location = useLocation()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date() //currentDate: वर्तमान तारीख और समय को लेता है।
      const countDownDate = new Date("30 April 2025") //countDownDate: वह तारीख सेट करता है जिस तक हम काउंटडाउन चलाना चाहते हैं।

      //differenceMs: दोनों तारीखों का अंतर (मिलीसेकंड में) निकालता है।
      const differenceMs = countDownDate.getTime() - currentDate.getTime()

      //अगर काउंटडाउन की तारीख निकल गई तो सभी वैल्यूज़ 0 कर देगा।
      if (differenceMs <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 } // Timer expired
      }

      const seconds = Math.floor(differenceMs / 1000) //कुल सेकंड्स निकालते हैं।
      const days = Math.floor(seconds / (24 * 60 * 60)) //कुल सेकंड्स को 24 घंटे से भाग देकर दिन निकालते हैं।
      const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)) //सेकंड्स का मॉड्यूलो (%) लेकर घंटे निकालते हैं।
      const minutes = Math.floor((seconds % (60 * 60)) / 60) //बचे हुए सेकंड्स को मिनट्स में बदलते हैं।
      const remainingSeconds = seconds % 60 //आखिर में सेकंड्स का बचे हुए अंश को रखते हैं।

      return { days, hours, minutes, seconds: remainingSeconds }
    }

    //setInterval(): हर 1 सेकंड में calculateTimeLeft() को कॉल करता है और स्टेट अपडेट करता है।
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer) //clearInterval(): जब कंपोनेंट अनमाउंट होता है तो टाइमर को रोक देता है।
  }, [])

  return (
    <>
      <div>{location.pathname === "/Count_Down" ? <Header /> : null}</div>

      <div className="w-full h-screen bg-[#111152] ">
        <h1 className="text-center text-white py-[10px] text-[20px] font-medium">
          Website lunching Date count Down
        </h1>
        <div className="max-w-[700px] w-full mx-auto  relative h-[300px]">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
            {/* Days */}
            <div className="border-2 border-white text-white text-center p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Days</h2>
              <span className="text-4xl font-mono">{timeLeft.days}</span>
            </div>

            {/* Hours */}
            <div className="border-2 border-white text-white text-center p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Hours</h2>
              <span className="text-4xl font-mono">{timeLeft.hours}</span>
            </div>

            {/* Minutes */}
            <div className="border-2 border-white text-white text-center p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Minutes</h2>
              <span className="text-4xl font-mono">{timeLeft.minutes}</span>
            </div>

            {/* Seconds */}
            <div className="border-2 border-white text-white text-center p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Seconds</h2>
              <span className="text-4xl font-mono">{timeLeft.seconds}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
