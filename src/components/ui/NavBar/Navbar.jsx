
import { useState, useEffect, useRef } from "react"
import "./Navbar.css"

const Navbar = ({ onCartOpen, cartItemCount = 3 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [cartBounce, setCartBounce] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Animate bubbles
    const bubbles = document.querySelectorAll(".nav-bubble")
    bubbles.forEach((bubble) => {
      setInterval(() => {
        const xPos = Math.random() * 10 - 5
        const yPos = Math.random() * 10 - 5
        bubble.style.transform = `translate(${xPos}px, ${yPos}px)`
      }, 3000)
    })

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = (linkName) => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
    if (linkName) setActiveLink(linkName)
  }

  const handleCartClick = (e) => {
    e.preventDefault()
    setCartBounce(true)
    setTimeout(() => setCartBounce(false), 300)
    onCartOpen(true)
    closeMenu()
  }

  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""} ${scrolled ? "scrolled" : ""}`} ref={navRef}>
      {/* Decorative bubbles */}
      <div className="nav-bubbles-container">
        <div className="nav-bubble bubble-1"></div>
        <div className="nav-bubble bubble-2"></div>
        <div className="nav-bubble bubble-3"></div>
      </div>

      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#Home" onClick={() => closeMenu("Home")}>
            <h2>
              Eleven<span>Bit</span>
            </h2>
            <div className="logo-accent"></div>
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="span-one"></span>
          <span className="span-two"></span>
          <span className="span-three"></span>
          {cartItemCount > 0 && <div className="cart-badge">{cartItemCount}</div>}
        </div>

        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li className={`navbar-link ${activeLink === "Home" ? "active" : ""}`}>
              <a href="#Home" onClick={() => closeMenu("Home")}>
                <span className="link-text">Home</span>
              </a>
            </li>

            <li className={`navbar-link ${activeLink === "About" ? "active" : ""}`}>
              <a href="#About" onClick={() => closeMenu("About")}>
                <span className="link-text">About</span>
              </a>
            </li>

            <li className={`navbar-link ${activeLink === "Services" ? "active" : ""}`}>
              <a href="#Services" onClick={() => closeMenu("Services")}>
                <span className="link-text">Services</span>
              </a>
            </li>

            <li className="navbar-cta">
              <a href="#Connect" onClick={() => closeMenu("Connect")} className="contact-button">
                <span>Contact Us</span>
                <div className="button-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
              </a>
            </li>

            <li className="navbar-cart">
              <button
                className={`cart-button ${cartBounce ? "bounce" : ""}`}
                onClick={handleCartClick}
                aria-label="Shopping Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-links">
            <li className={`mobile-link ${activeLink === "Home" ? "active" : ""}`}>
              <a href="#Home" onClick={() => closeMenu("Home")}>
                <span className="link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                <span>Home</span>
              </a>
            </li>

            <li className={`mobile-link ${activeLink === "About" ? "active" : ""}`}>
              <a href="#About" onClick={() => closeMenu("About")}>
                <span className="link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </span>
                <span>About</span>
              </a>
            </li>

            <li className={`mobile-link ${activeLink === "Services" ? "active" : ""}`}>
              <a href="#Services" onClick={() => closeMenu("Services")}>
                <span className="link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </span>
                <span>Services</span>
              </a>
            </li>

            <li className={`mobile-link ${activeLink === "Connect" ? "active" : ""}`}>
              <a href="#Connect" onClick={() => closeMenu("Connect")}>
                <span className="link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </span>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <div className="mobile-actions">
            <button className="mobile-cart-button" onClick={handleCartClick}>
              <span className="cart-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartItemCount > 0 && <span className="mobile-cart-badge">{cartItemCount}</span>}
              </span>
              <span>View Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
