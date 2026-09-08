import React from 'react';
import { CTAActionButton } from '../CTAActionButton/CTAActionButton';
import './MobileMenu.css'

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onItemClick: (href: string) => void;
  onCTAClick: (buttonName: string, sub1?: string) => void;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  isOpen,
  onItemClick,
  onCTAClick,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} className="mobile-menu-item">
            <a
              href={item.href}
              className="mobile-menu-link"
              onClick={(e) => {
                e.preventDefault();
                onItemClick(item.href);
                onClose();
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="mobile-menu-button">
          <CTAActionButton
            onClick={() => {
              onClose();
              onCTAClick('mobile_cta', 'mobile');
            }}
          />
        </li>
      </ul>
    </div>
  );
};