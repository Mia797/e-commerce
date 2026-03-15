import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Background Shapes for Glassmorphism */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-text-wrapper">
          <span className="badge-new">New Collection 2026</span>
          <h1 className="hero-heading">
            Discover The <br/> <span className="text-gradient">Future</span> of Style.
          </h1>
          <p className="hero-description">
            Step into a world of curated digital fashion, cutting-edge electronics, and premium essentials. Uncompromising quality meets futuristic design.
          </p>
          <div className="hero-action-buttons">
            <Link to="/products" className="btn-glow">
              Explore Products
            </Link>
            <Link to="/register" className="btn-outline">
              Sign Up Free
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <h2>10K+</h2>
              <p>Products</p>
            </div>
            <div className="stat">
              <h2>24/7</h2>
              <p>Support</p>
            </div>
            <div className="stat">
              <h2>99%</h2>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-card main-card">
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2024&auto=format&fit=crop" 
              alt="Premium Shoes" 
              className="floating-img"
            />
            <div className="card-info">
              <h4>Neon Runners v2</h4>
              <p>$199.00</p>
            </div>
          </div>
          <div className="glass-card sub-card one">
            <span className="icon">🎧</span>
            <span>Audio Gear</span>
          </div>
          <div className="glass-card sub-card two">
            <span className="icon">⌚</span>
            <span>Wearables</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Categories / Features */}
      <section className="highlights-section">
        <div className="highlights-header">
          <h2>Why Choose <span className="text-gradient">Mii</span></h2>
          <p>We redefine exactly what a shopping experience should be.</p>
        </div>

        <div className="highlights-grid">
          <div className="glass-box">
            <div className="box-icon">🚀</div>
            <h3>Next-Gen Delivery</h3>
            <p>Our drone and hyper-logistics network ensures your package arrives in mere hours, not days.</p>
          </div>
          <div className="glass-box">
            <div className="box-icon">🔒</div>
            <h3>Quantum Security</h3>
            <p>Your transactions are secured by top-tier end-to-end encryption. Absolute peace of mind.</p>
          </div>
          <div className="glass-box">
            <div className="box-icon">💎</div>
            <h3>Exclusive Brands</h3>
            <p>Get access to limited-drop merchandise from the world's most sought-after designers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;