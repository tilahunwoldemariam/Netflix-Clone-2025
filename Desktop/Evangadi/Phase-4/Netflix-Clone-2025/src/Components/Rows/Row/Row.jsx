import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  console.log("Fetch URL used in Row:", fetchUrl);


  const base_url = "https://image.tmdb.org/t/p/original";
  


  useEffect(() => {
     async function fetchData() {
       try {
        const request = await axios.get(fetchUrl);
       const results = request?.data?.results;
       if (Array.isArray(results)) {
          setMovies(results);
        } else {
          console.warn("No movie results found:", request.data);
          setMovies([]); // fallback to empty array
       }
       } catch (error) {
        console.log("Error fetching movies:", error);
      }
     }

    fetchData();
   }, [fetchUrl]);
  

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer not found:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      <div style={{ padding: "35px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
 }; 

export default Row;
