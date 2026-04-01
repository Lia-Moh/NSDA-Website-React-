import React from 'react';
import './index.css';
import CTA from './components/CTA';
import Form from './components/Form';
import Footer from './components/Footer'; 
function App() {
  return (
    <main>
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: '#F3F3FF',
        minHeight: '200px'
      }}>
        <h1 style={{ color: '#013463' }}>NSDA Website</h1>
        <p>Under construction - Team members adding sections</p>
      </div>
      <CTA />
      <Form />
      <Footer />
    </main>
  );
}

export default App;