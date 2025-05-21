import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = ({ onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    onCartOpen(false)
  }

  return (
    <div className={`myNavBar ${isMenuOpen ? "active" : ""} ${scrolled ? "scrolled" : ""}`}>
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

      {/* HOME */}
      <ul className="myLinks">
        <li className="myLink">
          <a href="#Home" onClick={closeMenu}>
            Home
          </a>
        </li>

        {/* ABOUT */}
        <li className="myLink">
          <a href="#About" onClick={closeMenu}>
            About
          </a>
        </li>

        {/* SERVICES */}
        <li className="myLink">
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>

        {/* PROJECTS */}
        <li className="myLink">
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        {/* CONTACT US */}
        <li className="myCartLink">
          <button className="cartButton">
            <a href="#Connect" onClick={closeMenu} className="contact-us">
              CONTACT US
            </a>
          </button>
        </li>

        {/* CONTACT US */}
        <li className="myCartLink-second">
          <button className="cartButton">
            <a href="#Connect" onClick={closeMenu} className="contact-us">
              CART
            </a>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar