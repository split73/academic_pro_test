import React from 'react';
import './NavLinks.css'

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavLinksProps {
  items: NavItem[];
  onItemClick: (href: string) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ items, onItemClick }) => {
  return (
    <ul className="nav-list">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onItemClick(item.href);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};