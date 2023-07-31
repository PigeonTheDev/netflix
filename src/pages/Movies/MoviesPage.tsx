import { useHistory } from "react-router";
import { MovieList } from "../../components/MovieList/MovieList";
import { PromotedItemModal } from "../../modals/PromotedItemModal";
import oppie from "./oppie.jpg";
import logo from "./logo.png";

export const MoviesPage = () => {
  const history = useHistory();

  const movieCardClicked = (id: string) => {
    history.push(`movie/${id}`);
  };

  const promotedHome: PromotedItemModal = {
    imageUrl: oppie,
    logoUrl: logo,
    title: "Watch Nolan's Masterpiece Now",
    text: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
  };

  return (
    <>
      <MovieList movieCardClicked={movieCardClicked} item={promotedHome} itemType="movie" />
    </>
  );
};
