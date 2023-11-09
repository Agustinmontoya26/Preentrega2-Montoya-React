import React from "react";
import './styles.css'
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" to="#">
          <div>
          <img src="/assets/logo.png" alt="logo" width={'150px'}/>
        <h1>Build-UR-Life</h1>
         </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item" id="home">
                <Link className="nav-link active" aria-current="page" to="/category/electronics">
                  Electronic
                </Link>
              </li>
              <li className="nav-item" id="product">
                <Link className="nav-link" to={"/category/men´s-clothing"}>
                  Men´s clothing
                </Link>
              </li>
              <li className="nav-item" id="us">
                <Link to={"/category/women´s-clothing"} className="nav-link" >
                  Women´s clothing
                </Link>
              </li>
              <li className="nav-item" id="contact">
                <Link className="nav-link"  to={"/category/jewelery"}>
                  Jewelery
                </Link>
              </li>
            </ul>
            <div className="buttons">
                <a href="" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i> Login</a>
                    <a href="." className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i> Register</a>
                    <a href="." className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i> Cart (0)</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
