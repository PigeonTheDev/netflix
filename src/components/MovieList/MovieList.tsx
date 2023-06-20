import React, { useEffect, useState } from "react";
import { MoviesRow } from "../MoviesRow/MoviesRow";
import api from "../../api/API";
import "./MovieList.css";

//Burda combo request atıcan movieleri genreye göre ayırıp moviesRow'a atıcaksın. movie array göndercen yani
export const MovieList = () => {
  const API = new api();
  const [genres, setGenres] = useState<string[]>([]);
  useEffect(() => {
    API.getGenres().then((genres) => setGenres(genres.results));
  }, []);

  return (
    <div className="movieList">
      {genres.map((genre, i) => (
        <MoviesRow key={i} genre={genre} />
      ))}
    </div>
  );
};
