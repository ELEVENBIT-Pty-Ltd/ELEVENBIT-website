"use client"

import { useState } from "react"
import "./Navbar.css"
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCartOpen = () => {
    onCartOpen(true)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    onCartOpen(false)
  }

  return (
    <div className={`myNavBar ${isMenuOpen ? "active" : ""}`}>
      <div className="myNavBarLogo">
        <a href="#Home" onClick={closeMenu}>
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-png-transparent-1.png"
            alt="logo"
          />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="myLinks">
        <li className="myLink">
          <a href="#Home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="myLink">
          <a href="#About" onClick={closeMenu}>
            About Us
          </a>
        </li>
        <li className="myLink">
          <a href="#Services" onClick={closeMenu}>
            Our Services
          </a>
        </li>
        <li className="myLink">
          <a href="#Connect" onClick={closeMenu}>
            Lets Talk
          </a>
        </li>
        <li className="myLink">
          <a href="#Cart" onClick={handleCartOpen}>
            <ShoppingCart size={18} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
