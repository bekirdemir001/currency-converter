import React from 'react'
import "../css/AboutPage.css"

function AboutPage() {
  return (
    <div className="about-container">
      <h2>About This Application</h2>
      <p>
        This Currency Converter application was built using <strong>React</strong> to improve frontend development skills.
        It fetches real-time currency exchange data from the free API provided by{' '}
        <a href="https://freecurrencyapi.com/" target="_blank" rel="noopener noreferrer">
          freecurrencyapi.com
        </a>.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Fully <strong>responsive design</strong> for desktop and mobile devices</li>
        <li>Support for both <strong>light and dark themes</strong></li>
        <li><strong>Modular file structure</strong> for better code organization and maintenance</li>
      </ul>
      <p>
        📂 You can view the full source code and contribute on GitHub:<br />
        <a href="https://github.com/bekirdemir001/currency-converter" target="_blank" rel="noopener noreferrer">
          https://github.com/bekirdemir001/currency-converter
        </a>
      </p>
    </div>
  )
}

export default AboutPage