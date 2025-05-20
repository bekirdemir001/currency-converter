import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App () {

  return (
    <Router>
      <div className="app-container">
        <Header/>
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