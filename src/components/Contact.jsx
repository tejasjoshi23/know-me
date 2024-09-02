import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils";
// import { RobotCanvas } from "./canvas";
import { UnderwaterBackground } from "./canvas";
import "../styles/Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactno: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_gc67n0p",
        "template_10ccf7k",
        {
          from_name: form.name,
          to_name: "Tejas Joshi",
          from_email: form.email,
          to_email: "tejasj1823@gmail.com",
          message: form.message,
        },
        "TznmkQMgV5WRg9NvN"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Your message has been received, and rest assured, I'll circle back to you at the earliest opportunity."
          );
          setForm({
            name: "",
            email: "",
            contactno: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <div className="contact-container">
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideIn("left", "tween", 0.2, 1)}
          className="contact-form"
        >
          <p className="section-sub-text">Let's Connect</p>
          <h3 className="section-head-text ">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="form">
            <label className="form-label">
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="form-input"
              />
            </label>
            <label className="form-label">
              <span>Your E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="form-input"
              />
            </label>
            <label className="form-label">
              <span>Your Mobile Number</span>
              <input
                type="tel"
                name="contactno"
                value={form.contactno}
                onChange={handleChange}
                placeholder="What's your mobile number?"
                className="form-input"
              />
            </label>
            <label className="form-label">
              <span>Your Message</span>
              <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="form-textarea"
              />
            </label>
            <button type="submit" className="form-button">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="earth-canvas"
        >
          {/* <RobotCanvas /> */}
        </motion.div>
      </div>
      <UnderwaterBackground />
    </div>
  );
};

export default Contact;
