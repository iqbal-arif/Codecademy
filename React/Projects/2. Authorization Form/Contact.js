import React, { useState } from "react";

function Contact() {
  const password = "swordfish";
  const [authorized, setAuthorized] = useState(true);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]'
    ).value;
    const auth = enteredPassword == password;
    setAuthorized(auth);
  }
  !authorized ?(h1Text = <h1>Contact</h1>)
    : (h1Text = <h1>Enter the Password</h1>);
  return (
    <div id="authorization">
      <h1>{h1Text}</h1>
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    </div>
  );
}

export default Contact;
