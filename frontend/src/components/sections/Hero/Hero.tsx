import React from 'react';
import { CTAActionButton } from '../../common/CTAActionButton/CTAActionButton';
import { useGTM } from '../../../hooks/useGTM';
import './Hero.css';

export const Hero: React.FC = () => {
  const { trackCTA } = useGTM();

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
              Discover the irresistible power of Dell Technologies!
            </p>
            <div className="hero-actions">
              <CTAActionButton
                brandName="Dell"
                sub1="hero_main"
                label="Shop Now"
                className="btn btn-primary"
                onClick={() => trackCTA('Dell', 'hero_main')}
              />
              <CTAActionButton
                brandName="Dell"
                sub1="hero_secondary"
                label="Learn More"
                className="btn btn-secondary"
                onClick={() => trackCTA('Dell', 'hero_secondary')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};