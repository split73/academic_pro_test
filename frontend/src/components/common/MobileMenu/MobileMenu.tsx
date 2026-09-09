import React from 'react';
import './MobileMenu.css';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onItemClick: (href: string) => void;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  isOpen,
  onItemClick,
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
      </ul>
    </div>
  );
};