import React from 'react'
import './Footer.css'
import { FaEnvelope, FaFacebook, FaHome, FaPhone } from 'react-icons/fa'
import { FaI, FaInstagram, FaLinkedin, FaTwitter,  } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="myFooterWrapper">
      <div className="myFooter">
        <div className="myFooterContainer">
          <h3>ElevenBit</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti nulla, quasi explicabo consequuntur, quas obcaecati voluptates rerum aliquid error doloribus sit earum exercitationem maxime eaque reiciendis in reprehenderit nobis blanditiis omnis eum? Amet ea, dolorum nam itaque nesciunt facilis deleniti quae, expedita aperiam quisquam consequatur, ratione labore accusamus ut.</p>
        </div>
        <div className="myFooterContainer2">
          <div className="one">
            <h3>Pages</h3>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About Us</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Connect">Contact</a></li>
            </ul>
          </div>
          <div className="two">
            <h3>Links</h3>
            <ul>
              <li><a href="https://facebook.com"><FaFacebook /> Facebook</a></li>
              <li><a href="https://twitter.com"><FaTwitter/> Twitter</a></li>
              <li><a href="https://instagram.com"><FaInstagram/> Instagram</a></li>
              <li><a href="https://linkedin.com"><FaLinkedin/> LinkedIn</a></li>

            </ul>
          </div>
          <div className="three">
            <h3>Contact</h3>
            <ul>
              <li><FaHome /> 123 Main Street, City, Country</li>
              <li><FaPhone /> <a href="tel:+27 123 456 789">+27 123 456 789</a></li>
              <li><FaEnvelope /> <a href="mailto:0p2e3@example.com">0p2e3@example.com</a></li>

            </ul>
          </div>
        </div>
      </div>
        <p>Copyright &copy; {new Date().getFullYear()} ElevenBit (Pty) Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer


