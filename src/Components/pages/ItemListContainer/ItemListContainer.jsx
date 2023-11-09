import React, { useState, useEffect } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import ItemList from "../../ItemList/ItemList";
import './styles.css'

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>item list</h1>
      <ItemCount />
      <ItemList productList = {productList} />
    </div>
  );
};

export default ItemListContainer;
