import React from "react";
import Home from "./Home";
function Help1(){
    return(
        
        <div>
            <nav>
            </nav>
           
            <p style={{ color: 'red', fontFamily: 'Arial' }}>Welcome to our Banking App!</p>
            <p style={{ color: 'red', fontFamily: 'Arial' }}>Please use following commands to navigate:</p>
            <ul >
              <li style = {{ fontSize: 18}}>1- Go to Login</li> 
              <li style = {{ fontSize: 18}}>2- Go to Features</li>
              <li style = {{ fontSize: 18}}>3- How to Contact</li>
              <br />
              <li style = {{ fontSize: 18}}>4- Go to login</li>
              <li style = {{ fontSize: 18}}>4- Go to Signup</li>
              
              <li style = {{ fontSize: 18}}>5- Go to About </li>
            </ul>
        
        </div>
    )
}
export default Help1;