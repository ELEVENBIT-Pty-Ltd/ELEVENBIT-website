import { useEffect, useRef } from "react"
import "./Home.css"

const Home = () => {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    // Simple animation on load
    const elements = [headingRef.current, paragraphRef.current, ctaRef.current, imageRef.current, featuresRef.current]
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

  return (
    <div className="home-container">
      {/* Decorative bubbles */}
      <div className="bubbles-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      <div className="content-wrapper">
        <div className="content-text">
          <div className="text-content-inner">
            <h1 ref={headingRef}>
              <span className="highlight">Create</span> innovative
              <br />
              software solutions
            </h1>
            <p ref={paragraphRef}>
              Transforming your business with cutting-edge technology
              <br />
              tailored to your specific needs and budget
            </p>

            <div className="cta-wrapper" ref={ctaRef}>
              <button className="cta-button primary">
                <span>GET STARTED</span>
                <div className="circle-icon">
                  <span className="arrow">→</span>
                </div>
              </button>

              <button className="cta-button secondary">
                <span>VIEW OUR WORK</span>
              </button>
            </div>

            <div className="features-section" ref={featuresRef}>
              <div className="feature">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Secure</h3>
                  <p>Enterprise-grade security</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Scalable</h3>
                  <p>Grows with your business</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Innovative</h3>
                  <p>Cutting-edge technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="background-pattern"></div>
        </div>

        <div className="image-container" ref={imageRef}>
          <div className="tech-image">
            <div className="overlay"></div>
          </div>
          <div className="image-accent"></div>
          <div className="image-accent-2"></div>

          <div className="tech-indicators">
            <div className="tech-indicator">
              <div className="pulse-circle"></div>
              <div className="indicator-line"></div>
              <div className="indicator-text">AI Integration</div>
            </div>
            <div className="tech-indicator indicator-2">
              <div className="pulse-circle"></div>
              <div className="indicator-line"></div>
              <div className="indicator-text">Cloud Native</div>
            </div>
            <div className="tech-indicator indicator-3">
              <div className="pulse-circle"></div>
              <div className="indicator-line"></div>
              <div className="indicator-text">Microservices</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
