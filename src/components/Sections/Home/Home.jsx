import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="myHomeContainer">
      <div className="myHomeContent">
        <h1>Welcome to ElevenBit</h1>
        <p>Your one-stop solution for all your digital needs.</p>
        <a href="#About" className="myButton">Learn More</a>
      </div>
      <div className="myHomeImage">
        <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-png-transparent-1.png" alt="home" />
      </div>
      
    </div>
  )
}

export default Home
