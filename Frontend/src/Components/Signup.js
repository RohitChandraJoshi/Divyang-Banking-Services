import React, { useEffect, useState } from "react";
import annyang from "annyang";
import TestSpeech from "./SpeechReco";
import { Link,useNavigate } from "react-router-dom";

function Signup({ onSubmit }) {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(popupTimeout);
  }, []);
  const navigate = useNavigate();
  // function handleEvent(event) {
  //   console.log(onSubmit);
  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData.entries());
  //   onSubmit(data);
  //   navigate("/login")
  // }
  return (
    <div className="container">
      {showPopup && (
          <div class="popup-container2">
          <div class="popup">
            <h2 class="popup-text">Please use the following commands for Login:</h2>
            <ol class="popup-list">
              <h3>1- enter username __(then your username)  &nbsp;&nbsp;&nbsp; 4- Submit</h3>
              <h3>2- enter email__(then your email)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5- Signup</h3>
              <h3>3- enter password__(then your password)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6-back </h3>
          
          
              <p>example - enter username manav</p>
            </ol>
          </div>
        </div>
        
        )}
      <div className="form-container">
        <nav></nav>
      <form id="form" action="https://divyang-node.onrender.com/sign_up" method="post">
        <h1> Signup form </h1>
        <label htmlFor="usernameId">Set your username</label>
        <input
          class="box"
          type="text"
          name="username"
          id="name"
          placeholder="Name"
          required
        />{" "}
        <br />
        <label htmlFor="emailId">Enter your email id</label>
        <input
          class="box"
          type="email"
          name="email"
          id="email"
          placeholder="E-Mail "
          required
        />
        <br />
        <label htmlFor="passwordId">Set your password</label>
        <input
          class="box"
          type="password"
          name="password"
          id="password"
          placeholder="Password "
          required
        />
        <br />
        <button type="submit" id="submitDetails">
          Submit
        </button>
        <p className="mt-2">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
      <TestSpeech />
      </div>
    </div>
  );
}
export default Signup;
