import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home/Home";
import { MovieInfo } from "./MovieInfo/MovieInfo";
import { MoviesPage } from "./Movies/MoviesPage";
import { TvShows } from "./TvShows/TvShows";
import { MiniSeries } from "./MiniSeries/MiniSeries";

export const AppWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/movie/:id"} exact component={MovieInfo} />
        <Route path={"/movies"} exact component={MoviesPage} />
        <Route path={"/tvshows"} exact component={TvShows} />
        <Route path={"/miniShows"} exact component={MiniSeries} />
      </Switch>
    </Router>
  );
};
