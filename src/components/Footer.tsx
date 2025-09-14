import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4 className="footer-heading online-shopping-heading">ONLINE SHOPPING</h4>
        <ul className="footer-links">
          <li><a href="/products/men">Men's Fashion</a></li>
          <li><a href="/products/women">Women's Fashion</a></li>
          <li><a href="/products/kids">Kids' Fashion</a></li>
          <li><a href="/products/accessories">Accessories</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-heading customer-policies-heading">CUSTOMER POLICIES</h4>
        <ul className="footer-links">
          <li><a href="/policy/return">Return Policy</a></li>
          <li><a href="/policy/shipping">Shipping Policy</a></li>
          <li><a href="/policy/privacy">Privacy Policy</a></li>
          <li><a href="/policy/terms">Terms of Service</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-heading useful-links-heading">USEFUL LINKS</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-heading experience-app-heading">EXPERIENCE APP ON MOBILE</h4>
        <p>Download our app for the best shopping experience.</p>
        <div className="app-store-buttons">
          <a href="/download/android" className="app-store-button">Android</a>
          <a href="/download/ios" className="app-store-button">iOS</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;