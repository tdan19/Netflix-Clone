import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './requests';


function Banner() {
    const [movie, setmovies] = useState({});
  
    const trancate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
  
    useEffect(() => {
      (async () => {
        try {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setmovies(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
          console.log(movie);
        } catch (error) {
          console.log(error);
        }
      })();
      // console.log(movie);
    }, []);
  
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const imagePath = movie?.backdrop_path;
    return (
      <>
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseUrl}${imagePath})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie.origional_name}
            </h1>
  
            <div className="banner_butttons">
              <button className="banner__button play">Play</button>
              <button className="banner__button">My list</button>
            </div>
  
            <h3 className="banner__description">
              {trancate(movie?.overview, 150)}
            </h3>
          </div>
  
          <div className="banner_fadeButtom" />
        </div>
      </>
    );
  }
  
  export default Banner;
  // https://image.tmdb.org/t/p/orgionals'/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg
  
