import React from "react";
import "./styles.css";

const Item = ({ title, description, price, image }) => {
  return (
    <div className="card-container">
      <h6 className="card-title">{title}</h6>
      <img src={image} alt={title} width={70} />
      <div>
        <p>{description}</p>
      </div>
      <p>${price}</p>
    </div>
  );
};

export default Item;
