import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from "../../axios/axios.js"
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';



function Row({title, fetchUrl, isLargeRow}) {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl]=useState("");
const baseUrl = "https://image.tmdb.org/t/p/original";


useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
        
    }
    fetchData()
}, [fetchUrl]);
const opts={
  height:"390",
  width:"100%",
  playerVars: {
    autoplay: 1,
  }
}


const handleClick=(movie)=>{
  if (trailerUrl){
    setTrailerUrl("");
  }  else{
    movieTrailer(movie?.title || movie?.name || movie.orginal_name)
    .then((url) => {
   const urlParams= new URLSearchParams(new URL(url).search);
   setTrailerUrl(urlParams.get("v"));
    })
    .catch((error)=>console.log(error));
  }
}
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={()=> handleClick(movie)}
          className={`row__poster  ${isLargeRow && "row__posterlarge"}`}
          src={`${baseUrl}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{padding: "40px"}}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Row
