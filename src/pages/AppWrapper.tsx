import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home/Home";

export const AppWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={Home} />
      </Switch>
    </Router>
  );
};
