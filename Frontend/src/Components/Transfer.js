import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { useParams } from "react-router-dom";
import AccountSpeech from "./MainAccountSpeech";
import 'G:/Projects/Final Divyang/Divyang/Divyang/Frontend/src/css/Transfer.css'

export default function Transfer() {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(popupTimeout);
  }, []);
  const { id } = useParams();
  const [state, changeState] = useState("");
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/transfer/${id}`)
      .then((res) => res.json())
      .then((data) => changeState(data.message));
  }, []);

  return (
    
    <div className="container">
      {showPopup && (
          <div class="popup-container2">
          <div class="popup">
            <h2 class="popup-text">Please use the following commands to transfer money:</h2>
            <ol class="popup-list">
              <h3>1- enter username __(then your username)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4- Submit</h3>
              <h3>2- enter amount__(then amount that you want to send)   &nbsp;&nbsp; 5- Signup</h3>
              <h3>3- enter purpose__(reason to send money)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6- Signup</h3>
          
              <p>example - enter username Rohit, enter amount 30, enter purpose family, transfer money</p>
            </ol>
          </div>
        </div>
        
        )}
      <AccountSpeech />
      <Dashboard />
      <form action={`http://localhost:3000/transfer/${id}`} method="post" id="form" className="form-container">
      <label htmlFor="usernameId">Enter recipient username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        ></input>
        <label htmlFor="amountId">Enter amount you want to send</label>
        <input
          type="text"
          id="amount"
          name="amount"
          placeholder="Enter Amount"
        ></input>
        <label htmlFor="purposeId">Enter purpose or Reason</label>
        <input type="text" name="purpose" id="purpose" placeholder="Purpose"></input>
        <button id="transfer" type="submit">
          Transfer Money
        </button>
      </form>

      {responseData && <div>{responseData.message}</div>}
    </div>
  );
}
