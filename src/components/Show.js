import React from "react";

const Show = (props) => {
  const clickListener = (evt) => {
    const liValue = evt.currentTarget.value;
    props.clickHandler(liValue);
  };
  return (
    <li className="individualShow" onClick={clickListener} value={props.value}>
      <img src={props.img} alt={props.img} className="showImg" />
      <h2>{props.name}</h2>
      <p>{props.rating}</p>
      <p>{props.state}</p>
    </li>
  );
};

export default Show;
