import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../contact/contact.css";
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false); 
  const [buttonText, setButtonText] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "rohan_37",
        "template_uyncwed",
        form.current,
        "gJbxjpBvMAj9lBzo8"
      )
      .then(
        (result) => {
          setMessage("Message Sent Successfully!");
          setIsSent(true); 
          setButtonText("Sent"); 
          e.target.reset();
          setTimeout(() => {
            setMessage("");
            setIsSent(false); 
            setButtonText("Send");
          }, 3000);
        },
        (error) => {
          setMessage("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-content">
        <div className="map-container">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.348679014678!2d75.7228760748932!3d26.860660962326524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db528a76be157%3A0x6ec1f70a7a7a603a!2sAjay%20Deep%20Garg%2C%20R-152%2C%20R-152%2C%20Narayan%20Vihar%2C%20R-%20Block%2C%20Narayan%20Vihar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1738776377725!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">
            {buttonText}
            <FaPaperPlane />
          </button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      {/* Footer Section */}
      <footer className="contact-footer">
        <p>&copy; 2025 Rohan Goyal. All Rights Reserved.</p>
      </footer>

      <div className={`message ${isSent ? "sent" : ""}`}>
        {message}
        {isSent && <FaPaperPlane className="message-icon" />}
      </div>
    </div>
  );
};

export default Contact;
