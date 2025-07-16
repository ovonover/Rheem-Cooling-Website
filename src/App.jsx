import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Ticker from './components/Ticker';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Banner />
            <div className="container section-container">
              <ProductGrid showTopSelling={true} />
            </div>
          </>
        );
      case 'split-ac':
        return (
          <div className="container section-container">
            <ProductGrid category="Split AC" />
          </div>
        );
      case 'window-ac':
        return (
          <div className="container section-container">
            <ProductGrid category="Window AC" />
          </div>
        );
      case 'cassette-ac':
        return (
          <div className="container section-container">
            <ProductGrid category="Cassette AC" />
          </div>
        );
      case 'top-selling':
        return (
          <div className="container section-container">
            <ProductGrid showTopSelling={true} />
          </div>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      default:
        return (
          <>
            <Banner />
            <div className="container section-container">
              <ProductGrid showTopSelling={true} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="app">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="main-content">
        {renderContent()}
        {activeSection === 'home' && <Gallery />}
      </main>
      
      <Footer />
      <Ticker />
    </div>
  );
}

export default App;