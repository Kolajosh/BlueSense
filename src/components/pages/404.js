import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../404.css";

function custom404() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 PageNotFounnd</title>
      </Helmet>
      <div className="error404">
        <h1>404 Page Not Found!</h1>
        <p>
          The page you're looking for does not exist! Click
          <Link to="/" className="home-link">
            {" "}
            here
          </Link>{" "}
          to return to the homepage.
        </p>
      </div>
    </>
  );
}

export default custom404;
