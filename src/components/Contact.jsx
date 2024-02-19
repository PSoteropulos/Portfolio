import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "./Map";

const Contact = () => {
  const form = useRef();
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        service,
        template,
        form.current,
        {
          publicKey: key
        }
      )
      .then(
        (result) => {
          console.log("Email result ", result)
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          console.log("Email error ", error)
          toast.error("Oops! Something went wrong. Message not sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="psot_portfolio_contact">
          <div className="psot_portfolio_title">
            <div className="title_flex">
              <div className="left">
                <span>Contact</span>
                <h3>Get in Touch</h3>
              </div>
            </div>
          </div>

          <Map />

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="first">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>

                  <li>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </li>

                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </li>
                </ul>
              </div>
              <div className="psot_portfolio_button">
                <button type="submit" className="ib-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
