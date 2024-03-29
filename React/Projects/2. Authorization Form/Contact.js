import React, { useState } from "react";

function Contact() {
  const password = "swordfish";
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]'
    ).value;
    const auth = enteredPassword == password;
    setAuthorized(auth);
  }
  const login = (
    <form action="#" onSubmit={handleSubmit} >
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );
  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

  // In ternary operator  define the full HTML element insied div, such as
  /*
  <div id="authorization">
          <h1>Contact</h1>
          {contactInfo}
        </div>)
  */
 return authorized ? (
        <div id="authorization">
          <h1>Contact</h1>
          {contactInfo}
        </div>) : ( <div id="authorization">
          <h1>Enter the Password</h1>
          {login}
        </div>)
}

export default Contact;