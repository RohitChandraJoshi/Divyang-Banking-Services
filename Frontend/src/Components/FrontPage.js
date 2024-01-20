import React, { useState, useEffect } from 'react';
// import Header from './header';
import LandingPage from './LandingPage';
import Feature from './feature';
import About from './about';
import Contact from './contact';
import Footer from './footer';


const FrontPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 10000); // 10 seconds in milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h1 >Welcome to our Banking App!</h1>
            <h2 >Please use following commands to navigate:</h2>
            <ol class="popup-list" >
              
              <h3>1- About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4- get started</h3>
              <h3>2- Features &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 5- Login</h3>
              
              <h3 >3- Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;7- Sign up  </h3>
              <h3 >4- home &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   8-Commands</h3>
              
            </ol>
          </div>
        </div>
      )}
      {/* <Header /> */}
      <LandingPage />
      <About />
      <Feature />
      <Contact />
      <Footer />
    </main>
  );
};

export default FrontPage;
