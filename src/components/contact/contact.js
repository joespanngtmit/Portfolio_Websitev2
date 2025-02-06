import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../contact/contact.css";
import logo from "../../assets/logo.png"; // Import your logo
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Footer from "../Footer/Footer"; // Import the Footer component

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

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
        () => {
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
        () => {
          setMessage("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      {loading ? (
        <div className="loading-container">
          <div className="bouncing-ball"></div>
        </div>
      ) : (
        <>
          <h2 className="contact-heading">My Contact</h2>

          {/* Map and Contact Info Section */}
          <div className="map-info-container">
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.348679014678!2d75.7228760748932!3d26.860660962326524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db528a76be157%3A0x6ec1f70a7a7a603a!2sAjay%20Deep%20Garg%2C%20R-152%2C%20R-152%2C%20Narayan%20Vihar%2C%20R-%20Block%2C%20Narayan%20Vihar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1738776377725!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="contact-info">
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-info-text">
                  <h4>Address</h4>
                  <p>R-152, Narayan Vihar, Jaipur, Rajasthan, 302020</p>
                </div>
              </div>
              <div className="contact-info-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <p>rohangoyal264@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <FaPhoneAlt className="contact-icon" />
                <div className="contact-info-text">
                  <h4>Phone</h4>
                  <p>+91 63778 - 16163</p>
                </div>
              </div>
            </div>
          </div>

          {/* "Let's Connect" Section */}
          <div className="connect-form">
            <h3 className="contact-heading">Let's Connect</h3>
            <div className="form-logo-container">
              <div className="logo-container">
                <img src={logo} alt="Logo" className="contact-logo" />
              </div>
              <div className="form-container">
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
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                  />
                  <div className="button-container">
                    <button type="submit">
                      {buttonText}
                      {isSent && <FaPaperPlane className="button-icon" />}
                    </button>
                  </div>
                  {message && <p className="message">{message}</p>}
                </form>
              </div>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="social-icons">
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Facebook profile"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon x-icon"
              aria-label="X (Twitter) profile"
            >
              <FaXTwitter size={30} />
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram profile"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Contact;
