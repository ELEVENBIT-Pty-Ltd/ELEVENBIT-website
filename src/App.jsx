import { useState, useEffect, useRef } from 'react'
import Navbar from './components/ui/NavBar/Navbar'
import Footer from './components/ui/Footer/Footer'
import Home from './components/Sections/Home/Home'
import About from './components/Sections/ui/About/About'
import Services from './components/Sections/Services/Services'
import Connect from './components/Sections/Connect/Connect'
import Cart from './components/ui/Cart/Cart'
import { ArrowUp } from 'lucide-react'
// Custom hook for scroll reveal effect
const useScrollReveal = (threshold = 0.125) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once element has been revealed, no need to keep observing
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold, // how much of the element needs to be visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// ScrollReveal wrapper component
const ScrollReveal = ({ children, delay = 0, duration = 0.6, distance = '80px' }) => {
  const [ref, isVisible] = useScrollReveal();

  // Define animation style
  const revealStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} style={revealStyle}>
      {children}
    </div>
  );
};

const App = () => {
  const [cartFileOpened, setCartFileOpened] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Set a threshold for when to show the scroll button (e.g., 300px scrolled)
  const SCROLL_THRESHOLD = 10;
  
  // Handle scroll event to show/hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      // Show button when scrolled down past threshold
      if (currentScrollPosition > SCROLL_THRESHOLD) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page loads already scrolled
    handleScroll();
    
    // Clean up listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <nav>
        <Navbar onCartOpen={setCartFileOpened} />
      </nav>

      {!cartFileOpened ? (
        <main>
          <section id="Home">
            <Home />
          </section>

          <ScrollReveal>
            <section id="About">
              <About />
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section id="Services">
              <Services />
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <section id="Connect">
              <Connect />
            </section>
          </ScrollReveal>
        </main>
      ) : (
        <div>
          <Cart onCartClose={setCartFileOpened} />
        </div>
      )}

      <footer>
        <Footer />
      </footer>
      
      {/* Scroll to top button - only shown when scrolled down */}
      {showScrollButton && (
        <button 
          className="scrollUpButton" 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 99,
            // padding: '10px 15px',
            borderRadius: '50%',
            backgroundColor: 'var(--Primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            opacity: 0.8,
            transition: 'opacity 0.3s'
          }}
          onMouseOver={(e) => e.target.style.opacity = 1}
          onMouseOut={(e) => e.target.style.opacity = 0.8}
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default App