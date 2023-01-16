import React from "react";
import Footer from "./Footer";
import Projects from "./Projects";



export default function Contact() {
  return (
    <div id="contact" 
      className="contact-section">
         <h3>Contact Me</h3>
        <p>Need anything? Kindly fill the form below</p>
        <div className="contact-me-content">
          <form>
            <label htmlFor="name"> <span>Name</span>
                <input type="text" />
            </label>
            <br />
            <br />
                    <label htmlFor="email"> <span>Email</span>
                        <input type="text" />
                        </label>
                    <br />
                    <br />
                    <label htmlFor="subject"> 
                        <span>Subject</span>
                        <input type="text" />
                    </label> 
                    <br />
                    <br />
                    <label className="message" 
                    htmlFor="message">
                        <span>Message</span>
                        <textarea name="Message" cols="30" rows="10">
                    </textarea>
                    </label>
                    <button className="send-msg-btn">Send Message</button>
          </form>
        </div>
      <Footer />
    </div>
  );
}

