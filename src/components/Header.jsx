import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <h4>Currency Converter</h4>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <Link className="header-link" to="/currency-converter" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="header-link" to="/currency-converter/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link className="header-link" to="/currency-converter/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
