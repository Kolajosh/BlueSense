import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import ContactSection from "../ContactSection";

export default function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | BlueSense</title>
        <link rel="canonical" href="https://www.bluesense.co/contact/" />
        <meta
          name="description"
          content="BlueSense Business Intelligence Management Consulting Firm"
        />
        <meta
          name="keywords"
          content="Business, Consultng, Startups, Intelligence, Strategy, Consult, Contact"
        />
      </Helmet>
      <ContactSection />
    </>
  );
}
