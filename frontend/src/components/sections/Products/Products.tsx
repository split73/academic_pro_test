import React from 'react';
import './Products.css';

interface ProductsProps {
  onCTAClick: (buttonName: string, sub1?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onCTAClick }) => {
  const products = [
    {
      id: 'xps',
      name: 'XPS 16',
      category: 'Premium Laptops',
      description: 'Intel Core Ultra 9, 32GB RAM, 4K OLED',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'latitude',
      name: 'Latitude 9450',
      category: 'Business Laptops',
      description: 'Intel vPro, 16GB RAM, 14" 2-in-1',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'ultrasharp',
      name: 'UltraSharp 43"',
      category: 'Monitors',
      description: '4K HDR600, USB-C hub, 97% DCI-P3',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop&crop=center',
    },
    {
      id: 'poweredge',
      name: 'PowerEdge R760',
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
            <div
              key={p.id}
              className="product-card"
              onClick={() => onCTAClick(`product_${p.id}`, 'products')}
            >
              <img src={p.image} alt={p.name} className="product-image" />
              <div className="product-body">
                <div className="product-category">{p.category}</div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="products-footer">
          <button
            onClick={() => onCTAClick('view_all_products', 'products')}
            className="products-view-all"
          >
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};