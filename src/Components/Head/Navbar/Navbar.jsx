import React, { useState } from "react";
import "./Navabar.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgClose, CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar_container">
      <Link to="/">
        <div className="logo_container">
          <p>SHOPE</p>
          <img src="https://shopx.in/images/fav.png" alt="logo_thumnail" />
        </div>
      </Link>
      <div className="navlinks_conatiner">
        <div className="mobile_Menu_Icon">
          {isMobile ? (
            <CgClose onClick={() => setIsMobile(!isMobile)} />
          ) : (
            <CgMenu onClick={() => setIsMobile(!isMobile)} />
          )}
        </div>
        <ul className={`nav_links ${isMobile ? "show" : "hide"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
          <li>
            <BsCart4 />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
