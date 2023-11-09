import React from "react";
import Products from "../Products/Products";
import ItemListContainer from "../pages/ItemListContainer/ItemListContainer";
import ItemCount from "../ItemCount/ItemCount";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img src="/assets/bg.jpg" className="card-img" alt="Fondo" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder">CONSTRUYE TU CAMINO</h5>
          <p className="card-text lead ">
            PRODUCTOS DE PRIMERA CALIDAD PARA QUE ARMES TU LADO FITNESS DESDE CERO
          </p>
            </div>
        </div>
      </div>
      <ItemListContainer/>
    </div>
  );
};

export default Home;
