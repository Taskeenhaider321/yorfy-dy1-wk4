import React, { useState, useEffect } from 'react';
import "./scrollToTop.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      onClick={scrollToTop}
      id="myBtn"
      title="Go to top"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;