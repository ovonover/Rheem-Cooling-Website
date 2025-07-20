import React, { useState, useEffect } from 'react';
import { ShoppingCart, MapPin, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count
    const count = localStorage.getItem('visitorCount');
    if (count) {
      setVisitorCount(parseInt(count) + 1);
    } else {
      setVisitorCount(1247); // Starting count
    }
    localStorage.setItem('visitorCount', visitorCount.toString());
  }, []);

  return (
    <header className="header">

      {/* Main header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-section">
              <div className="logo-container">
                <h1>Rheem</h1>
              </div>
              <div className="brand-info">
                <h2>Cooling</h2>
                <p>Brighter Every Day</p>
              </div>
            </div>

            {/* Visitor counter and cart */}
            <div className="header-actions">
              <div className="visitor-counter">
                <p>Visitors Today</p>
                <p className="count">{visitorCount.toLocaleString()}</p>
              </div>
              <button className="cart-button">
                <ShoppingCart className="icon" />
                Cart (0)
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;