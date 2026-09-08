import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  onCTAClick: (buttonName: string, sub1?: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onCTAClick }) => {
  return (
    <div className="layout-main">
      <Header onCTAClick={onCTAClick} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};