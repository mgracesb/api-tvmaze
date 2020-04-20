import React from "react";

const ShowDetails = (props) => {
  const genres = props.filteredShow.genres;

  function windowHandler(evt) {
    evt.preventDefault();
    props.closeWindow();
  }
  return (
    <React.Fragment>
      <div className="buttonBox">
        <button type="button" className="close" onClick={windowHandler}>
          x
        </button>
      </div>
      <img
        src={props.filteredShow.image.medium}
        alt={props.filteredShow.name}
      />
      <h3>{props.filteredShow.name}</h3>
      <p className="rating">{props.filteredShow.rating.average}</p>
      <p>{props.filteredShow.summary}</p>
      <ul className="genreList">
        Genre:
        {genres.map((genre) => (
          <li className="genreLi">{genre}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ShowDetails;
