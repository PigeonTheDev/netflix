import React, { useEffect, useState } from "react";
import { MoviesRow } from "../MoviesRow/MoviesRow";
import api from "../../api/API";
import "./MovieList.css";
import { TailSpin } from "react-loader-spinner";
import { GenreMovie } from "../../modals/GenreMovies";
import { PromotedItem } from "../PromotedItem/PromotedItem";
import { PromotedItemModal } from "../../modals/PromotedItemModal";

interface IMovieList {
  movieCardClicked: (id: string) => void;
  itemType?: string;
  item: PromotedItemModal;
}
const API = new api();
export const MovieList: React.FC<IMovieList> = ({ movieCardClicked, itemType, item }) => {
  const [genreMovies, setGenreMovies] = useState<GenreMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    API.combo
      .genreCombo(itemType)
      .then((data) => setGenreMovies(data))
      .finally(() => setLoading(false));
  }, [itemType]);
  return (
    <>
      <PromotedItem item={item} />
      {loading ? (
        <div className="loadingWrapper">
          <TailSpin height="100" width="100" color="#E50914" ariaLabel="tail-spin-loading" radius="0" />
        </div>
      ) : (
        <div className="movieList">
          {genreMovies.map((genreMovie, i) => (
            <MoviesRow key={i} genreMovie={genreMovie} movieCardClicked={movieCardClicked} />
          ))}
        </div>
      )}
    </>
  );
};
