import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

const RSSFeed = () => {
  const location = useLocation()

  const [rssData, setRssData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await axios.get("http://localhost:5000/rss")
        console.log("RSS Data:", response.data) // ✅ Debugging

        setRssData(response.data.items)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch RSS feed")
        setLoading(false)
      }
    }

    fetchRSS()
  }, [])

  return (
    <>
      <div>{location.pathname === "/Rss-Feed" ? <Header/> : null}</div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          Rss Feed data show Latest Tech News
        </h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Grouping by Source */}
        {rssData.length > 0 && (
          <div className="h-screen overflow-auto">
            {[...new Set(rssData.map((item) => item.source))].map(
              (source, i) => (
                <div key={i} className="mb-6">
                  <h2 className="text-center text-[25px] font-medium py-[10px] text-[red]">
                    {source}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {rssData
                      .filter((item) => item.source === source)
                      .map((item, index) => (
                        <div
                          key={index}
                          className="border p-4 rounded-lg shadow"
                        >
                          <img
                            src={
                              item.imageUrl || "https://via.placeholder.com/150"
                            } // ✅ Default fallback image
                            alt={item.title}
                            className="w-full h-40 object-cover mb-2 rounded"
                          />
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:underline block"
                          >
                            {item.title}
                          </a>
                          <p className="text-sm text-gray-500">
                            {item.pubDate}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default RSSFeed
