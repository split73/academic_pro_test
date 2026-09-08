import React, { useState } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { NavLinks } from '../../common/NavLinks/NavLinks.tsx';
import { CTAActionButton } from '../../common/CTAActionButton/CTAActionButton.tsx';
import { BurgerMenu } from '../../common/BurgerMenu/BurgerMenu.tsx';
import { MobileMenu } from '../../common/MobileMenu/MobileMenu.tsx';
import './Header.css';

interface HeaderProps {
  onCTAClick: (buttonName: string, sub1?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: '1. Starts with Dell Innovation!', href: '#hero' },
    { id: 'features', label: '2. Technology That Fits Your Life', href: '#features' },
    { id: 'products', label: '3. Why Choose Dell Technologies?', href: '#products' },
    { id: 'cta', label: '4. Success Stories & Reviews', href: '#cta' },
    { id: 'start', label: '5. Start Your Journey Today!', href: '#start' },
  ];

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <HeaderLogo />
          <BurgerMenu
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <nav className="header-nav">
          <NavLinks items={navItems} onItemClick={handleNavClick} />
          <CTAActionButton
            onClick={() => onCTAClick('main_cta_button', 'header_cta')}
          />
        </nav>
      </div>

      <MobileMenu
        items={navItems}
        isOpen={isMenuOpen}
        onItemClick={handleNavClick}
        onCTAClick={onCTAClick}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
};