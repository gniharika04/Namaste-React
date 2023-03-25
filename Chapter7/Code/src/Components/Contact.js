import React, { useState } from "react";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
  };

  const handleReset = () => {
    setSuccessMessage(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src="https://i.pinimg.com/564x/7a/08/03/7a0803f16e1b837da83d0ef9c9823790.jpg"></img>
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <input type="text" placeholder="Name" required></input>
          <input type="email" placeholder="Email" required></input>
          <textarea placeholder="Type your message here..." required></textarea>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          {successMessage && (
            <h4>Thanks for contacting us! We will contact you soon.</h4>
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
