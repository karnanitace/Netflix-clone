import React, { useState, useEffect } from "react";
import axios from "../axios";


const Row = ({ title, fetchURL, isLargeRow, modal }) => {
  const [movies, setMovies] = useState([]);

  // const [movieDetail, setMovieDetail] = useState({});


  const img_baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  const openModal = (movie) =>  {
    // setMovieDetail(movie);
    modal(movie);
  }

  return (
    
       <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row_posterLarge"}`}
            src={`${img_baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => openModal(movie)}
            
          />
          
         
        ))}
      </div>
     
    </div>
    

   
  );
};

export default Row;
