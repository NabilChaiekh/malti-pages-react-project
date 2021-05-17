
import React from 'react'
import { Link, withRouter } from "react-router-dom";
// import './Nav.css'


function Nav(props) {
  return (
  <div className="navigation">
    <nav class="navbar navbar-expand navbar-dark bg-white">
      <div class="container">
        <ul class="navbar-nav ml-auto">
            <li
              class={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/">
                HOME
                <span class="sr-only"></span>
              </Link>
            </li>
            <li
              class={`nav-item  ${
                props.location.pathname === "/indoor" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/indoor">
                INDOOR FURNITURE 
              </Link>
            </li>
            <li
              class={`nav-item  ${
                props.location.pathname === "/outdoor" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/outdoor">
              OUTDOOR FURNITURE
              </Link>
            </li>
            <li
              class={`nav-item  ${
                props.location.pathname === "/location" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/location">
                LOCATION
              </Link>
            </li>
            <li
              class={`nav-item  ${
                props.location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/contact">
                CONTACT 
              </Link>
            </li>
        </ul> 
      </div>

      <div class="navbar-nav">
                      <li class="nav-item border rounded-circle mx-2 search-icon">
                        <i class="fas fa-search p-2"></i>
                        </li>
                      <li class="nav-item border rounded-circle mx-2 cart-icon">
                        <i class="fas fa-shopping-cart p-2"></i>
                      </li>
                  </div>
    </nav>
  </div>
  );
}

export default withRouter(Nav);