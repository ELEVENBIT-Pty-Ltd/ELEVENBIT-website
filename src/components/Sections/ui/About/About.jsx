"use client"

import { useEffect, useRef } from "react"
import "./About.css"

const About = () => {
  const headingRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const teamSectionRef = useRef(null)

  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Sarah Williams",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Michael Chen",
      position: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Emily Rodriguez",
      position: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "David Kim",
      position: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Jessica Patel",
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Robert Wilson",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Olivia Martinez",
      position: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "James Taylor",
      position: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Sophia Lee",
      position: "UI Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Daniel Brown",
      position: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ]

  useEffect(() => {
    // Simple animation on load
    const elements = [headingRef.current, contentRef.current, imageRef.current, teamSectionRef.current]
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add("animate-in")
        }, 100 * index)
      }
    })

    // Animate bubbles
    const bubbles = document.querySelectorAll(".bubble")
    bubbles.forEach((bubble) => {
      setInterval(() => {
        const xPos = Math.random() * 20 - 10
        const yPos = Math.random() * 20 - 10
        bubble.style.transform = `translate(${xPos}px, ${yPos}px)`
      }, 3000)
    })
  }, [])

  const scrollTeam = (direction) => {
    const container = document.querySelector(".team-cards-container")
    const scrollAmount = 320 // Approximate card width + gap
    if (container) {
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <div className="about-container">
      {/* Decorative bubbles */}
      <div className="bubbles-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      <div className="about-content-wrapper">
        <div className="about-header" ref={headingRef}>
          <h1>
            About <span className="highlight">Us</span>
          </h1>
          <div className="accent-line"></div>
        </div>

        <div className="about-main-content">
          <div className="about-text" ref={contentRef}>
            <p className="about-intro">
              We are a forward-thinking digital solutions company dedicated to transforming businesses through
              innovative technology.
            </p>

            <div className="about-details">
              <div className="about-detail-item">
                <div className="detail-icon">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="detail-content">
                  <h3>Our Mission</h3>
                  <p>
                    To provide exceptional digital solutions that empower businesses to thrive in the modern
                    technological landscape.
                  </p>
                </div>
              </div>

              <div className="about-detail-item">
                <div className="detail-icon">
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="detail-content">
                  <h3>Our Expertise</h3>
                  <p>
                    We specialize in web development, mobile applications, cloud solutions, and digital transformation
                    strategies.
                  </p>
                </div>
              </div>

              <div className="about-detail-item">
                <div className="detail-icon">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path>
                  </svg>
                </div>
                <div className="detail-content">
                  <h3>Our Approach</h3>
                  <p>
                    We combine cutting-edge technology with human-centered design to create solutions that are both
                    powerful and intuitive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-container" ref={imageRef}>
            <div className="about-image">
              <div className="overlay"></div>
            </div>
            <div className="image-accent"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section" ref={teamSectionRef}>
          <div className="team-header">
            <h2>
              Meet Our <span className="highlight">Team</span>
            </h2>
            <div className="team-nav">
              <button className="team-nav-button" onClick={() => scrollTeam("left")}>
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
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="team-nav-button" onClick={() => scrollTeam("right")}>
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
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="team-cards-wrapper">
            <div className="team-cards-container">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <div className="team-card-image">
                    <img src={member.image || "/placeholder.svg"} alt={member.name} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="team-card-content">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
