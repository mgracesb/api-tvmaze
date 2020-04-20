import React from "react";
import enter from "../img/tv.svg";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <Link className="links" to="/tvmaze">
          <img src={enter} alt="go to tv maze" className="landingEnter" />
        </Link>
      </div>
    );
  }
}

export default Landing;
