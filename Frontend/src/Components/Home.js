import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import annyang from "annyang";
import { useState } from "react";
import "G:/Projects/Final Divyang/Divyang/Divyang/Frontend/src/App.css";
// import Withdrawal from "./Withdrawal";
import Transfer from "./Transfer";
import CheckBalance from "./Account";
import TestSpeech from "./SpeechReco";
import Login from "./Login";
import Signup from "./Signup";
import FrontPage from "./FrontPage";
// import MainPage from "./components/MainPage";


const NotFound = () => (
  <div className="page-container">
    <h2>404 - Page not found</h2>
  </div>
);
const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="popup" onClick={handleClose}>
      <h1>This is a pop-up!</h1>
      <p>This pop-up will disappear in 10 seconds.</p>
    </div>
  );}
function Home() {
  useEffect(() => {
    if (annyang) {
      annyang.addCommands({

        "go to Account Balance": () => {
          window.location.href = "/Account";
        },
        "go to login": () => {
          window.location.href = "/login";
        },
        "home": () => {
          window.location.href = "/";
        },

        "open transfer": () => {
          window.location.href = "/transfer";
        },
        "get started": () => {
          window.location.href = "/Login";
        },
        "about ": () => {
          window.location.href = "#about";
        },
        "commands": () => {
          window.location.href = "/";
        },
        "how to contact": () => {
          window.location.href = "#contact";
        },
        "contact": () => {
          window.location.href = "#contact";
        },
        "about": () => {
          window.location.href = "#about";
        },
        "go to features": () => {
          window.location.href = "#features";
        },
        "go to Commands": () => {
          window.location.href = "";
        },
        features: () => {
          window.location.href = "#features";
        },
        "contact us": () => {
          window.location.href = "#contact";
        },
        "open Account Balance": () => {
          window.location.href = "/Account";
        },
        "open login": () => {
          window.location.href = "/Login";
        },
        "please login": () => {
          window.location.href = "/Login";
        },
        "please sign in": () => {
          window.location.href = "/Login";
        },
        "open sig in": () => {
          window.location.href = "/Login";
        },
        "sign in": () => {
          window.location.href = "/Login";
        },
        "open home": () => {
          window.location.href = "/";
        },
        "logout": () => {
          window.location.href = "/";
        },
        "please logout": () => {
          window.location.href = "/";
        },
        
      });
      annyang.start();
      annyang.addCallback("result", (result) => {
        const transcript = result[0];
        console.log(transcript);
        // Do something with the transcript, e.g. pass it to the Withdrawal component
      });
    }
    return () => {
      if (annyang) {
        annyang.removeCommands();
        annyang.abort();
      }
    };
  }, []);
  const handleCommandsClick = () => {
    // Reload the page when the "Commands" link is clicked
    window.location.reload();
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
   
      <div>
         
        <header>
          
          <nav>
         
            <img className="logo img-fluid" src="/images/bank.png" alt="" />
            <ul className="nav-bar-list">
            
              <li>
                <Link to="/" onClick={scrollToTop}>Home</Link>
                
              </li>
              <li>
              <ScrollLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-100} style={{cursor:'pointer'}} >
                About </ScrollLink>
              </li>
              <li>
              <ScrollLink to="features" smooth={true} duration={500} spy={true} exact='true' offset={-100} style={{cursor:'pointer'}} >
                Features </ScrollLink>
               
              </li>
              <li>
              <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-100} style={{cursor:'pointer'}} >
                Contact </ScrollLink>

               
              </li>
              <li> <Link to="" onClick={handleCommandsClick}>Commands</Link></li>
              
              <li style={{display: "none"}}>
              <Link to="/Login">Login</Link>
              </li>
              
              <li >
              
              </li>
            
            </ul>
            <img class="collapse-img" src="images/icon-hamburger.svg" alt="" />
            <img class="close" src="images/icon-close.svg" alt="" />
            <div class="nav-buttons">
            <a href="Login" class="btn-signup">
                Login 
              </a>

              <a href="signup" class="btn-signup">
                Sign up
              </a>
            </div>
          </nav>
         
          
        </header>
        <TestSpeech />
        <FrontPage />
       
      </div>
      
  
  );
};

export default Home;
