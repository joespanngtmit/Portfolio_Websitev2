import React, { useEffect } from "react";

function ConnectMe() {
  useEffect(() => {
    // Disable scroll when hovering over the section
    const disableScroll = () => {
      document.body.style.overflow = "hidden"; // Disable scroll
    };

    // Enable scroll when exiting the section
    const enableScroll = () => {
      document.body.style.overflow = "auto"; // Enable scroll
    };

    const connectMeSection = document.getElementById("connect-me");
    connectMeSection.addEventListener("mouseenter", disableScroll);
    connectMeSection.addEventListener("mouseleave", enableScroll);

    // Cleanup the event listeners
    return () => {
      connectMeSection.removeEventListener("mouseenter", disableScroll);
      connectMeSection.removeEventListener("mouseleave", enableScroll);
    };
  }, []);

  return (
    <section
      id="connect-me"
      className="connect-me-section"
      aria-labelledby="connect-me-title"
    >
      <div className="card-container">
        <h2 id="connect-me-title">Connect with Me</h2>
        <p>Feel free to reach out on any of the following platforms:</p>
        <div className="social-icons" aria-label="Social media links">
          <a
            href="https://www.instagram.com/rohan_agarwal_37"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            aria-label="Instagram profile"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/goyal-rohan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/37rohan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/Rohangoyal2616/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            aria-label="Facebook profile"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Faggarwalrohan37"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon x"
            aria-label="X profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCWpS6Gzy2sI_jgOz2Of239A"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
            aria-label="YouTube channel"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConnectMe;