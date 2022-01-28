import React, { useState } from "react";
import logo from "../images/bluesenselogo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo"></img>
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="nav-links" onClick={closeMobileMenu}>
              Core <i class="fas fa-caret-down" />
              {dropdown && <Dropdown />}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/blog" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
