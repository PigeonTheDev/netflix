import { useHistory } from "react-router";
import { MovieList } from "../../components/MovieList/MovieList";
import { PromotedItemModal } from "../../modals/PromotedItemModal";
import narcos from "./narcos.jpg";
import logo from "./logo.png";

export const TvShows = () => {
  const history = useHistory();

  const movieCardClicked = (id: string) => {
    history.push(`movie/${id}`);
  };

  const promotedHome: PromotedItemModal = {
    imageUrl: narcos,
    logoUrl: logo,
    title: "Watch Season 2 Now",
    text: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
  };

  return (
    <>
      <MovieList movieCardClicked={movieCardClicked} item={promotedHome} itemType="tvSeries" />
    </>
  );
};
