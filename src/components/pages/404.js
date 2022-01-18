import React from "react";
import { Link } from "react-router-dom";
import "../404.css";

function custom404() {
  return (
    <>
      <div className="error404">
        <h1>404 Page Not Found!</h1>
        <p>
          The page you're looking for does not exist! Click
          <Link to="/" className="home-link">
            {" "}
            here
          </Link>{" "}
          to return to the homepage
        </p>
      </div>
    </>
  );
}

export default custom404;
