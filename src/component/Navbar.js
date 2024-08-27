import "./Navbar.css"; // Import the CSS file
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      {/* Reference to the top of the page to observe scrolling */}

      {/* Navbar */}
      <nav>
        <div className="link">
          <Link className="link" to="/NewsApp">
            Home
          </Link>
          <Link className="link" to="/business">
            Business
          </Link>
          <Link className="link" to="/entertainment">
            Entertainment
          </Link>
          <Link className="link" to="/general">
            General
          </Link>
          <Link className="link" to="/health">
            Health
          </Link>
          <Link className="link" to="/science">
            Science
          </Link>
          <Link className="link" to="/sports">
            Sports
          </Link>
          <Link className="link" to="/technology">
            Technology
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
