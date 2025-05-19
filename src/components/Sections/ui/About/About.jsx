import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="myAboutContainer">
      <div className="myAboutContent">
        <h2>About Us</h2>
        <p>We are a digital solutions company.</p>
        <p>Our mission is to provide top-notch services to our clients.</p>
        <p>We specialize in web development, mobile app development, and digital marketing.</p>
      </div>
      <div className="myAboutImage">
        <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-png-transparent-1.png" alt="about" />
      </div>
    </div>
  )
}

export default About
