import axios from "axios"
import { useEffect, useState } from "react"
import backmovie from "../assets/popcorn-movie-time_23-2148470132.jpg"

export default function Movie() {
  let [movieList, setMovieList] = useState([])
  console.log(movieList)

  let getMovie = (title = "") => {
    let apiUrl
    if (title === "") {
      apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1`
    } else {
      apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
    }
    axios.get(apiUrl).then((res) => {
      setMovieList(res.data.results)
    })
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <div
      className="h-screen overflow-scroll bg-gray-900 text-white flex flex-col items-center my-4 p-6 bg-repeat"
      style={{ backgroundImage: `url(${backmovie})` }}
    >
      <h1 className="text-3xl font-bold mb-6 text-[#00008b]">Movie Search</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full max-w-md p-3 rounded-lg border border-gray-700 bg-[#fff8dc] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        onInput={(event) => getMovie(event.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 w-full">
        {movieList.length > 0 ? (
          movieList.map((movie, i) => <MovieData key={i} data={movie} />)
        ) : (
          <p className="text-red-500 bg-black text-lg sm:text-2xl text-center w-full py-4">
            No movies found.
          </p>
        )}
      </div>
    </div>
  )
}

function MovieData({ data }) {
  // Construct a search URL for downloading (external source)
  const downloadUrl = `https://www.google.com/search?q=${encodeURIComponent(
    data.title + " movie download"
  )}`

  return (
    <div className="bg-gray-800 p-2 sm:p-3 rounded-lg shadow-md">
      <img
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={data.title}
        className="h-64 w-full rounded-lg object-cover"
      />
      <h2 className="mt-3 text-base sm:text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
        {data.title} ({data.release_date?.slice(0, 4) || "N/A"})
      </h2>
      <p className="text-xs sm:text-sm text-gray-300 mt-1">
        Language: {data.original_language?.toUpperCase() || "Unknown"} <br />
        Rating: {data.vote_average?.toFixed(1) || "N/A"}
      </p>

      {/* Download Button */}
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Download Movie
      </a>
    </div>
  )
}
