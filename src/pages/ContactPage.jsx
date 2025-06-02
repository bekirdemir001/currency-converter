import React, { useState } from 'react'
import "../css/ContactPage.css"

function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        Do you have feedback, questions, or suggestions about this application?
        Feel free to get in touch!
      </p>

      <ul>
        <li>Email: <a href="mailto:bekirdemir001@gmail.com">bekirdemir001@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/bekirdemir001" target="_blank" rel="noopener noreferrer">github.com/bekirdemir001</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/bekir-demir/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bekir-demir/</a></li>
      </ul>

      <p>
        I'll try to respond as soon as possible. Thank you for using the app!
      </p>
    </div>
  )
}

export default ContactPage