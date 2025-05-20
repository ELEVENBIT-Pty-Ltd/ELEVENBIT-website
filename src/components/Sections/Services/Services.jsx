"use client"

import { useEffect, useRef, useState } from "react"
import "./Services.css"

const Services = () => {
  const headingRef = useRef(null)
  const introRef = useRef(null)
  const servicesRef = useRef(null)
  const [activeService, setActiveService] = useState(0)

  // Services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We create responsive, high-performance websites and web applications tailored to your business needs. Our solutions are built with modern technologies and best practices to ensure scalability and maintainability.",
      icon: (
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
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "CMS Development"],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "We develop native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions are designed to be fast, reliable, and engaging across all devices.",
      icon: (
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
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Maintenance & Support"],
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "We help businesses grow their online presence and reach their target audience through strategic digital marketing campaigns. Our data-driven approach ensures maximum ROI for your marketing budget.",
      icon: (
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
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "We create intuitive and engaging user interfaces that enhance user experience and drive conversion. Our design process is focused on understanding user needs and business goals.",
      icon: (
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
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description:
        "We provide scalable and secure cloud infrastructure solutions that help businesses reduce costs and improve efficiency. Our cloud experts ensure smooth migration and optimal performance.",
      icon: (
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
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      features: ["Cloud Migration", "DevOps", "Serverless Architecture", "Cloud Security"],
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description:
        "We leverage artificial intelligence and machine learning to help businesses automate processes, gain insights from data, and create intelligent applications.",
      icon: (
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
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
          <circle cx="7" cy="16" r="1"></circle>
          <circle cx="17" cy="16" r="1"></circle>
        </svg>
      ),
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "AI Integration"],
    },
  ]

  useEffect(() => {
    // Simple animation on load
    const elements = [headingRef.current, introRef.current, servicesRef.current]
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

    // Auto-rotate services
    const interval = setInterval(() => {
      setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="services-container">
      {/* Decorative bubbles */}
      <div className="bubbles-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      <div className="services-content-wrapper">
        <div className="services-header" ref={headingRef}>
          <h1>
            Our <span className="highlight">Services</span>
          </h1>
          <div className="accent-line"></div>
        </div>

        <div className="services-intro" ref={introRef}>
          <p>
            We offer comprehensive digital solutions tailored to your business needs. Our expert team delivers
            cutting-edge services that drive growth and innovation.
          </p>
        </div>

        <div className="services-main" ref={servicesRef}>
          <div className="services-tabs">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-tab ${activeService === index ? "active" : ""}`}
                onClick={() => setActiveService(index)}
              >
                <div className="tab-icon">{service.icon}</div>
                <span>{service.title}</span>
              </div>
            ))}
          </div>

          <div className="services-content">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-content ${activeService === index ? "active" : ""}`}
              >
                <div className="service-details">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>

                  <div className="service-features">
                    {service.features.map((feature, i) => (
                      <div className="feature-item" key={i}>
                        <div className="feature-icon">
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
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="service-cta">
                    <span>Learn More</span>
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
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

                <div className="service-image">
                  <div className="image-shape"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description.substring(0, 100)}...</p>
              <button className="card-cta">
                <span>Details</span>
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
