import React from 'react';
import { Hero } from '../../components/sections/Hero/Hero';
import { Features } from '../../components/sections/Features/Features';
import { Products } from '../../components/sections/Products/Products';
import { CTASection } from '../../components/sections/CTASection/CTASection';
import './Home.css';

interface HomeProps {
  onCTAClick: (buttonName: string, sub1?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onCTAClick }) => {
  return (
    <div className="home">
      <Hero onCTAClick={onCTAClick} />
      <Features />
      <Products onCTAClick={onCTAClick} />
      <CTASection onCTAClick={onCTAClick} />
    </div>
  );
};