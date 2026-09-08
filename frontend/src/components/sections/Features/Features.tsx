import React from 'react';
import './Features.css';

export const Features: React.FC = () => {
  const features = [
    { title: 'Premium Performance', desc: 'Intel Core Ultra processors with AI acceleration' },
    { title: 'Security First', desc: 'Built-in hardware security with Dell SafeGuard' },
    { title: 'All-Day Battery', desc: 'Up to 24 hours of battery life' },
    { title: 'Stunning Displays', desc: '4K OLED and InfinityEdge displays' },
    { title: 'Cloud Integration', desc: 'Seamless integration with Microsoft 365' },
    { title: 'Global Support', desc: '24/7 premium support in 180+ countries' },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <span className="features-badge">Education That Fits Your Life</span>
          <h2 className="features-title">Built for Tomorrow's Challenges</h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};