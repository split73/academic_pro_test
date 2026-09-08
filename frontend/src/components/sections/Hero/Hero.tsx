import React from 'react';
import './Hero.css';

interface HeroProps {
  onCTAClick: (buttonName: string, sub1?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">Dell Technologies™</div>
            <h1 className="hero-title">
              Starts at Dell University! <br />
              <span className="hero-title-highlight">Power Your Future</span>
            </h1>
            <p className="hero-description">
              Discover the irresistible power of Dell Technologies! From premium laptops
              to cutting-edge monitors and enterprise servers, these solutions are crafted
              to make you more productive and secure.
            </p>
            <p className="hero-text">
              Whether you're a professional, gamer, or running a business, explore the
              collection today and find something special for every need!
            </p>
            <div className="hero-discounts">
              <span className="hero-discounts-text">🔥 DELL DISCOUNTS</span>
            </div>
            <div className="hero-actions">
              <button
                onClick={() => onCTAClick('hero_shop', 'hero_main')}
                className="btn btn-primary"
              >
                Shop Now
              </button>
              <button
                onClick={() => onCTAClick('hero_learn', 'hero_secondary')}
                className="btn btn-secondary"
              >
                Learn More
              </button>
            </div>
          </div>
          <div>
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&h=400&fit=crop&crop=center"
                alt="Dell XPS Laptop"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};