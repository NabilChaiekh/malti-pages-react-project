import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faLinkedin,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
function SocialFollow() {
  return (
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
  );
}

export default SocialFollow;