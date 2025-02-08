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
        onChange={(event) => getMovie(event.target.value)}
      />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 md:gap-6 gap-1 mt-6 w-full">
        {movieList.length > 0 ? (
          movieList.map((movie, i) => <MovieData key={i} data={movie} />)
        ) : (
          <p className="text-[red] bg-black text-[25px] flex justify-center items-center mt-6">
            No movies found.
          </p>
        )}
      </div>
    </div>
  )
}

function MovieData({ data }) {
  return (
    <>
      <div className="bg-gray-800 p-[3px] rounded-lg shadow-md">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="h-64 w-full  rounded-lg"
        />
        <h2 className="mt-4 text-lg font-semibold ">
          {data.title.slice(0, 50)}
          
          &nbsp;({data.release_date.slice(0, 4)})
        </h2>
        <p className=" text-sm">

        language:&nbsp;({data.original_language})<br/>

            Rating: &nbsp;
            {data.vote_average.toFixed(1)}
        </p>
      </div>
    </>
  )
}
