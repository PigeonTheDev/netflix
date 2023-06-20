import { useState } from "react";
import { Movie } from "../../modals/Movie";
import "./MovieCard.css";
import { useHistory } from "react-router";

interface IMovieInfo {
  movie: Movie;
}

export const MovieCard: React.FC<IMovieInfo> = ({ movie }) => {
  return <>a</>;
};
