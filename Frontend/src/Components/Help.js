import React from "react";
import Dashboard from "./Dashboard";
function Help(){
    return(
        
        <div>
            <nav>
            </nav>
            <Dashboard />
            <p className="popup-heading">Welcome to our banking app!</p>
            <p className="popup-text">Please use the following commands for navigation:</p>
        <ul className="popup-list">
          <li>1. Go to Deposit</li>
          <li>2. Go to Withdrawal</li>
          <li>3. Go to Check Balance</li>
          <li>4. Logout</li>
        </ul>
        
        </div>
    )
}
export default Help;