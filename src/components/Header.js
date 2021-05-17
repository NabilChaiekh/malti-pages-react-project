import React from 'react'
// import './Header.css'
import { Link, withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faLinkedin,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

 function Header() {
  return (
    <div className="Header">
      
      <div class="row">
        <div class="col-md-4 col-12 text-center ">
          <h2 class="my-md-3 site-title ">e-Store</h2>
        </div>
        <div class="col-md-4 col-12 text-right">
          <p class="my-md-4 header-links">
          <Link class="nav-link" to="/login">Log in </Link>
          </p>
        </div>
        
        <div class="col-md-4 col-sm-12 col-12 ">
          <div class="social-container">
            <a href="https://www.youtube.com/"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.linkedin.com/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.twitter.com/" 
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div> 
    </div>
  )
}
export default withRouter(Header);
