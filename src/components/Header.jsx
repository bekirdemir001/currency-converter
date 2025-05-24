import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Header.css"
import darkModeIcon from "../assets/darkModeIcon.svg"
import lightModeIcon from "../assets/lightModeIcon.svg"
import menuDarkIcon from "../assets/menuDarkIcon.svg"
import menuLightIcon from "../assets/menuLightIcon.svg"

function Header({theme, setTheme}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <header className='header'>
      <h4>Currency Converter</h4>

      <div className='header-right'>
        <img 
          onClick={() => {toggle_mode()}}
          src={theme == 'light' ? darkModeIcon : lightModeIcon}
          alt="Toggle Icon Not Found" 
          className="toggle"  
        />
        <nav className={menuOpen ? "nav open" : "nav"}>
          <Link className="header-link" to="/currency-converter" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="header-link" to="/currency-converter/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="header-link" to="/currency-converter/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <img 
            src={theme == 'light' ? menuDarkIcon : menuLightIcon}
            alt="Menu Icon Not Found" 
            className='hamburger-menu'
          />
        </div>
      </div>
    </header>
  )
}

export default Header;
