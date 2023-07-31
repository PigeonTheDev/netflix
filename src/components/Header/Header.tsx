import { useHistory } from "react-router";
import "./Header.css";

export const Header = () => {
  //console.log(movieData);
  const history = useHistory();

  return (
    <div className="headerGeneral">
      <span className="headerList">
        <div className="headerLogo" />
        <li onClick={() => history.push("/tvshows")}>TV Shows</li>
        <li onClick={() => history.push("/movies")}>Movies</li>
        <li onClick={() => history.push("/miniShows")}>Mini Series</li>
      </span>
      <span className="headerRight"></span>
    </div>
  );
};
