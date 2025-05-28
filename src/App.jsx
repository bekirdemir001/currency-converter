import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App () {
  const currentTheme = localStorage.getItem("currencyTheme");
  const[theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currencyTheme", theme);
  },[theme])

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Header theme={theme} setTheme={setTheme}/>
          <main className="content">
            <Routes>
              <Route path="/currency-converter/" element={<HomePage />} />
              <Route path="/currency-converter/about" element={<AboutPage />} />
              <Route path="/currency-converter/contact" element={<ContactPage />} />
            </Routes>
          </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App