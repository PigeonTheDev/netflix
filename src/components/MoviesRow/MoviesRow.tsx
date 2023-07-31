import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MoviesRow.css";
import { GenreMovie } from "../../modals/GenreMovies";

interface IMoviesRow {
  genreMovie: GenreMovie;
  movieCardClicked: (id: string) => void;
}

export const MoviesRow: React.FC<IMoviesRow> = ({ genreMovie, movieCardClicked }) => {
  return (
    <>
      <div>
        <div className="rowGenre">{genreMovie.genre}</div>
        <div className="moviesRow">
          <Swiper spaceBetween={10} slidesPerView={8}>
            {genreMovie.movies.map((movie, i) => (
              <SwiperSlide key={i}>
                <MovieCard movie={movie} key={i} movieCardClicked={movieCardClicked} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
