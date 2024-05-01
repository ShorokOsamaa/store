import "../App.css";

import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.item.image} alt="IMG" className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" alt="Star" className="card--star" />
        <span>{props.item.rating.rate} </span>
        <span className="gray">({props.item.rating.count}) • </span>
        <span className="gray">{props.item.category}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p>
        <strong className="card--price">${props.item.price}</strong>
      </p>
    </div>
  );
}

export default Card;
