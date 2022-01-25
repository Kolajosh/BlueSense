import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import BlogComponent from "../BlogComponent";

export default function Blog() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/blog/" />
        <meta
          name="description"
          content="View BlueSense Blog for Related Articles"
        />
        <meta
          name="keywords"
          content="BlueSense blog, bluesense, Business, Consultng, Startups, Intelligence, Blog, Articles"
        />
      </Helmet>
      <BlogComponent />
    </>
  );
}
