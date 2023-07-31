import { Movie } from "../../modals/Movie";
import "./MovieCard.css";

interface IMovieCard {
  movie: Movie;
  movieCardClicked: (id: string) => void;
}

export const MovieCard: React.FC<IMovieCard> = ({ movie, movieCardClicked }) => {
  return (
    <div onClick={() => movieCardClicked(movie.id)} className="movieCardWrapper">
      <div className="movieCardImg">
        {movie.primaryImage === null ? (
          <img alt="stockIMG" src="https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" />
        ) : (
          <img src={movie.primaryImage.url} alt={movie.primaryImage.url} />
        )}
        {/* <img alt="stockIMG" src="https://m.media-amazon.com/images/M/MV5BZTFiNjdjZTEtZWMwNy00NGQ5LWE4ZWQtZjI2YTI3MzMwMGIyXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg" /> */}
        {/* {hovered ? (
          <div className="cardContent">
            <div className="cardText">{movie.titleText.text}</div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};
