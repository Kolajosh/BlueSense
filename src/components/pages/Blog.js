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
          content="BlueSense Business Intelligence Management Consulting Firm"
        />
        <meta
          name="keywords"
          content="bluesense blog, Business, Consultng, Startups, Intelligence, Blog, Articles"
        />
      </Helmet>
      <BlogComponent />
    </>
  );
}
