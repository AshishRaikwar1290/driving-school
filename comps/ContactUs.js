import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactUs() {
  const form = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_CONTACT,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PASSWORD
      )
      .then(
        (result) => {
          toast("message sent successfully!");
        },
        (error) => {
          toast("error sending message, try again!");
        }
      );
  }

  return (
    <div className="contact_us_section" id='contact_us'>
      <div className="form-main">
        <div className="main-wrapper">
          <h2 className="form-head">Contact Form</h2>
          <form ref={form} onSubmit={handleSubmit} className="form-wrapper">
            <div className="form-card">
              <input
                className="form-input"
                type="text"
                name="from_name"
                required
              />
              <label className="form-label" htmlFor="name">
                Full Name
              </label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="email"
                name="email"
                required
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="tel"
                name="phone_number"
                required
              />
              <label className="form-label" htmlFor="phone_number">
                Phone number
              </label>
            </div>

            <div className="form-card">
              <textarea
                className="form-textarea"
                maxLength="420"
                rows="3"
                name="message"
                required
              ></textarea>
              <label className="form-textarea-label" htmlFor="message">
                Message
              </label>
            </div>
            <div className="btn-wrap">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
