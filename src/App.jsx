import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Programs from './components/programs/programs.jsx';
import Title from './components/Title/Title.jsx';
import About from './components/About/About.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';

const App = () => {
    const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
        <Programs />
        <About  setPlayState={ setPlayState} />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
