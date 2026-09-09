import React from 'react';
import { CTAActionButton } from '../../common/CTAActionButton/CTAActionButton';
import { useGTM } from '../../../hooks/useGTM';
import './Products.css';

export const Products: React.FC = () => {
  const { trackCTA } = useGTM();

  const products = [
    {
      id: 'xps',
      name: 'XPS 16',
      brand: 'Dell',
      category: 'Premium Laptops',
      description: 'Intel Core Ultra 9, 32GB RAM, 4K OLED',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'latitude',
      name: 'Latitude 9450',
      brand: 'Dell',
      category: 'Business Laptops',
      description: 'Intel vPro, 16GB RAM, 14" 2-in-1',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'ultrasharp',
      name: 'UltraSharp 43"',
      brand: 'Dell',
      category: 'Monitors',
      description: '4K HDR600, USB-C hub, 97% DCI-P3',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'poweredge',
      name: 'PowerEdge R760',
      brand: 'Dell',
      category: 'Servers',
      description: 'Dual Intel Xeon, 2TB DDR5',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
    },
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-header">
          <span className="products-badge">Why Choose Dell University?</span>
          <h2 className="products-title">Explore Our Premium Lineup</h2>
          <p className="products-subtitle">Discover the perfect solution for your needs.</p>
        </div>
        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} className="product-image" />
              <div className="product-body">
                <div className="product-category">{p.category}</div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.description}</p>
                <CTAActionButton
                  brandName={p.brand}
                  sub1={`product_${p.id}`}
                  label="Shop Now"
                  className="product-cta-btn"
                  onClick={() => {
                    trackCTA(p.brand, `product_${p.id}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="products-footer">
          <CTAActionButton
            brandName="Dell"
            sub1="view_all_products"
            label="View All Products →"
            className="products-view-all"
            onClick={() => {
              trackCTA('Dell', 'view_all_products');
            }}
          />
        </div>
      </div>
    </section>
  );
};