import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WhatWeDo from '../sections/WhatWeDo';
import Mentorship from '../sections/Mentorship';
import Projects from '../sections/Projects';
import Nujum from '../sections/Nujum';
import Leadership from '../sections/Leadership';
import CTA from '../sections/CTA';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Add padding-top to hero to prevent hiding under fixed navbar */}
      <div style={{ paddingTop: '70px' }}>
        <Hero />
      </div>
      <div id="about"><About /></div>
      <div id="what-we-do"><WhatWeDo /></div>
      <div id="mentorship"><Mentorship /></div>
      <div id="projects"><Projects /></div>
      <div id="nujum"><Nujum /></div>
      <div id="leadership"><Leadership /></div>
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;