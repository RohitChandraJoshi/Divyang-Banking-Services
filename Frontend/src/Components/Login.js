import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TestSpeech from "./SpeechReco";
import './Styles.css'

function Login() {
  const [userData, setUserData] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  async function onLoginClick(event) {
    console.log(event);
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(popupTimeout);
  }, []);

  return (
    <div className="container">
      {showPopup && (
          <div class="popup-container2">
          <div class="popup">
            <h2 class="popup-text">Please use the following commands for Login:</h2>
            <ol class="popup-list">
              <h3>1- enter username __(then your username)  &nbsp;&nbsp;&nbsp; 4- Submit</h3>
              <h3>2- enter password__(then your password)   &nbsp;&nbsp;&nbsp;&nbsp; 5- Signup</h3>
              <h3>3- back  </h3>
          
              <p>test credentials - enter username Mohit, enter password 1314, submit</p>
            </ol>
          </div>
        </div>
        
        )}

      {userData && userData.user}
      <TestSpeech />
      <nav>
      </nav>
      <div className="form-container">
      <div className="row">
        <div className="col-md-4">
          <h1>Login</h1>
          <form id="form" action="http://localhost:3000/login" method="post">
            <div className="form-group" controlId="usernameId">
              <label htmlFor="name">User name</label>
              <input
                type="text"
                name="username"
                id="name"
                placeholder="Enter user name"
              />
            </div>

            <div className="form-group" controlId="passwordId">
              <label htmlFor="password">Your password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" onClick={onLoginClick}>
              Submit
            </button>
          </form>
          <p className="mt-2">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default Login;
