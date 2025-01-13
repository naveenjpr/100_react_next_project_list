import axios from "axios"
import React, { useState } from "react"

export default function WeatherApp() {
  const [city, setCity] = useState("jaipur")
  const [weather, setWeather] = useState(null)
  const [error, seterror] = useState("")
  let weatherclick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric
    `
      )
      .then((result) => {
        console.log(result.data)
        setWeather(result.data)
        seterror('')
      })
      .catch((error) => {
        console.log(error.message)
        seterror(error.message)
        setWeather(null)
      })
  }
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 min-h-screen  p-4">
      <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Weather App
        </h1>

        {/* Input Field */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter city"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={weatherclick}
          >
            Search
          </button>
        </div>
      </div>

      {/* Weather Card */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {
            error!==""?
            <div className="text-[red]">{error}</div>
            
            :""
        }
        {weather !== null ? (
          <div className="mt-6 bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 text-center">
              country:{weather.sys.country}
            </h2>
            <h2 className="text-xl font-semibold text-gray-700 text-center">
              Location:{weather.name}
            </h2>
            <p className="text-4xl font-bold text-center text-blue-700 mt-2">
              {weather.main.temp}
            </p>
            <img src={weather.weather[0].icon} alt="" />
            <p className="text-gray-600 text-center mt-2">
              {weather.weather[0].description}
            </p>
            <div className="grid grid-cols-3 justify-between items-center mt-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Wind</p>
                <p className="text-lg font-semibold text-gray-800">12 km/h</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="text-lg font-semibold text-gray-800">
                  {weather.main.humidity}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Pressure</p>
                <p className="text-lg font-semibold text-gray-800">
                  {weather.main.pressure}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">temp</p>
                <p className="text-lg font-semibold text-gray-800">
                  {weather.main.temp}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">temp_max</p>
                <p className="text-lg font-semibold text-gray-800">
                  {weather.main.temp_max}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">temp_min</p>
                <p className="text-lg font-semibold text-gray-800">
                  {weather.main.temp_min}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
