import { useState, useEffect, useRef } from 'react'
import Navbar from './components/ui/NavBar/Navbar'
import Footer from './components/ui/Footer/Footer'
import Home from './components/Sections/Home/Home'
import About from './components/Sections/ui/About/About'
import Services from './components/Sections/Services/Services'
import Connect from './components/Sections/Connect/Connect'
import Cart from './components/ui/Cart/Cart'
import { ArrowUp } from 'lucide-react'

// CUSTOM HOOK FOR SCROLL REVEAL ANIMATION EFFECT
const useScrollReveal = (threshold = 0.125) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // WHEN ELEMENT ENTERS VIEWPORT
        if (entry.isIntersecting) {
          setIsVisible(true);
          // ONCE ELEMENT HAS BEEN REVEALED, STOP OBSERVING
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // VIEWPORT
        rootMargin: '0px',
        threshold, // HOW MUCH OF ELEMENT NEEDS TO BE VISIBLE
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

// SCROLL REVEAL WRAPPER COMPONENT
const ScrollReveal = ({ children, delay = 0, duration = 0.6, distance = '80px' }) => {
  const [ref, isVisible] = useScrollReveal();

  // DEFINE ANIMATION STYLE
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

  // SCROLL THRESHOLD FOR SHOWING THE SCROLL BUTTON
  const SCROLL_THRESHOLD = 10;

  // HANDLE STATUS BAR COLOR BASED ON SCROLL POSITION
  useEffect(() => {
    // CREATE OR FIND THE THEME-COLOR META TAG
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }

    // SET INITIAL COLOR
    metaThemeColor.setAttribute("content", "#f3f8f5");

    // UPDATE COLOR WHEN SCROLLING
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      // UPDATE STATUS BAR COLOR
      if (currentScrollPosition > 20) {
        metaThemeColor.setAttribute("content", "#f3f8f5f2");
      } else {
        metaThemeColor.setAttribute("content", "#f3f8f5");
      }
      
      // HANDLE SCROLL BUTTON VISIBILITY
      if (currentScrollPosition > SCROLL_THRESHOLD) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // INITIAL CHECK IN CASE PAGE LOADS ALREADY SCROLLED
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [SCROLL_THRESHOLD]);

  // SCROLL TO TOP FUNCTION
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-container">
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

      {/* SCROLL TO TOP BUTTON - ONLY SHOWN WHEN SCROLLED DOWN */}
      {showScrollButton && (
        <button
          className="scrollUpButton"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 99,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: 'var(--Primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            opacity: 0.8,
            transition: 'opacity 0.3s, transform 0.2s',
            transform: 'scale(1)',
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = 1;
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = 0.8;
            e.target.style.transform = 'scale(1)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App