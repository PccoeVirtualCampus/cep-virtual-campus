import React, { useState, useEffect } from 'react';
import './Home.css'; // Assuming you have CSS in a separate file for styling

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const totalSlides = document.querySelectorAll('.slide').length;
    
    // Move Slide based on the index
    const moveSlide = (n) => {
      let newIndex = slideIndex + n;

      if (newIndex < 0) {
        newIndex = totalSlides - 1;
      } else if (newIndex >= totalSlides) {
        newIndex = 0;
      }

      setSlideIndex(newIndex);
    };

    document.querySelector('.prev').addEventListener('click', () => {
      moveSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
      moveSlide(1);
    });

    return () => {
      document.querySelector('.prev').removeEventListener('click', () => moveSlide(-1));
      document.querySelector('.next').removeEventListener('click', () => moveSlide(1));
    };
  }, [slideIndex]);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="left-nav">
          <label className="logo">Virtual Campus</label>
          <img src="./images/logo.jpeg" alt="logo" className="logo-img" />
        </div>
        <ul>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">References</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Section */}
      <section>
        <div className="Section-top back">
          <div className="con">
            <h2 className="text-big">Tired of Error 404 Classroom NOT FOUND !!!</h2>
            <button className="bt">Xplore Campus</button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section>
        <div className="carousel">
          <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            <div className="slide">Slide 1</div>
            <div className="slide">Slide 2</div>
            <div className="slide">Slide 3</div>
            <div className="slide">Slide 4</div>
          </div>
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div id="heading">
          <h2>Features</h2>
        </div>
        <div className="cards">
          <div className="c">
            <h3>Interactive Dashboard</h3>
            <p>Your personalized dashboard is designed to keep everything you need at your fingertips.</p>
          </div>
          <div className="c">
            <h3>All-in-One Platform</h3>
            <p>Everything you need for your academic journey is now in one place!</p>
          </div>
          <div className="c">
            <h3>Easy Navigation</h3>
            <p>Getting around the Virtual Campus is a breeze!</p>
          </div>
          <div className="c">
            <h3>Student Forums</h3>
            <p>Connect with your peers and engage in meaningful discussions through our student forums.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="conh2">Contact Us</h2>
        <div className="form">
          <input type="text" className="form-input" placeholder="Enter Your Phone number" />
          <input type="text" className="form-input" placeholder="Enter Your Name" />
          <input type="text" className="form-input" placeholder="Enter Your Email" />
          <textarea className="form-input" cols="30" rows="10" placeholder="Please Elaborate your Concern"></textarea>
          <button className="sub-btn">Submit Response</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-logo">
          <img src="./images/pccoe logo.png" alt="PCCOE Logo" className="pccoe" />
          <img src="./images/logo.jpeg" alt="Virtual Campus Logo" className="virtu" />
        </div>
        <div className="footer-content" id="foot">
          <div className="footer-section">
            <h3>Get in Touch</h3>
            <a href="https://www.instagram.com/yourusername" target="_blank">Instagram</a>
            <a href="https://www.twitter.com/yourusername" target="_blank">Twitter</a>
          </div>
          <div className="footer-section">
            <h3>Creator's LinkedIn Profiles</h3>
            <a href="https://www.linkedin.com/in/user3" target="_blank">Eshal Shaikh</a>
            <a href="https://www.linkedin.com/in/user4" target="_blank">Harshal Patil</a>
            <a href="https://www.linkedin.com/in/user2" target="_blank">Akshay Dhere</a>
          </div>
          <div className="footer-contact">
            <h3>Get In Touch With Us</h3>
            <p>Phone: 020 2765 3168</p>
            <p>ADDRESS: MQ37+M3C, Nigdi, Pimpri, Maharashtra 411044</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
