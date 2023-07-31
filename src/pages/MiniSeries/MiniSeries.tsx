import { useHistory } from "react-router";
import { MovieList } from "../../components/MovieList/MovieList";
import { PromotedItemModal } from "../../modals/PromotedItemModal";
import gambit from "./gambit.jpg";
import logo from "./logo.png";

export const MiniSeries = () => {
  const history = useHistory();

  const movieCardClicked = (id: string) => {
    history.push(`movie/${id}`);
  };

  const promotedHome: PromotedItemModal = {
    imageUrl: gambit,
    logoUrl: logo,
    title: "Watch Season 2 Now",
    text: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
  };

  return (
    <>
      <MovieList movieCardClicked={movieCardClicked} item={promotedHome} itemType="tvMiniSeries" />
    </>
  );
};
