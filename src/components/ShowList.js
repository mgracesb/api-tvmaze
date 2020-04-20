import React from "react";
import Show from "./Show";
import ShowDetails from "./ShowDetails";

class ShowList extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.keyupValue = this.keyupValue.bind(this);
    this.keyupHandler = this.keyupHandler.bind(this);
    this.state = {
      error: null,
      shows: [],
      showDetails: "",
      filterShow: "",
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://api.tvmaze.com/shows";
    fetch(proxyurl + url)
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({ shows: data });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  clickHandler(value) {
    this.setState((prevState) => {
      return { ...prevState, showDetails: value };
    });
  }

  closeWindow() {
    this.setState((prevState) => {
      return { ...prevState, showDetails: "" };
    });
  }

  keyupValue(evt) {
    let data = evt.currentTarget.value;
    this.keyupHandler(data);
  }
  keyupHandler(data) {
    this.setState((prevState) => {
      return { ...prevState, filterShow: data };
    });
  }

  render() {
    const details = this.state.showDetails;
    return (
      <div className="showListContainer">
        <div className="inputContainer">
          <label htmlFor="inputText" className="inputLabel">
            Search your Show:
          </label>
          <input
            type="text"
            id="inputText"
            className="inputText"
            onChange={this.keyupValue}
          ></input>
        </div>
        <ul className="showList">
          {this.state.shows.map((showObject) => (
            <Show
              key={showObject.id}
              img={showObject.image.medium}
              name={showObject.name}
              rating={showObject.rating.average}
              state={showObject.status}
              value={showObject.id}
              clickHandler={this.clickHandler}
            />
          ))}
        </ul>
        <div className={details !== "" ? "showDetails" : "hidden"}>
          {this.state.shows
            .filter((show) => show.id === details)
            .map((filteredShow) => (
              <ShowDetails
                filteredShow={filteredShow}
                key={filteredShow.id}
                closeWindow={this.closeWindow}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default ShowList;
