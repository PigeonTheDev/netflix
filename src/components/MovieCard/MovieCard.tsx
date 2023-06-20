import { useState } from "react";
import { Movie } from "../../modals/Movie";
import "./MovieCard.css";
import { useHistory } from "react-router";

interface IMovieCard {
  movie: Movie;
}

export const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const history = useHistory();
  return (
    <div onClick={() => history.push("/movieInfo")} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} className="movieCardWrapper">
      <div className="movieCardImg">
        {/* {movie.primaryImage === null ? (
          <img alt="stockIMG" src="https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" />
        ) : (
          <img src={movie.primaryImage.url} alt={movie.primaryImage.url} />
        )} */}
        <img alt="stockIMG" src="https://m.media-amazon.com/images/M/MV5BZTFiNjdjZTEtZWMwNy00NGQ5LWE4ZWQtZjI2YTI3MzMwMGIyXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg" />
        {hovered ? (
          <div className="cardContent">
            <div className="cardText">{movie.titleText.text}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
