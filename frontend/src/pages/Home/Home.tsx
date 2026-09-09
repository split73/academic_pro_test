import React from 'react';
import { Hero } from '../../components/sections/Hero/Hero';
import { Features } from '../../components/sections/Features/Features';
import { Products } from '../../components/sections/Products/Products';
import { CTASection } from '../../components/sections/CTASection/CTASection';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Products />
      <CTASection />
    </div>
  );
};