import { useEffect, useState } from "react";
import { Movie } from "../../modals/Movie";
import { useHistory, useParams } from "react-router";
import { Ratings } from "../../modals/Ratings";
import api from "../../api/API";
import { PromotedItem } from "../../components/PromotedItem/PromotedItem";

const API = new api();

export const MovieInfo = () => {
  const [ratings, setRatings] = useState<Ratings>({ averageRating: 0, numVotes: 0 });
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    API.getRating(id).then((ratings) => setRatings(ratings.results));
  }, [id]);

  console.log(ratings);
  return (
    <>
      {/*  <PromotedItem /> */}
      <div onClick={() => history.push("/")} style={{ color: "white" }}>
        {ratings.averageRating}
      </div>
    </>
  );
};
