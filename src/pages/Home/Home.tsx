import { useHistory } from "react-router";
import { MovieList } from "../../components/MovieList/MovieList";
import { PromotedItemModal } from "../../modals/PromotedItemModal";
import lcdp from "./lcdp.jpg";
import logo from "./logo.png";

export const Home = () => {
  const history = useHistory();

  const movieCardClicked = (id: string) => {
    history.push(`movie/${id}`);
  };

  const promotedHome: PromotedItemModal = {
    imageUrl: lcdp,
    logoUrl: logo,
    title: "Watch Part 3 Now",
    text: "With millions of euros and their lives on the line, nine robbers attempt to pull off the greatest heist of all time",
  };

  return (
    <>
      <MovieList movieCardClicked={movieCardClicked} item={promotedHome} />
    </>
  );
};
