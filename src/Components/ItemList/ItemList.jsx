import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ productList }) => {
  return (
    <div className="item-list-container">
      {productList.map((product) => (
        <Link to={'item/' + product.id} key={product.id}>
          <Item
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
