import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Landing from "./components/Landing";
import ShowList from "./components/ShowList";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="wrapper">
        <header>
          <nav>
            <ul className="navList">
              <li>
                <Link className="links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="links" to="/tvmaze">
                  TvMaze
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/tvmaze" component={ShowList} />
        </Switch>
      </div>
    );
  }
}

export default App;
