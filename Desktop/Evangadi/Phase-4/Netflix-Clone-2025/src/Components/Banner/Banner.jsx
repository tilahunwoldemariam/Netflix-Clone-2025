import React, { useEffect, useState } from 'react';
import axios from "../../Utils/axios.js"
import requests from "../../Utils/requests.js"
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({});
  console.log(movie);

  useEffect(() => {
    async function fechmovie() {
      
    
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        const results = request.data.results;
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        console.log(randomMovie);
        setMovie(randomMovie);
      } catch (error) {
        console.log("error", error);
      }

    };
    fechmovie()
  }, []);
  
  let truncate = (text, maxlength) => {
    return text?.length > maxlength ? text.slice(0, maxlength) + "..." : text;
  };
  return (
    <div
      className="banners"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banners__contents">
        <h1 className="banners__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banners__buttons">
          <button className="banners__button play">Play</button>
          <button className="banners__button">My List</button>
        </div>
         <h1 className="banners__description">{truncate(movie?.overview,150)} </h1> 
         
      </div>
      <div className="banners--fadeBottom" />
    </div>
  );
};

export default Banner;
