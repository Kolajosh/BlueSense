import React, { useState, useEffect } from "react";
import "./ContactSection.css";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <div>
      <p>Message sent</p>
    </div>
  );
};

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

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    emailjs
      .sendForm(
        "service_ntfhzd8",
        "template_o5527py",
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

    e.target.reset();
    showResult(true);
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

    return errors;
  };

  // hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <>
      <div className='container'>
        <div className='contact-head'>
          <h1>Contact</h1>
          <p>
            Want to connect with <span className='blue'>BlueSense:</span> to
            discuss possible consulting engagements,<br></br>
            please get in touch with us via the info/form below.
          </p>
        </div>

        <form action='' className='form' onSubmit={sendEmail}>
          <div className='field'>
            <p>{formErrors.name}</p>
            <input
              className='t-field'
              type='text'
              name='name'
              placeholder='Name'
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <p>{formErrors.email}</p>
            <input
              className='t-field'
              type='text'
              name='email'
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <p>{formErrors.phone}</p>
            <input
              className='t-field'
              type='text'
              name='phone'
              placeholder='Phone'
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <p>{formErrors.message}</p>
            <textarea
              row='3'
              className='message'
              type='text'
              name='message'
              placeholder='Message'
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <div className='field'>
            <p>{formErrors.subject}</p>
            <input
              className='t-field'
              type='text'
              name='subject'
              placeholder='Subject'
              value={formValues.subject}
              onChange={handleChange}
            />
          </div>
          <div className='button-contact'>
            <button className='c-button'>
              Submit <i class='fas fa-caret-right'></i>
            </button>
            <div className='row'>{result ? <Result /> : null}</div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactSection;
