import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      url: 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Latest Split AC Collection',
      subtitle: 'Energy efficient cooling solutions for your home',
    },
    {
      url: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Window AC Special Offers',
      subtitle: 'Up to 30% off on selected window AC units',
    },
    {
      url: 'https://images.pexels.com/photos/7005378/pexels-photo-7005378.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Premium Cassette AC',
      subtitle: 'Perfect for commercial and large residential spaces',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="banner">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={image.url} alt={image.title} />
          <div className="banner-overlay">
            <div className="banner-content">
              <h2>{image.title}</h2>
              <p>{image.subtitle}</p>
              <button className="shop-now-button">Shop Now</button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button onClick={prevSlide} className="banner-nav prev">
        <ChevronLeft className="icon" />
      </button>
      <button onClick={nextSlide} className="banner-nav next">
        <ChevronRight className="icon" />
      </button>

      {/* Dots indicator */}
      <div className="banner-dots">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;