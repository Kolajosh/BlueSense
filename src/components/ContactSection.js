import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./ContactSection.css";
import emailjs from "emailjs-com";

function ContactSection(props) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !formValues.message ||
      !formValues.email ||
      !formValues.name ||
      !formValues.phone ||
      !formValues.subject
    ) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
      emailjs
        .sendForm(
          "service_wevcbf6",
          "template_envdqpg",
          e.target,
          "user_sc09DmLC2475WRQJDOeWU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setFormErrors(validate(formValues));

    e.target.reset();
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.message) {
      errors.message = "Kindly input your message here";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
    }
    if (
      !formValues.message ||
      !formValues.email ||
      !formValues.name ||
      !formValues.subject ||
      !formValues.phone
    ) {
      errors.submit = "Message not sent";
    } else {
      errors.submit = "Message Sent";
    }

    return errors;
  };

  // hide result
  setTimeout(() => {
    setFormErrors(false);
  }, 5000);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | BlueSense</title>
        <link rel="canonical" href="https://bluesense.co/contact" />
        <meta
          name="description"
          content="BlueSense Business Intelligence Management Consulting Firm"
        />
        <meta
          name="keywords"
          content="Business, Consultng, Startups, Intelligence, Strategy, Consult, Contact"
        />
      </Helmet>
      <div className="container">
        <div className="contact-head">
          <h1>Contact</h1>
          <p>
            Want to connect with <span className="blue">BlueSense:</span> to
            discuss possible consulting engagements,<br></br>
            please get in touch with us via the info/form below.
          </p>
        </div>

        <form action="" className="form" onSubmit={sendEmail}>
          <div className="field">
            <p className="t-red">{formErrors.name}</p>
            <input
              className="t-field"
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <p className="t-red">{formErrors.email}</p>
            <input
              className="t-field"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <p className="t-red">{formErrors.phone}</p>
            <input
              className="t-field"
              type="text"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <p className="t-red">{formErrors.message}</p>
            <textarea
              className="message"
              rows=""
              type="text"
              name="message"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <p className="t-red">{formErrors.subject}</p>
            <input
              className="t-field"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formValues.subject}
              onChange={handleChange}
            />
          </div>
          <div className="button-contact">
            <button className="c-button">
              Submit <i class="fas fa-caret-right"></i>
            </button>
            <p className="t-red">{formErrors.submit}</p>
          </div>
        </form>

        <form action="" className="form-mobile" onSubmit={sendEmail}>
          <div className="field">
            <p className="t-red">{formErrors.name}</p>
            <input
              className="t-field"
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <p className="t-red">{formErrors.email}</p>
            <input
              className="t-field"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <p className="t-red">{formErrors.phone}</p>
            <input
              className="t-field"
              type="text"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <div className="field">
              <p className="t-red">{formErrors.subject}</p>
              <input
                className="t-field"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formValues.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <p className="t-red">{formErrors.message}</p>
            <textarea
              className="message"
              type="text"
              name="message"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <div className="button-contact">
            <button className="c-button">
              Submit <i class="fas fa-caret-right"></i>
            </button>
            <p className="t-red">{formErrors.submit}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactSection;
