import api from "../../api/API";
import { Movie } from "../../modals/Movie";
import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { TailSpin } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MoviesRow.css";

interface IMoviesRow {
  genre: string;
}

//burda gelen movie arrayı maplayip movies e atıcan
export const MoviesRow: React.FC<IMoviesRow> = ({ genre }) => {
  const [movies1, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const API = new api();

  useEffect(() => {
    if (genre !== null) {
      setLoading(true);
      API.getTitles({ genre: `${genre}`, limit: "50" })
        .then((movies) => setMovies(movies.results))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingWrapper">
          <TailSpin height="100" width="100" color="#E50914" ariaLabel="tail-spin-loading" radius="0" />
        </div>
      ) : (
        <div>
          <div className="rowGenre">{genre}</div>
          <div className="moviesRow">
            <Swiper spaceBetween={10} slidesPerView={8}>
              {movies1.map((movie, i) => (
                <SwiperSlide>
                  <MovieCard movie={movie} key={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};
