import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer, NewsLetter, Headering } from './containers';
import { Trending, Nftp, Discount, Collaboration, Community, ScrollToTopButton } from './components';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
    });
  }, []);
  return (

    <div className='App'>

      <div data-aos="fade-up">
        <Headering />
      </div>
      <ScrollToTopButton />
      <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <Discount />
      </div>
      <div data-aos="flip-down">
        <Trending />
      </div>
      <div data-aos="flip-left">
        <Nftp />
      </div>
      <div data-aos="zoom-in-up">
        <Community />
      </div>
      <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <Discount />
      </div>
      <div data-aos="zoom-out-right">
        <Collaboration />
      </div>
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <NewsLetter />
      </div>
      <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <Footer />
      </div>



    </div>
  )
}

export default App