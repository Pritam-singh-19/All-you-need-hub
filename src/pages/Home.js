import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Discover</span> Your Next
            <br />
            Favorite Movie
          </h1>
          <p className="hero-description">
            Explore thousands of movies, get detailed information, ratings, cast details, and much more. 
            Your ultimate movie browsing experience starts here.
          </p>
          <Link to="/movies" className="cta-button">
            Browse Movies 🎬
          </Link>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose MovieHub?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Smart Search</h3>
            <p className="feature-description">
              Find any movie instantly with our powerful search functionality
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3 className="feature-title">Top Ratings</h3>
            <p className="feature-description">
              Browse movies by ratings and see what everyone's watching
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Genre Filters</h3>
            <p className="feature-description">
              Filter movies by your favorite genres and discover new ones
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Fully Responsive</h3>
            <p className="feature-description">
              Seamless experience across all devices - mobile, tablet, desktop
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌙</div>
            <h3 className="feature-title">Dark Mode</h3>
            <p className="feature-description">
              Easy on the eyes with beautiful dark mode support
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Fast & Smooth</h3>
            <p className="feature-description">
              Lightning-fast performance with smooth animations
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Exploring?</h2>
          <p className="cta-text">
            Join thousands of movie enthusiasts and discover your next favorite film today!
          </p>
          <Link to="/movies" className="cta-button-secondary">
            Get Started Now →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
