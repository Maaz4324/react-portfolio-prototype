import React from "react";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_head">
        <h1>Get in touch</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit,
          dolor nesciunt numquam aperiam temporibus!
        </h4>
        <div className="contact_no">
          <h3>maazahmed4324@gmail.com</h3>
          <h3>+91 9831139844</h3>
        </div>
      </div>
      <div className="social_container">
        <h2>Find me here</h2>
        <div className="social_media_links">
          <div className="twitter_link">
            <a href="https://twitter.com/iamMaazHamed" target="_blank">
              <h3>TWITTER</h3>
            </a>
          </div>
          <div className="linkedin_link">
            <a href="" target="_blank">
              <h3>LINKEDIN</h3>
            </a>
          </div>
          <div className="github_link">
            <a href="https://github.com/Maaz4324" target="_blank">
              <h3>GITHUB</h3>
            </a>
          </div>
          <div className="youtube_link">
            <a href="" target="_blank">
              <h3>YOUTUBE</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
