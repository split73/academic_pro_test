import React from 'react';
import { CTAActionButton } from '../../common/CTAActionButton/CTAActionButton';
import './CTASection.css';

export const CTASection: React.FC = () => {
  const reviews = [
    { name: 'John D.', text: 'The XPS 16 has completely transformed my workflow!', rating: '' },
    { name: 'Sarah M.', text: 'Best investment for my business. The Latitude series is a game-changer.', rating: '' },
    { name: 'Mike R.', text: 'Dell support is outstanding. They truly care about their customers.', rating: '' },
  ];

  return (
    <>
      <section id="cta" className="cta-reviews">
        <div className="container">
          <div className="cta-reviews-header">
            <span className="cta-reviews-badge">Student Success Stories</span>
            <h2 className="cta-reviews-title">What Our Customers Say</h2>
            <p className="cta-reviews-subtitle">
              Real stories from real people who transformed their tech experience with Dell.
            </p>
          </div>
          <div className="cta-reviews-grid">
            {reviews.map((review, i) => (
              <div key={i} className="cta-review-card">
                <div className="cta-review-rating">{review.rating}</div>
                <p className="cta-review-text">"{review.text}"</p>
                <div className="cta-review-name">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="cta-final">
        <div className="container">
          <div className="cta-final-content">
            <h2 className="cta-final-title">Start Your Journey Today with us!</h2>
            <p className="cta-final-text">
              Experience the power of Dell's latest innovations. From cutting-edge laptops
              to enterprise solutions, find the perfect fit for your needs.
            </p>
            <div className="cta-final-actions">
              <CTAActionButton
                brandName="Dell"
                sub1="cta_explore_products"
                label="Explore Products"
                className="btn btn-primary"
              />
              <CTAActionButton
                brandName="Dell"
                sub1="cta_contact_sales"
                label="Contact Sales"
                className="btn btn-secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};