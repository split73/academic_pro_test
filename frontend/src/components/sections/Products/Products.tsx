import React from 'react';
import { CTAActionButton } from '../../common/CTAActionButton/CTAActionButton';
import { useGTM } from '../../../hooks/useGTM';
import './Products.css';

export const Products: React.FC = () => {
  const { trackCTA } = useGTM();

  const products = [
    {
      id: 'Dell 16',
      name: 'Dell 16 Laptop',
      brand: 'Dell',
      category: 'Premium Laptops',
      description: 'Intel® Core™ Processors, Windows 11 Home or Windows 11 Pro, Sleek aluminum cover chassis, , Immersive 16:10 screen, FHD webcam with manual privacy shutte',
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/16251/media-gallery/platinum-metal/fpr/notebook-dc16251-fpr-silver-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=406&qlt=100,1&resMode=sharp2&size=406,320&chrss=full',
    },
    {
      id: 'XPS',
      name: 'New XPS 13 Laptop',
      brand: 'XPS',
      category: 'Business Laptops',
      description: 'Up to Series 3 Intel® Core™ Ultra Processors, Copilot+ PC, Windows 11 Home or Windows 11 Pro',
      image: 'https://i.dell.com/assetlink/img/en/laptop-xps-13-sky-dx13260-silver-gallery-1-dl111nsx-large.png?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=617&qlt=100,1&resMode=sharp2&size=617,476&chrss=full',
    },
    {
      id: 'Alienware',
      name: 'Alienware 16 Aurora Gaming Laptop"',
      brand: 'Dell',
      category: 'Gaming Laptops',
      description: 'Intel® Core™ Processors (Series 2), Windows 11 Home or Windows 11 Pro, Up to NVIDIA® GeForce RTX™ 5070 Laptop Graphics',
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/ac16250/media-gallery/laptop-alienware-ac16250-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=578&qlt=100,1&resMode=sharp2&size=578,476&chrss=full',
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
          <span className="products-badge">Why Choose Dell?</span>
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