import React from "react";
import "./Card.css";

export const Card = ({ props }) => {
  const [img, title, year] = props;
  return (
    <div className="Card">
      <img src={img} alt={title} />
      <div className="container">
        <h4>{title}</h4>
        <p>Year: {year}</p>
      </div>
    </div>
  );
};
